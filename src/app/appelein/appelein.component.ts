import { Component, OnInit } from '@angular/core';
import { call } from 'src/interfaces/user.interface';
import { Userservice } from 'src/providers/user.service';

@Component({
  selector: 'app-appelein',
  templateUrl: './appelein.component.html',
  styleUrls: ['./appelein.component.scss']
})
export class AppeleinComponent implements OnInit {
  
  calls:call[]=[];
  constructor(private userService:Userservice) { }

  ngOnInit(): void {
    this.getAppeltOut();
  }

  getAppeltOut(){
    this.userService.setHttpGetObservalble("/HistoriqueAppel?type=in").subscribe((response:any)=>{
        if(response["status"]=="succes"){
            this.calls=response["data"];
        }

        console.log(this.calls);
    });
  }

}
