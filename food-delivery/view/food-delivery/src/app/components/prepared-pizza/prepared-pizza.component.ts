import {Component, Input, OnInit} from '@angular/core';
import {PIZZAS} from "../../mock-pizza";
import {CartServiceService} from "../../cart-service.service";
import {Pizza} from "../../pizza";
@Component({
  selector: 'app-prepared-pizza',
  templateUrl: './prepared-pizza.component.html',
  styleUrls: ['./prepared-pizza.component.css']
})
export class PreparedPizzaComponent implements OnInit {
  pizzas=PIZZAS;
  private _numberofPizzaSales=0;
  addToTheCart:boolean;

  pizzaObject:Pizza;

  constructor(private cartService:CartServiceService) {
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
  }

  ngOnInit() {
  }

  addPizzaToCart(){
    this._numberofPizzaSales++;
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
    this.addToTheCart=false;
    this.showSummary();
  }

  private showSummary() {
      this.cartService.setPizza(this.pizzaObject);
  }

  //ToDo: Pizza soll erst dann in Summary angezeigt werden, wenn addPizzaToCart() ausgeführt wurde
  selectedPizza(pizzaName){
      this.pizzaObject=pizzaName;
  }
}
