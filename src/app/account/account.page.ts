import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { User } from 'src/models/user';
import { isNullOrUndefined } from 'util';
import { Product } from 'src/models/product';
import { NavigationExtras, Router } from '@angular/router';
import { Order } from 'src/models/order';
import { FirestoreDataService } from '../firestore-data.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/models/cartItem';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  isOnline: boolean = false;
  welcomeWord: string ='';
  user: User; 
  userId: string;
  passwordForm = this.formBuilder.group({
    old: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    new: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
  });

  public errorMessages = {
    password: [
      { type: 'required', message: 'Password is fully required' },
      { type: 'pattern', message: 'Password must be at least 8 characters with digits and uppercase' }
    ]
  }

  constructor(private formBuilder: FormBuilder, private fireauth: AngularFireAuth, private router: Router, 
    private afstore: AngularFirestore, private fireService: FirestoreDataService, private loadingcontroller: LoadingController, private storage: Storage) 
  {  
    this.isOnline = this.fireService.getConnexionState();
    this.fireauth.authState.subscribe(auth => {
    if (!auth){
      this.welcomeWord = 'Manage your account';
    }else {
      if(fireService.getConnexionState()){
        this.getUser(auth.uid);
      }else{
        this.welcomeWord = 'Welcome on Katalog'
      }
    
    }
  }); 

 
}
  ngOnInit() {
    
  }
  
   
  signout(){
    this.fireauth.signOut().then(()=>{this.storage.remove("user");});
  }
 



  getUser(userUID: any){
    
    this.afstore.collection("user").doc(userUID).get().subscribe(user=>{
              this.user = new User(user.data());
              this.welcomeWord = 'Hi, '+this.user.name+' !';
            });
            
          
  }

 
  sendProfileValue(args: any, userStatus: string ){
    if(userStatus == 'Welcome on Katalog'){
      this.router.navigateByUrl(`login`);
    }else{
      const navigationExtras: NavigationExtras = {
        state: {
          order: args,
          status: userStatus
        }
      };
      this.router.navigateByUrl(`login`,navigationExtras);
    }
    
  }

  navigateTo(args: string, extra?:string|'navigation_directive'){
   
    const navigationExtras: NavigationExtras = {
      state: {
        direction: extra
      }
    };
    this.router.navigateByUrl(`categories/${args}`,navigationExtras);
  }
   
    }
