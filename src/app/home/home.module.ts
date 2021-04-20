import { MobilemoneyComponent } from './../mobilemoney/mobilemoney.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRouting } from './home.routing';
import { ProfileComponent } from '../profile/profile.component';
import { AppeleinComponent } from '../appelein/appelein.component';
import { AppeleoutComponent } from '../appeleout/appeleout.component';
@NgModule({
    imports:[
        CommonModule,
         RouterModule.forChild(HomeRouting),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
       ProfileComponent,
       AppeleinComponent,
       AppeleoutComponent,
       MobilemoneyComponent
    ],
    providers:[]
})

export class HomePageModule{}