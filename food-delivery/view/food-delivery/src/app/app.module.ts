import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PaymentComponent} from './components/payment/payment.component';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {HomeComponent} from './components/home/home.component';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SummaryComponent} from './components/summary/summary.component';
import {PreparedPizzaComponent} from './components/prepared-pizza/prepared-pizza.component';
import {CustomizedPizzaComponent} from './components/customized-pizza/customized-pizza.component';
import {CustomMaterialModule} from "./core/material.module";
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import {DlDateTimePickerModule} from "angular-bootstrap-datetimepicker";
import { DeliveryAddressComponent } from './components/payment/delivery-address/delivery-address.component';
import { BankTransferInformationComponent } from './components/payment/bank-transfer-information/bank-transfer-information.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    PaymentComponent,
    ShoppingCartComponent,
    HomeComponent,
    SummaryComponent,
    PreparedPizzaComponent,
    CustomizedPizzaComponent,
    DeliveryAddressComponent,
    BankTransferInformationComponent,
  ],
  imports: [
    DlDateTimePickerDateModule,
    DlDateTimePickerModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent],

  exports: [
    CustomMaterialModule,
    MatDatepickerModule,
    DlDateTimePickerDateModule
  ]
})
export class AppModule {
}
