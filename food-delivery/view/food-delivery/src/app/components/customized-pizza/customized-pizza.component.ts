import {Component, OnInit} from '@angular/core';
import {SIZES} from "../../mock-sizes";
import {INGREDIANTS} from "../../mock-ingredients";
import {MatButton} from "@angular/material";
import {Ingredients} from "../../ingredients";
import {CartServiceService} from "../../cart-service.service";
import {Sizes} from "../../sizes";

@Component({
  selector: 'app-customized-pizza',
  templateUrl: './customized-pizza.component.html',
  styleUrls: ['./customized-pizza.component.css']
})
export class CustomizedPizzaComponent implements OnInit {

  sizes = SIZES;
  testSize: Sizes = new Sizes();
  testSizeArray: Sizes[];
  ingrediants = INGREDIANTS;
  allSelectedIngredients: Ingredients[];
  diffSizes = true;
  diffIngredients = false;
  deliveryTime = false;

  constructor(private cartService: CartServiceService) {
  }

  ngOnInit() {
  }


  showDiffSizes() {
    this.diffIngredients = false;
    this.deliveryTime = false;
    this.diffSizes = true;
  }

  showDiffIngredients() {
    this.diffSizes = false;
    this.deliveryTime = false;
    this.diffIngredients = true;
  }

  showDeliveryTime() {
    this.diffSizes = false;
    this.diffIngredients = false;
    this.deliveryTime = true;
  }

  selectedSize(size) {
    this.cartService.setSelectedSize(size);
  }

  selectedIngrediant(ingrediant) {
    this.cartService.setSelectedIngrediant(ingrediant);
  }

  selectDeliverDate() {
    alert("Lieferdatum ausgewählt. ");
  }
}

