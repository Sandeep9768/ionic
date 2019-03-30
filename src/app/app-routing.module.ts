import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './place-order/place-order.component'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'product',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
