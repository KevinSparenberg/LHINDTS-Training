import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberOfSales=0;
  showCustomized=false;
  showPrepared=true;
  constructor() {

  }

  ngOnInit() {
  }

  /**
   *
   */
  individuel(){
    this.showPrepared=false;
    this.showCustomized=true;

  }

  /**
   *
   */
  prepared(){
    this.showCustomized=false;
    this.showPrepared=true;
  }
}
