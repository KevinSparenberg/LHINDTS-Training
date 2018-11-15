import {Component, OnInit} from '@angular/core';
import {SIZES} from "../../mock-sizes";
import {INGREDIANTS} from "../../mock-ingredients";
import {MatButton} from "@angular/material";
import {Ingredients} from "../../ingredients";
import {CartServiceService} from "../../cart-service.service";
import {Sizes} from "../../sizes";
import {JsonReaderService} from "../../services/json-reader.service";

@Component({
  selector: 'app-customized-pizza',
  templateUrl: './customized-pizza.component.html',
  styleUrls: ['./customized-pizza.component.css']
})
export class CustomizedPizzaComponent implements OnInit {

  sizes = SIZES;
  ingrediants = INGREDIANTS;
  diffSizes = true;
  diffIngredients = false;
  deliveryTime = false;
  //do it without null
  ingrFromJSON: Ingredients[];
  sizesJSON: Sizes[];

  constructor(private cartService: CartServiceService, private jsonService: JsonReaderService) {
  }


  ngOnInit() {
    //jsonData corresponds to a lamda object, and you cannot do without the spelling "jsonData => this.ingrFromJSON = jsonData".
    this.jsonService.getIngrediantsJSON().subscribe(jsonData => this.ingrFromJSON = jsonData);
    this.jsonService.getSizesJSON().subscribe((jsonData)=>this.sizesJSON = jsonData);
  }

  /**
   *
   */
  showDiffSizes() {
    this.diffIngredients = false;
    this.deliveryTime = false;
    this.diffSizes = true;

  }

  /**
   *
   */
  showDiffIngredients() {
    this.diffSizes = false;
    this.deliveryTime = false;
    this.diffIngredients = true;
  }

  /**
   *
   */
  showDeliveryTime() {
    this.diffSizes = false;
    this.diffIngredients = false;
    this.deliveryTime = true;
  }

  /**
   *
   * @param size
   */
  selectedSize(size) {
    this.cartService.setSelectedSize(size);
  }

  /**
   *
   * @param ingrediant
   */
  selectedIngrediant(ingrediant) {
    this.cartService.setSelectedIngrediant(ingrediant);
  }

  /**
   *
   */
  selectDeliverDate() {
    alert("Lieferdatum ausgewählt. ");
  }

     ingredTests(name: Ingredients) {
    console.log(name)

  }

  onSizClick(siz: Sizes) {
    alert(siz.sizeType);
  }
}

