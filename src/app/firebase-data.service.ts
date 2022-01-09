import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  brands = [];
  slides = [];
  categories =[];
  constructor(public angularfireDB: AngularFireDatabase,public angularefireSG: AngularFireStorage) { }

  getSlidesDatabase() {
    this.angularfireDB.list('Slide').snapshotChanges(['child_added']).subscribe(slides => {
      slides.forEach(slide => {
        console.log('Slide: ' + slide.payload.exportVal().ref);
        this.getSliderStorage(slide);
      });
    });
    return this.slides;
  }
  
  getSliderStorage(slide: any) {
    const slideRef = slide.payload.exportVal().ref;
    this.angularefireSG.ref(slideRef).getDownloadURL().subscribe(imgUrl => {
      this.slides.push({
        slidesc: slide.payload.exportVal().slidesc,
        url: imgUrl
      });
    });

  }

  getBrandsDatabase() {
    this.angularfireDB.list('Brands').snapshotChanges(['child_added']).subscribe(brands => {
      brands.forEach(brand => {
        this.getBrandingStorage(brand);
      });
    });
    return this.brands;
  }

  getBrandingStorage(brand: any) {
    const brandRef = brand.payload.exportVal().signature;
    this.angularefireSG.ref(brandRef).getDownloadURL().subscribe(imgUrl => {
      this.brands.push({
        manufacturer: brand.payload.exportVal().manufacturer,
        items: brand.payload.exportVal().items,
        cover: brand.payload.exportVal().cover,
        signature: imgUrl
      });
    });
  }

  getCategoriesDatabase() {
    this.angularfireDB.list('Category').snapshotChanges(['child_added']).subscribe(categories => {
      categories.forEach(categories => {
     //   console.log('Slide: ' + categories.payload.exportVal().type);
        this.getCategoriesStorage(categories);
        
      });
    });
    return this.categories;
  }

  getCategoriesStorage(category: any) {
    const categRef = category.payload.exportVal().banner;
    this.angularefireSG.ref(categRef).getDownloadURL().subscribe(imgUrl => {
      this.categories.push({
        name: category.payload.exportVal().name,
        desc: category.payload.exportVal().desc,
        type: category.payload.exportVal().type,
        banner: imgUrl
      });
    });
  }
}
