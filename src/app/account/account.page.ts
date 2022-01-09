import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  connected: boolean=false;

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

  constructor(private formBuilder: FormBuilder, private fireauth: AngularFireAuth, 
    private afstore: AngularFirestore, private loadingcontroller: LoadingController, private storage: Storage) 
  {  this.fireauth.authState.subscribe(auth => {
    if (!auth){
      this.connected = false;
    }else {
      this.connected = true;
    }
  }); }
  ngOnInit() {
    
  }
  async submit() {
    let correctpass:boolean=false;
    let userId= (await this.fireauth.currentUser).uid;
    this.afstore.collection('user').doc(userId).get().subscribe(obs=>{
      if(this.passwordForm.value.old == obs.get('password')){
        correctpass = true;
      }
      
    });
    if(correctpass){
      this.fireauth.currentUser.then((user)=>{ 
        user.updatePassword(this.passwordForm.value.new);}).then(async ()=>{
          const loading = await this.loadingcontroller.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000
          }).then((loaded)=>{
            loaded.present();
            loaded.onDidDismiss().then((dismiss)=>{
              this.passwordForm.value.new=null;
              this.passwordForm.value.old=null;
              console.log(dismiss);
              });
          });
        });
    }
    }
   
  signout(){
    this.fireauth.signOut().then(()=>{this.storage.set("userIsLogged", false);});
  }
 
  getOldPassword() {
    return this.passwordForm.get('old');
  }
  getNewPassword() {
    return this.passwordForm.get('new');
  }



}
