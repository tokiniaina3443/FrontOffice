import { transaction } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { Userservice } from 'src/providers/user.service';

@Component({
  selector: 'app-mobilemoney',
  templateUrl: './mobilemoney.component.html',
  styleUrls: ['./mobilemoney.component.scss']
})
export class MobilemoneyComponent implements OnInit {

  transaction:transaction[]=[];
  constructor(private userService:Userservice) { }
  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(){
    this.userService.setHttpGetObservalble("/GetHistoriqueMobileMoney").subscribe((response :any)=>{
        if(response["status"]=="succes"){
          response["data"].forEach((data:any)=>{
            this.transaction.push(data);
          });
          console.log(this.transaction);
        }
    });
  }
}
