import { MobilemoneyComponent } from './../mobilemoney/mobilemoney.component';
import { AppeleoutComponent } from './../appeleout/appeleout.component';
import { ProfileComponent } from './../profile/profile.component';
import { Routes } from '@angular/router';
import { AppeleinComponent } from '../appelein/appelein.component';

export const HomeRouting: Routes =[
    {path:'Profile',component:ProfileComponent},
    {path:'AppelIn',component:AppeleinComponent},
    {path:'AppelOut',component:AppeleoutComponent},
    {path:'MobileMoney',component:MobilemoneyComponent},
    {
        path:'',
        redirectTo:'Profile',
        pathMatch:'full'
    }
]