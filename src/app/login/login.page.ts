import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { Order } from 'src/models/order';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { ControlContainer } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/models/user';
import { isNullOrUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  dataUser = {
    mail: '',
    password: ''
  };
  data: Order|any;
  status: string
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

  constructor(private route: ActivatedRoute, private router: Router, private storage: Storage,
              private afAuth: AngularFireAuth, private loadingcontroller: LoadingController,private afstore: AngularFirestore,
              private alertcontroller: AlertController, private formBuilder: FormBuilder,private fireauth: AngularFireAuth) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.order;
        this.status = this.router.getCurrentNavigation().extras.state.status;
      }
    });
  }

  getOldPassword() {
    return this.passwordForm.get('old');
  }
  getNewPassword() {
    return this.passwordForm.get('new');
  }

/*   async submit() {
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
    }else{
      this.passwordForm.value.new=null;
              this.passwordForm.value.old=null;
    }
    } */

  async login(data: any){
    
       await this.loadingcontroller.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 5000
       }).then( async (control)=>{
         control.present();
         
         this.afAuth.signInWithEmailAndPassword(data.mail.trim(), data.password.trim()).then(async () => {
          this.dataUser = {mail: '',password: ''};
            
            if((await this.afAuth.currentUser).emailVerified){

              this.storage.set("user", (await this.afAuth.currentUser).uid.toString())
              const navigationExtras: NavigationExtras = {
                state: {
                  order: this.data
                }
              };
              control.dismiss();
              if(!isNullOrUndefined(this.data)){
                this.router.navigate(['/place-order'], navigationExtras);
              }else{ 
                this.router.navigate(['/home']);
            }
            
          }
          
          }).catch(rejection=>{control.dismiss(rejection, "alert");});
      
         control.onWillDismiss().then(async (load)=>{
          if(load.role =="alert"){
            const alert = await this.alertcontroller.create({
              cssClass: 'my-custom-class',
              header: 'Sign In alert',
              subHeader: 'Login Failed',
              message: 'Password or username incorrect',
              buttons: ['Ok']
            });
            await alert.present();
          }
           
          });//loading dismissed()
       });
  }

  toSignUp(){
    const navigationExtras: NavigationExtras = {
      state: {
        order: this.data
      }
    };
    this.router.navigate(['/signup'], navigationExtras);
  }
}
