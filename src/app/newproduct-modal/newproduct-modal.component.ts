import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { $, $$ } from 'protractor';
import { Displays } from 'src/models/display';
import { Product, Features } from 'src/models/product';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ImagePickerOptions } from '@ionic-native/image-picker';


@Component({
  selector: 'app-newproduct-modal',
  templateUrl: './newproduct-modal.component.html',
  styleUrls: ['./newproduct-modal.component.scss'],
})
export class NewproductModalComponent implements OnInit {

  newProduct: Product;
  feature: Features;
  display: Displays;
  availibility: string[];
  styleposition: string[];
  colores = [];
  policy: string[];
  ispriceOnly: boolean;
  isfeatures: boolean;
 

  slidersOpts = {
    slidesPerView: 4
  };

  constructor(private modalcontroller: ModalController, private alertcontroller: AlertController, private imagepicker: ImagePicker) {
    this.newProduct = {} as Product;
    this.feature = {} as Features;
    this.display = {} as Displays;
    this.colores = ['#ffffff', '#000000', '#fb0324', '#eafb03', '#900df1', '#27fb03', '#2196f3', '#0a24b3', '#ff9800', '#9e9e9e', '#f7cfcd'];
    this.newProduct.features = [];
    this.availibility = ['In Stock', 'Out of stock', 'no longer available'];
    this.styleposition = ['top', 'middle', 'bottom'];
    this.policy = ['Free Shipping', 'Free Return', 'Free Delivery', 'no Return'];

  }

  ngOnInit() {
    this.ispriceOnly = false;
    this.isfeatures = false;
  }

  modalDismiss() {
    this.modalcontroller.dismiss(null, 'cancelled');
  }

  addPictures() {
    let options: ImagePickerOptions;
    options.maximumImagesCount = 4;
    options.allow_video = true;
    options.outputType = 0;

    this.imagepicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  savefeature(features: Features) {

    this.feature.pictures = features.pictures;
    this.feature.color = features.color;
    this.feature.size = features.size;
    this.feature.price = features.price;
    this.newProduct.features.push(this.feature);

    if (this.newProduct.features.length > 0) {
      this.isfeatures = true;
    } else {
      this.isfeatures = false;
    }
    this.feature = {} as Features;
    console.log(this.newProduct.features);
  }

 /*  selectpolicy(policies: string) {
    if (document.getElementById(policies).getAttribute("name") == "Inactive") {

      document.getElementById(policies).setAttribute("color", "tertiary");
      document.getElementById(policies).setAttribute("name", "Active");
      this.newProduct.policy.push(policies);

    } else {

      document.getElementById(policies).removeAttribute("color");
      document.getElementById(policies).setAttribute("name", "Inactive");
      try {
        this.newProduct.policy.splice(this.newProduct.policy.indexOf(policies), 1);
      } catch (err) {

      }
    }
  
  } */


  btnCreateProduct(product: Product, displaying: Displays) {
    this.newProduct.display = displaying
    console.log(product);

  }

}
