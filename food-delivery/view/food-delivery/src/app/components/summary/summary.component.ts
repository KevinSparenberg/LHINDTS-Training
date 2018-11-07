import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  productSummary="Zusammenfassung Ihrer Bestellung"
  constructor() { }

  ngOnInit() {
  }

}
