import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Pizza} from "./pizza";
import {Size} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator";
import {Sizes} from "./sizes";
import {Ingredients} from "./ingredients";

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

   _numberOfSales:Subject<number>=new Subject();
   selectedPizza:Subject<Pizza>=new Subject();
   selectedSize:Subject<Sizes>=new Subject();
   selectedIngediants:Subject<Ingredients>=new Subject();
   allPizzas:Pizza[];

  constructor() {
  }

  setNumberOfSales(value:number){
    this._numberOfSales.next(value);
  }

  getSubr(){
      return this._numberOfSales;
  }

  setPizza(pizzer:Pizza){
    this.selectedPizza.next(pizzer);
  }

  getPizza(){
    return this.selectedPizza;
  }

  setSelectedSize(size:Sizes){
    this.selectedSize.next(size);
  }

  getSelectedSize(){
    return this.selectedSize;
  }

  setSelectedIngrediant(ingrediants:Ingredients){
    this.selectedIngediants.next(ingrediants);
  }

  getSelectedIngrdiant(){
    return this.selectedIngediants;
  }

}
