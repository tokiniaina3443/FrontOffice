import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'src/providers/localstorage.service';
import { Userservice } from 'src/providers/user.service';
import { ToolsService } from 'src/providers/tools.service';
import { Service } from 'src/providers/service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterInfo } from 'src/interfaces/user.interface';
import { ProfileComponent } from './profile/profile.component';
import { AppeleinComponent } from './appelein/appelein.component';
import { AppeleoutComponent } from './appeleout/appeleout.component';
import { MobilemoneyComponent } from './mobilemoney/mobilemoney.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalStorageService,Userservice,ToolsService,Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
export const base_url="https://appeltelephonique.herokuapp.com";
// export const base_url="http://localhost:8081";
export const message_err_login="Email or password invalid";
export const message_err_signin="Email or password not accepted,  try to change your one of them";
export const message_server="Server Not Fount ";
export const RouterLinks:RouterInfo[]=[
  {path:'/home/Profile',title:'My Profil',icon:'fa fa-user c-blue',class:''},
  {path:'/home/AppelIn',title:'Call In',icon:'fa fa-arrow-circle-o-down c-orange',class:''},
  {path:'/home/AppelOut',title:'Call out',icon:'fa fa-arrow-circle-o-up',class:''},
  {path:'/home/MobileMoney',title:'Mobile Money',icon:'fa fa-money',class:''}
];
