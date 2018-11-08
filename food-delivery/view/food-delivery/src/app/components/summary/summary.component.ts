import { Component, OnInit } from '@angular/core';
import { Pizza} from "../../pizza";
import { CartServiceService} from "../../cart-service.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {



  //pizza1:Pizza={id:1,name:'Pizza Magaritha', price:5 ,radius:24};
  pizza2:Pizza;
  pizzen:Pizza[]=[{id:1,name:'PomPizzer',price:5,radius:28},{id:2,name:'Kurdische Pizza',price:6, radius:28}];



  productSummary="Zusammenfassung Ihrer Bestellung";

  constructor(private cartService:CartServiceService) {
    this.cartService.getPizza().subscribe(piz => this.pizza2 = piz);
    //this.pizzen.push(this.pizza2);
  }

  ngOnInit() {

  }


}
