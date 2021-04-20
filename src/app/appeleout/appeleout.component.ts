import { call } from './../../interfaces/user.interface';
import { Userservice } from 'src/providers/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appeleout',
  templateUrl: './appeleout.component.html',
  styleUrls: ['./appeleout.component.scss']
})
export class AppeleoutComponent implements OnInit {

  calls:call[]=[];
  constructor(private userService:Userservice) { }

  ngOnInit(): void {
    this.getAppeltOut();
  }

  getAppeltOut(){
    this.userService.setHttpGetObservalble("/HistoriqueAppel?type=out").subscribe((response:any)=>{
        if(response["status"]=="succes"){
            this.calls=response["data"];
        }

        console.log(this.calls);
    });
  }

}
