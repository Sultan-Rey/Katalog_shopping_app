import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { NewproductModalComponent } from './newproduct-modal/newproduct-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AddAddressModalComponent } from './add-address-modal/add-address-modal.component';
import { HttpClientModule} from '@angular/common/http';
import { PayPal} from '@ionic-native/paypal/ngx';

export const firebaseConfig = {
  apiKey: 'AIzaSyBabPrVBAjGXeNQk0NlqTlpMFUcFgNuKiw',
  authDomain: 'datafire-681e8.firebaseapp.com',
  databaseURL: 'https://datafire-681e8.firebaseio.com',
  projectId: 'datafire-681e8',
  storageBucket: 'datafire-681e8.appspot.com',
  messagingSenderId: '182727338924'
};


@NgModule({
  declarations: [AppComponent, NewproductModalComponent, AddAddressModalComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
     IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    ImagePicker,
    StatusBar,
    PayPal,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
