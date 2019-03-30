import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PlaceOrderComponent } from './place-order/place-order.component'
import { UserService } from './api/user.service'
// import { OrderPage } from './order/order.page'
import { RegistrationComponent } from './registration/registration.component'

import { OrderPageModule } from './order/order.module'
import { HomePageModule } from './home/home.module'
@NgModule({
  declarations: [AppComponent, LoginComponent, PlaceOrderComponent, RegistrationComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OrderPageModule,
    HomePageModule


  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
