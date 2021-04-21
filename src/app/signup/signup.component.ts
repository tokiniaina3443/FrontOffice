import { Operator } from './../../interfaces/user.interface';
import { message_err_signin } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/user.interface';
import { LocalStorageService } from 'src/providers/localstorage.service';
import { Userservice } from 'src/providers/user.service';
import { message_server } from '../app.module';
import { Service } from 'src/providers/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.scss',
  ]
})
export class SignupComponent implements OnInit {

  user:User;
  message="";
  messageSucces="";
  operators:Operator[]=[];
  constructor(private service:Service,private userService:Userservice,private router:Router,public storage:LocalStorageService) {
    this.user={} as User;
    this.user.operateur=1;
   }

  ngOnInit() {
    this.operators=this.userService.getOpertors();
    console.log(this.operators);
  }

  signup(){
    const OnSucces= (response : any) => {
      if(response["status"]=="succes"){
          this.messageSucces="Your accout was created successfuly";
      }else{
          this.message=message_err_signin;
      }
      this.CloseModal();
    }
    const OnError= (response : any) => {
      if(response["status"]!=200){
        this.message=message_server + response["status"];
      }
    }
    try{
      this.OpenModal();
      this.userService.sendHttpSignup(this.user).subscribe(OnSucces,OnError);
    }catch(err){
      this.message=err;
      this.CloseModal();
    }
  }
  
  toLogin(){
    this.router.navigateByUrl("login");
  }

  OpenModal()
  {
    let modal = document.getElementById("myModal");
    if(modal)
    {
      modal.style.display = "block";
    }
  }

  CloseModal()
  {
    let modal = document.getElementById("myModal");
    if(modal)
    {
      modal.style.display = "none";
    }
  }
}
