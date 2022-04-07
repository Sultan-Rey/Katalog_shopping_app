import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { $, $$ } from 'protractor';
import { Displays } from 'src/models/display';
import { Product, Model, Caracteristic } from 'src/models/product';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ImagePickerOptions } from '@ionic-native/image-picker';
import { FirestoreDataService } from '../firestore-data.service';
import normalizeURL from 'normalize-url';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { isNullOrUndefined } from 'util';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeDesign } from 'src/models/homeDesign';
import { Categories } from 'src/models/category';

@Component({
  selector: 'app-newproduct-modal',
  templateUrl: './newproduct-modal.component.html',
  styleUrls: ['./newproduct-modal.component.scss'],
})
export class NewproductModalComponent implements OnInit {

  @Input() product: any;

  ngFireUploadTask: AngularFireUploadTask;
  uploadStatus = '';
  progressNum: Observable<number>;
  fileUploadedPath: Observable<string>;
  position: Observable<HomeDesign[]>
  isImgUploaded: boolean;
  dataPath: string;
  newProduct: Product;
  model: Model;
  display: Displays;
  availibility: string[];
  styleposition: string[];
  sizes: string[];
  color: string;
  nonConventional: '';
  isConventionalSize: boolean;
  readonly: boolean;
  categories$:Observable<Categories[]>;
  categorySelector: any;
  subcategories: any[];
  isfeatures: boolean;
  compt=0;
  oneSetting = {
    price: false,
    qty: false,
    availibility: false,
    inputPrice: 0.00,
    inputQty: 1,
    inputAv: 'In Stock'
  }
  slidersOpts = {
    slidesPerView: 4
  };

  constructor(private modalcontroller: ModalController, private toastcontroller: ToastController, private ngFirestore: AngularFirestore,
              private imagepicker: ImagePicker, private angularefireSG: AngularFireStorage,
              private camera: Camera, private fstoreDataService: FirestoreDataService, private loadingcontroller: LoadingController,
              ) {
    this.newProduct = {} as Product;
    this.model = {} as Model;
    this.display = {} as Displays;
    this.model.pictures = [];
    this.newProduct.models = [];
    this.newProduct.size = [];
    this.newProduct.caracteristic = [];
    this.availibility = ['In Stock', 'Out of stock', 'no longer available'];
    this.sizes = ['XS','S','M','L','XL','2XL','3XL'];
    this.categories$ = this.fstoreDataService.getAllcategories()
    this.position = this.fstoreDataService.getHomeDesign();
  }

  ngOnInit() {
    this.isConventionalSize = true;
    this.readonly = false;
    this.isfeatures = false;
    this.newProduct.deliveryFee = 0;
    this.newProduct.taxFee = 0;
    this.newProduct.shippingFee = 0;
    if(!isNullOrUndefined(this.product)){
      this.newProduct = this.product;
    }
  }

  modalDismiss() {
    this.modalcontroller.dismiss(null, 'cancelled');
  }

  onCategoryChange(){
    
    this.newProduct.category = this.categorySelector.categoryName;
    this.subcategories = this.categorySelector.subcategories;
    
  }
  
  adjustqty(pressed: string)
  {
    if(pressed === 'minus'){
      if(this.oneSetting.inputQty !== 1){
        this.oneSetting.inputQty--;
      }else{

      } 
    }
    if(pressed === 'plus'){
      this.oneSetting.inputQty++;
    }
  }

  

  onSizeChange(event){
    if(event.detail.value == "romain"){
      document.getElementById("conventional").style.display = '';
      document.getElementById("nonConventional").style.display = "none";
      this.isConventionalSize;
      this.nonConventional = '';
      this.newProduct.size.length = 0;
    }else{
      document.getElementById("conventional").style.display = "none";
      document.getElementById("nonConventional").style.display = "";
      this.isConventionalSize = false;
      this.readonly = false;
      this.newProduct.size.length = 0;
      for(let i =0; i<this.sizes.length; i++){
        document.getElementById(this.sizes[i]).setAttribute('color','light')
        document.getElementById(this.sizes[i]).setAttribute('name','inactive');
      }
    }
  }

  
  addPictures() {
    this.model = {} as Model
    this.model.pictures = [];
    this.model.id = "";
    let options: ImagePickerOptions={
    maximumImagesCount: 6,
    width: 500,
    height: 500,
    allow_video: true,
    outputType: 1
    }
  
    this.imagepicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.model.pictures.push('data:image/jpeg;base64,' +results[i]);
      }
      if(this.model.pictures.length !==0){
          this.newProduct.models.push(this.model);
      }
    }, (err) => {this.rejection(err) });
  }

  editImage(imageToEdit: string){
    /* document.getElementById('change').setAttribute('color','tertiary');
    if(imageToEdit!==''){
      console.log('Edit '+imageToEdit);
    } */
   console.log('you about to edit');

  }

  addSizes(){
   
    if(this.isConventionalSize){
      let conventional = document.getElementById('conventional');
      let selectedSize = conventional.getElementsByTagName('ion-button');
      for(let i=0; i<selectedSize.length;i++){
        if(!selectedSize[i].hasAttribute('name')){
          this.newProduct.size.push(selectedSize[i].innerHTML);
        }
      }
    }
    if(!this.isConventionalSize){
      let sizes = this.nonConventional.split(',');
      if(sizes.length > 0){
        this.newProduct.size = sizes;
      }
      if(this.newProduct.size.length!==0){
        this.readonly = true;
      }
    }
    
  }

  resetSizes(){
    for(let i =0; i<this.sizes.length; i++){
      document.getElementById(this.sizes[i]).setAttribute('color','light')
      document.getElementById(this.sizes[i]).setAttribute('name','inactive');
    }
    this.readonly = false;
    this.newProduct.size.length = 0;
  }

  selectSize(size: string){
    if(document.getElementById(size).hasAttribute('name') && !this.readonly){
      document.getElementById(size).setAttribute('color','danger');
      document.getElementById(size).removeAttribute('name');
      this.addSizes();
    }else {
      document.getElementById(size).setAttribute('color','light')
      document.getElementById(size).setAttribute('name','inactive');
      try{
        this.newProduct.size.splice(this.newProduct.size.indexOf(size),1);
      }catch(err){
        {console.log(err);}
      }
      
    }
  }

  async rejection(reason:any){
    document.getElementById('btnCreate').style.display='';
    let toast = await this.toastcontroller.create({
      message: 'Creation failed : '+reason,
      duration: 3000
    });
   await  toast.present();
  }
  

  savefeature(setting: any) {
   
    if(this.newProduct.size.length==0){
      this.newProduct.size.push('');
    }
    
    if(setting.inputPrice >= 0){
      const prepareCartesian = (array1 = [], array2 = []) => {
        const res = [];
        for(let i = 0; i < array1.length; i++){
           for(let j = 0; j < array2.length; j++){
             this.newProduct.caracteristic.push({color: array1[i].id, size: array2[j], price: setting.inputPrice, qty: setting.inputQty, availability: setting.inputAv})

            }
        };
        return this.newProduct.caracteristic;
     };
     prepareCartesian(this.newProduct.models, this.newProduct.size);
     if(this.newProduct.caracteristic.length!==0){
       this.isfeatures = true;
     }
    }
       
  }

  resetfeature(){
    this.isfeatures = false;
    this.resetSizes();
    this.newProduct.models.length = 0;
    this.newProduct.caracteristic.length = 0;
    this.readonly = false;
  }

  crypto(){
    let _character=['P','R','O','D','U','C','T'];
    let sequence:number = Math.floor(Math.random()*100);
    let index:number= Math.floor(Math.random() * 12);
    let encryption:string = _character[index]+_character[index+1]+sequence;
    return encryption;
  }

  async btnCreateProduct(product: Product, displaying: Displays) {
    product.display = displaying;
    product.creation_date= new Date(Date.now());
    product.rating = 5;
    product.code= this.crypto();
    let picturesLength = 0;
    if(this.isProductValid(product)){
      this.newProduct.models.map((model)=>{
       picturesLength += model.pictures.length
     });
     this.compt = picturesLength; 
      document.getElementById('add_container').setAttribute('readonly','true');
      document.getElementById('btnCreate').style.display='none';
     // console.log(this.compt);
       this.newProduct.models.map((model)=>{
        this.sendData(model);
     }); 
   

    }

  }

 async btnEditProduct(product: Product){
   
    this.fstoreDataService.editProduct(product).then(()=>{
      this.toastcontroller.create({
        message: 'Product edited successfully ',
        duration: 3000
      }).then((toast)=>{
        toast.present();
        this.modalDismiss();
      });
    })
       
     
    
    
  }

  /* async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async addPhoto() {
    this.model = {} as Model
    this.model.pictures = [];
    const libraryImage = await this.openLibrary();
    this.model.pictures.push('data:image/jpg;base64,' + libraryImage,'data:image/jpg;base64,' + libraryImage);
    this.model.id = '';
    if(this.model.pictures.length > 0){
       
      this.newProduct.models.push(this.model);
      
    }
    
  } */

 async sendData(data: Model){
 
  
  //Data uploading in AngularFire Storage
   for (let i = 0; i < data.pictures.length; i++) {
     let dataName = new Date().getTime() + Math.floor(Math.random() * 100) + '.jpg';
     this.dataPath = 'products/'+this.product.code+"/" + dataName;
     const imageRef = this.angularefireSG.ref(this.dataPath);
     this.ngFireUploadTask = imageRef.putString(data.pictures[i], 'data_url');
     this.progressNum = this.ngFireUploadTask.percentageChanges();
     this.uploadStatus = 'Uploading Data...'
     this.ngFireUploadTask.then(async snap => {
       this.fileUploadedPath = imageRef.getDownloadURL();
       this.fileUploadedPath.subscribe(async path => {
         data.pictures[i] = path;
       })
       this.compt--;
       if(this.compt==0){
        this.uploadStatus = 'Data uploaded successfully...'
        await this.loadingcontroller.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: 4000
         }).then((loading)=>{
          loading.present();
          this.ngFirestore.collection('product').add(this.newProduct).then(()=>{
            this.modalcontroller.dismiss();
            loading.dismiss();
          }).catch(()=> loading.dismiss());
         })
       }
     }).catch((raison) => {
       this.rejection(raison);
     })
   }
    

    /* if(this.compt ==0){
      
     } else{
      const alert = await this.alertcontroller.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Product creation',
        message: 'Product creation failed, an error occured while uploading',
        buttons: ['Ok']
      });
      await alert.present();
    } */
   
  }


  isProductValid(product: Product){
    let isvalid: boolean = false;
    if(product.availability!=="" && product.availability!==null && product.name!=="" && product.name!==null  && product.qty!==0 && 
       product.rating!==0 && !isNullOrUndefined(product.display)  && product.deliveryDate!==null){
        isvalid = true;
      }
      return isvalid;
  }


}
