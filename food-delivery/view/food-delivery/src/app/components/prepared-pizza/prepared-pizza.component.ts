import {Component, Input, OnInit} from '@angular/core';
import {PIZZAS} from "../../mock-pizza";
import {CartServiceService} from "../../cart-service.service";
import {Pizza} from "../../pizza";
import {JsonReaderService} from "../../services/json-reader.service";
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
  pizzaJSON: Pizza[];

  /**
   *
   * @param cartService
   */
  constructor(private cartService:CartServiceService, private jsonReaderService: JsonReaderService) {
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
  }

  ngOnInit() {
    this.jsonReaderService.getPrepPizzaJSON().subscribe((recPizzaData) => this.pizzaJSON = recPizzaData);
  }

  /**
   *
   */
  addPizzaToCart(){
    this._numberofPizzaSales++;
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
    this.addToTheCart=false;
    this.showSummary();
  }

  /**
   *
   */
  private showSummary() {
      this.cartService.setPizza(this.pizzaObject);
  }

  /**
   *
   * @param pizzaName
   */
  selectedPizza(pizzaName){
      this.pizzaObject=pizzaName;
  }
}
