import { Component, OnInit } from '@angular/core';
import {PIZZAS} from "../../mock-pizza";

@Component({
  selector: 'app-prepared-pizza',
  templateUrl: './prepared-pizza.component.html',
  styleUrls: ['./prepared-pizza.component.css']
})
export class PreparedPizzaComponent implements OnInit {

  pizzas=PIZZAS;

  constructor() { }

  ngOnInit() {
  }

}
