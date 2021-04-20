import { RouterLinks } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  routerLinks:any[];
  constructor(private location:Location) { 
    this.routerLinks=RouterLinks.filter(routerLink => routerLink);
  }

  ngOnInit(): void {
   this.isActive();
  }

  isActive(){
    var active=this.location.prepareExternalUrl(this.location.path()).split('/')[2];
    for(var i=0;i<this.routerLinks.length;i++){
      if(this.routerLinks[i].title == active){
        this.routerLinks[i].class="active";
        console.log("ato" + this.routerLinks[i].title);
      }else{
        this.routerLinks[i].class="";
      }
    }
  }

}
