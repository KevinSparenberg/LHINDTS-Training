import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Pizza} from "./models/pizza";
import {Size} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator";
import {Sizes} from "./models/sizes";
import {Ingredients} from "./models/ingredients";

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

   _numberOfSales:Subject<number>=new Subject();
   selectedPizza:Subject<Pizza>=new Subject();
   selectedSize:Subject<Sizes>=new Subject();
   selectedIngediants:Subject<Ingredients>=new Subject();
   allPizzas:Pizza[];

  /**
   *
   */
  constructor() {
  }

  /**
   *
   * @param value
   */
  setNumberOfSales(value:number){
    this._numberOfSales.next(value);
  }

  /**
   *
   */
  getSubr(){
      return this._numberOfSales;
  }

  /**
   *
   * @param pizzer
   */
  setPizza(pizzer:Pizza){
    this.selectedPizza.next(pizzer);
  }

  /**
   *
   */
  getPizza(){
    return this.selectedPizza;
  }

  /**
   *
   * @param size
   */
  setSelectedSize(size:Sizes){
    this.selectedSize.next(size);
  }

  /**
   *
   */
  getSelectedSize(){
    return this.selectedSize;
  }

  /**
   *
   * @param ingrediants
   */
  setSelectedIngrediant(ingrediants:Ingredients){
    this.selectedIngediants.next(ingrediants);
  }

  /**
   *
   */
  getSelectedIngrdiant(){
    return this.selectedIngediants;
  }

}
