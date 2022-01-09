import { Component, OnInit } from '@angular/core';
import { Message } from 'src/models/message';
import { FirestoreDataService } from '../firestore-data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { isNullOrUndefined } from 'util';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.page.html',
  styleUrls: ['./message-box.page.scss'],
})
export class MessageBoxPage implements OnInit {

  msg: Message[];
  user: User;
  constructor(private storage: Storage,private fdservice: FirestoreDataService, private fireAuth:AngularFireAuth) { 
    this.checkTypeUser();
  }

  ngOnInit() {
  }

  checkTypeUser(){
    this.storage.get("user").then(async (logUser: User) => {
      if(!isNullOrUndefined(logUser)){
        if (logUser.type == "ADMIN") {
          this.user = this.fdservice.getUsers().find((user) => { user.type == "ADMIN"; });
          if (!isNullOrUndefined(this.user)) {
            if (this.user.password == logUser.password && this.user.email == logUser.email) {
              this.msg = this.fdservice.getMessage();
              
            }
          }
        } else if (logUser.type == "ASSISTANT") {
          this.user = this.fdservice.getUsers().find((user) => { user.type == "ASSISTANT"; });
          if (!isNullOrUndefined(this.user)) {
            if (this.user.password == logUser.password && this.user.email == logUser.email) {
              this.msg = this.fdservice.getMessage().filter((msg)=>{msg.destination=="ASSISTANT"});
            }
          }
        } else {
          let userId = (await this.fireAuth.currentUser).uid;
          this.msg = this.fdservice.getMessage().filter((msg)=>{msg.destination==userId});
        }    
      }
      
    });

  }



}
