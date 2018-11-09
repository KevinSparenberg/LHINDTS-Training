import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Pizza} from "./pizza";
import {Size} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator";
import {Sizes} from "./sizes";

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

   _numberOfSales:Subject<number>=new Subject();
   selectedPizza:Subject<Pizza>=new Subject();
  selectedSize:Subject<Sizes>=new Subject();
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
    //this.allPizzas.push(pizzer);
    this.selectedPizza.next(pizzer);
  }

  getPizza(){
    return this.selectedPizza;
  }

  setSelectedSize(size:Sizes){
    this.selectedSize.next(size);
    alert("Service setSelectedSize"+ size.sizeType);
  }

  getSelectedSize(){
    return this.selectedSize;
  }

}
