import {Component, Injectable, OnInit} from '@angular/core';
import  {CartServiceService} from "../../cart-service.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Home";
  foodTitle = "Speisekarte";
  drinkTitle = "Getränke";
  aboutUs = "Ueber uns"
  login = "Login";
  numberOfSales;

  /**
   *
   * @param cartService
   */
  constructor(private cartService:CartServiceService) {
    this.cartService.getSubr().subscribe(anzahl => this.numberOfSales = anzahl);
  }

  ngOnInit() {
  }
}

