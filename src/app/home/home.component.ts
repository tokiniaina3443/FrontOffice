import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/providers/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storage:LocalStorageService,private router:Router) { }

  ngOnInit(): void {
    if(this.storage.getToken()==null){
      this.router.navigateByUrl("login");
    }
  }
  
  icons="fa-chevron-right";
  isMEnuSow=false;
  typesOffer:any=[];

  showMenu(){
    console.log("ok");
    this.isMEnuSow=true;
    const main=document.getElementsByClassName('main-body');
    const sidebar=document.getElementsByClassName('sidebar');
    sidebar[0].setAttribute('style','left:0!important');
  }

  closeMenu(){
    this.isMEnuSow=false;
    const main=document.getElementsByClassName('main-body');
    const sidebar=document.getElementsByClassName('sidebar');
    sidebar[0].setAttribute('style','left:-260px!important');
  }


}
