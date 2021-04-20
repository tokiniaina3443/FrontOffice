import { Inject,Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
    providedIn:"root"
})
export class LocalStorageService{
    constructor(@Inject(LOCAL_STORAGE) private storage:StorageService)
    {   
    }

    setToken(value:String){
        this.storage.set('token',value);
    }

    getToken(){
        return this.storage.get('token');
    }

    removeToken(){
        this.storage.remove('token');
    }

    clearStorage(){
        this.storage.clear();
    }

}