import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { env } from 'process';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  location: string;
  query='';
  constructor(private router: Router, private navCtrl: NavController) { 
    this.location = this.router.url
  }

  ngOnInit() {}

  routeTo(route:string){
    //console.log('mi casa'+route)
      this.navCtrl.navigateForward(route);
  }
  search(event){
    if(this.query!=='' && this.query!==null){
      if(event.key=='Enter' || event.type == 'click'){
        const navigationExtras: NavigationExtras = {
          state: {
            query: this.query
          }
        };
       
        this.router.navigate(['/searchquery'], navigationExtras);
      }
    }
   
  }

}
