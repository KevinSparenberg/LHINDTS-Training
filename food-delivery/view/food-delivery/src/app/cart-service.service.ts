import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Pizza} from "./pizza";

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

   _numberOfSales:Subject<number>=new Subject();
   selectedPizza:Subject<Pizza>=new Subject();
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


}
