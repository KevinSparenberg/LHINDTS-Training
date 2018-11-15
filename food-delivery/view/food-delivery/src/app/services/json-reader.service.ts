import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Ingredients} from "../ingredients";
import {Observable} from "rxjs";
import {Pizza} from "../pizza";
import {Sizes} from "../sizes";

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {


  constructor(private http: HttpClient) { }


  // Ingredients must be an array, because the JSON file contains several ingredients (objects)
  getIngrediantsJSON(): Observable<Ingredients[]>{
    return this.http.get<Ingredients[]>('./assets/data/ingrediants.json');

  }
  //Read the data objects from prepared.json file and returns an array of Pizzas
  getPrepPizzaJSON(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>('./assets/data/preparedPizzas.json');
  }


  //Read the data objects from sizes.json file and returns an array of sizes
  getSizesJSON(): Observable<Sizes[]>{
    return this.http.get<Sizes[]>('./assets/data/sizes.json');
  }


}
