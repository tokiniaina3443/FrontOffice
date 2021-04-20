import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user.interface';

@Injectable({
    providedIn:"root"
})
export class ToolsService{
    constructor(){}

    isvalidEmail(email:string):boolean{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    isvalidInputLogin(user:User):boolean{
        console.log(this.isvalidEmail(user.email) + "email validation");
        if(this.isvalidEmail(user.email) && user.password!=null && user.email!=null){
            return true;
        }else{
            return false;
        }
    }
    
    isvalidInputDSignUp(user:User):boolean{
        if(this.isvalidEmail(user.email) && this.isNoEmpty(user) && this.isConfirmedPassword(user)){
            return true;
        }else{
            return false
        }
    }

    isConfirmedPassword(user:User){
        if(user.password == user.confirmPassword){
            return true;
        }else{
            return false;
        }
    }
    
    isNoEmpty(user:User):boolean{
        if(user.name!=null && user.firstname!=null && user.ncin!=null && user.email!=null && user.password!=null && user.operateur!=null){
            return true;
        }else{
            return false
        }
    }

}