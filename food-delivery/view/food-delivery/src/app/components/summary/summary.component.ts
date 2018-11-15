import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../pizza";
import {CartServiceService} from "../../cart-service.service";
import {Size} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator";
import {Sizes} from "../../sizes";
import {Ingredients} from "../../ingredients";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  pizzen: Pizza[] = [];
  selctedPizzaSize: Sizes;
  allSelectedIngrediants: Ingredients[] = [];
  gesamtSumme = 0;
  purposeOfUse='';


  productSummary = "Zusammenfassung Ihrer Bestellung";

  /**
   *
   * @param cartService
   */
  constructor(private cartService: CartServiceService) {
    /**
     *
     */
    //Push selected Pizzen into a Array and add the price to sum
    this.cartService.getPizza().subscribe(reseivedPizza => {
      this.sumPrice(reseivedPizza.price);
      this.pizzen.push(reseivedPizza);
      this.purposeOfUse=this.purposeOfUse+" "+reseivedPizza.name;
    });

    /**
     *
     */
    //Select size
    //this.cartService.getSelectedSize().subscribe(size => this.selctedPizzaSize = size);
    this.cartService.getSelectedSize().subscribe(size =>{
      this.sumPrice(size.price);
      this.selctedPizzaSize=size;
      this.purposeOfUse=this.purposeOfUse+" "+size.sizeType;
    })


    /**
     *
     */
    //Push Ingrediants into a Array and add the price to sum
    this.cartService.getSelectedIngrdiant().subscribe(ingre => {
      this.sumPrice(ingre.price);
      this.allSelectedIngrediants.push(ingre);
      this.purposeOfUse=this.purposeOfUse+" "+ingre.name+ " "+ingre.price;
    })


  }

  /**
   *
   * @param ingrediant
   */
  private addIngrediant(ingrediant) {
    console.log(ingrediant);
    this.allSelectedIngrediants.push(ingrediant);
  }


  ngOnInit() {

  }

  /**
   *
   * @param price
   */
  sumPrice(price:number){
    console.log(price);
    this.gesamtSumme=this.gesamtSumme+price;
  }

  /**
   *
   * @param selectedPizzaDetails
   */
  deleteselectedPizzaDetails(selectedPizzaDetails: Pizza) {
    this.gesamtSumme=this.gesamtSumme-selectedPizzaDetails.price;
    this.pizzen = this.pizzen.filter(h => h != selectedPizzaDetails);
    this.purposeOfUse=this.purposeOfUse.replace(selectedPizzaDetails.name,"");
  }

  /**
   *
   * @param size
   */
  deleteselctedPizzaSize(size:Sizes) {
    this.gesamtSumme=this.gesamtSumme-size.price;
    this.selctedPizzaSize = {id: null,price: null,radius: null, sizeType:''}
    this.purposeOfUse=this.purposeOfUse.replace(size.sizeType,"");
  }

  /**
   *
   * @param ingre
   */
  deleteselectedIngrediants(ingre: Ingredients) {
    this.gesamtSumme = this.gesamtSumme-ingre.price;
    this.allSelectedIngrediants = this.allSelectedIngrediants.filter( h => h != ingre);
    this.purposeOfUse=this.purposeOfUse.replace(ingre.name," ");
  }
}
