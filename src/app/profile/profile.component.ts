import { User } from 'src/interfaces/user.interface';
import { Userservice } from 'src/providers/user.service';
import { Component, OnInit } from '@angular/core';
import { message_server } from '../app.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  messageSucces="";
  message="";
  public user:User={} as User;
  constructor(private userService:Userservice) { 
  }

  ngOnInit(){
    this.getUserProfile();
  }

  getUserProfile():void{
    this.userService.setHttpGetObservalble("/profil").subscribe((response:any)=>{
          if(response["status"]=="succes"){
              this.user=response["data"];
          }
          console.log(this.user);
    });
  }


  updateProfile(){
    console.log("ok");
    const OnSucces= (response : any) => {
      console.log(response);
      if(response["status"]=="succes"){
          this.messageSucces="Update succes";
      }else{
          this.message="Invalid input";
      }
    }
    const OnError= (response : any) => {
      if(response["status"]!=200){
        this.message=message_server + response["status"];
      }
    }
    try{
      this.userService.sendHttpUpdate(this.user).subscribe(OnSucces,OnError);
    }catch(err){
      this.message=err;
    }
  }
}
