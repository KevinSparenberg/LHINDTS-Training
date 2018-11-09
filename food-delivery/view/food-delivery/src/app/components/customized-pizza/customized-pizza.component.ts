import { Component, OnInit } from '@angular/core';
import {SIZES} from "../../mock-sizes";

@Component({
  selector: 'app-customized-pizza',
  templateUrl: './customized-pizza.component.html',
  styleUrls: ['./customized-pizza.component.css']
})
export class CustomizedPizzaComponent implements OnInit {

  sizes=SIZES;

  diffSizes=true;
  diffIngredients=false;
  deliveryTime=false;

  constructor() { }

  ngOnInit() {
  }

  selectedSize(size){
    alert(size.sizeType+"wurde ausgewählt")
  }

  showDiffSizes(){
    this.diffIngredients=false;
    this.deliveryTime=false;
    this.diffSizes=true;
  }

  showDiffIngredients(){
    this.diffSizes=false;
    this.deliveryTime=false;
    this.diffIngredients=true;
  }

  showDeliveryTime(){
    this.diffSizes=false;
    this.diffIngredients=false;
    this.deliveryTime=true;
  }

}
