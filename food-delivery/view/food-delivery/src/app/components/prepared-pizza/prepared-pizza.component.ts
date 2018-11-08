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


  constructor(private cartService:CartServiceService) {
    //dadurch ist der Intialwert 0 im Warenkorb
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
  }

  ngOnInit() {
  }

  addPizzaToCart(){
    this._numberofPizzaSales++;
    alert("Pizza wurde zum Warenkorb hinzugefügt!");
    this.cartService.setNumberOfSales(this._numberofPizzaSales);
    this.addToTheCart=false;

  }

  //ToDo: Pizza soll erst dann in Summary angezeigt werden, wenn addPizzaToCart() ausgeführt wurde
  selectedPizza(pizzaName){

      alert("Es wurde die Pizza ID:"+pizzaName.id+" "+pizzaName.name+" Preis: "+pizzaName.price+" Radius: "+pizzaName.radius+" ausgewählt!");
      this.cartService.setPizza(pizzaName);}


}
