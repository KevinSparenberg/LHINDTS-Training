import { Component, OnInit } from '@angular/core';

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
  numberOfSales = 2;

  constructor() { }

  ngOnInit() {
  }

}
