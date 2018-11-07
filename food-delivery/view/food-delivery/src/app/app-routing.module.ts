import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent}
];
@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
