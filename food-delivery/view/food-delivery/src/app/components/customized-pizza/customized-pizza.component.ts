import { Component, OnInit } from '@angular/core';
import {SIZES} from "../../mock-sizes";
import {INGREDIANTS} from "../../mock-ingredients";
import {MatButton} from "@angular/material";
import {Ingredients} from "../../ingredients";
import { CartServiceService} from "../../cart-service.service";

@Component({
  selector: 'app-customized-pizza',
  templateUrl: './customized-pizza.component.html',
  styleUrls: ['./customized-pizza.component.css']
})
export class CustomizedPizzaComponent implements OnInit {

  sizes=SIZES;
  ingrediants=INGREDIANTS;
  allSelectedIngredients:Ingredients[];
  diffSizes=true;
  diffIngredients=false;
  deliveryTime=false;

  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
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

  selectedSize(size){
    this.cartService.setSelectedSize(size);
    alert(size.sizeType+"wurde ausgewählt");
  }

  selectedIngrediant(ingrediant){
    alert("Sie haben die Zutat: "+ingrediant.name+" ausgewählt!");
  }

  selectDeliverDate(){
    alert("Lieferdatum ausgewählt. ");
  }
}

