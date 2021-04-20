import { LocalStorageService } from 'src/providers/localstorage.service';
import { base_url, message_err_login, message_err_signin } from './../app/app.module';
import { Injectable }  from "@angular/core";
import { Operator, User } from "src/interfaces/user.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class Userservice{
    constructor(private http:HttpClient,private tools:ToolsService,private storage:LocalStorageService){

    }

    sendHttpLogin(user:User){
       // console.log(this.tools.isvalidInputLogin(user));
        if(this.tools.isvalidInputLogin(user)){
           // console.log("passer");
            let data={
                "email":user.email,
                "password":user.password
            };
            let headers = new HttpHeaders({
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            });
            let options = { headers: headers };
    
            return this.http.post(base_url+"/Connexion",data,options);     
        }else{
            throw new Error(message_err_login);
        } 
    }

    sendHttpSignup(user:User){
        if(this.tools.isvalidInputDSignUp(user)){
            //console.log("ici");
            let data={
                "name":user.name,
                "firstname":user.firstname,
                "CIN":user.ncin,
                "email":user.email,
                "password":user.password,
                "idOperator":user.operateur
            };
            let headers = new HttpHeaders({
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            });
            let options = { headers: headers };
            return this.http.post(base_url + "/Inscription", data, options);
        }else{
            throw new Error(message_err_signin);
        }
    }

    sendHttpUpdate(user:User){
            let data={
                "name":user.name,
                "firstname":user.firstname,
                "CIN":user.ncin,
                "email":user.email,
                "password":user.password,
                "idOperator":user.operateur
            };
            let headers = new HttpHeaders({
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
                'authorization': 'bearear ' + this.storage.getToken()
            });
            let options = { headers: headers };
            return this.http.post(base_url + "/Update",data,options);
    }

    setHttpGet(url:string){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        return this.http.get(base_url+url,options);
    }

    setHttpGetObservalble(url:string):Observable<any>{
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'authorization':'bearear ' + this.storage.getToken()
        });
        let options = { headers: headers };
        return this.http.get(base_url+url,options);
    }

    getOpertors():any{  
        const operators:Operator[]=[];
        const onSucces=(response : any) =>{
            if(response["status"]=="succes"){
                for(var i=0;i<response["data"].length;i++){
                    const operator={} as Operator;
                    operator.id=response["data"][i].id;
                    operator.name=response["data"][i].name;
                    operator.preffix=response["data"][i].preffix;
                    operators.push(operator);
                }
            }
        }
        const onError=(response : any) =>{

        }
        this.setHttpGet("/Operators").subscribe(onSucces,onError);
        return operators;
    }

    
}
