import { message_server, message_err_login } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import { Userservice } from 'src/providers/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/providers/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
  ]
})
export class LoginComponent implements OnInit {
  user:User;
  message="";
  confirm:string;
  constructor(private userService:Userservice,private router:Router,private storage:LocalStorageService) {
    this.user = {} as User;
    this.confirm="";
  }

  ngOnInit(): void {
  }

  login(){
    const OnSucces= (response : any) => {
      console.log(response);
       if(response["status"]=='succes'){
            this.storage.setToken(response["data"]);
            this.router.navigateByUrl('home');
        }else if(response["status"]=='error'){
            this.message = "email or password incorrect";
        }
    }
    const OnError= (response : any) => {
      //console.log(response);
      if(response["status"]!=200){
        this.message=message_server + response["status"];
      }
    }
    try{
        this.userService.sendHttpLogin(this.user).subscribe(OnSucces,OnError);
    }catch(err){
      this.message=err;
    } 
  }
  toSignup(){
    this.router.navigateByUrl('signup');
  }
}
