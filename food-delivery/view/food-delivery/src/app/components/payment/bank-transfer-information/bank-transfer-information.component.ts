import {Component, OnInit} from '@angular/core';
import {HomeComponent} from "../../home/home.component";

@Component({
  selector: 'app-bank-transfer-information',
  templateUrl: './bank-transfer-information.component.html',
  styleUrls: ['./bank-transfer-information.component.css']
})
export class BankTransferInformationComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

  /**
   *
   * @param iban
   * @param kntInhaber
   * @param bic
   * @param vwdzw
   */
  bezahlt(iban,kntInhaber,bic,vwdzw) {
    if (iban.valueOf().length == 0 || kntInhaber.valueOf().length == 0 || bic.valueOf().length == 0 || vwdzw.valueOf().length == 0 || iban.valueOf().length < 22) {
      if(iban.valueOf().length == 0 || iban.valueOf().length < 22){
        if(iban.valueOf().length == 0){
          alert("Bitte geben sie eine gültige IBAN ein! ");
        }else {
          alert("Ihre IBAN muss mind 22 Zeichen lang sein!")
        }
      }else if (kntInhaber.valueOf().length == 0){
        alert("Bitte geben sie einen gültigen Kontoinhaber an! ");

      }else if(bic.valueOf().length == 0){
        alert("Bitte geben sie eine gültige BIC an! ");

      }else if(vwdzw.valueOf().length == 0){
        alert("Bitte geben sie eine gültige Verwendungszweck an! ");

      }

    } else {
      alert("Bestellung erfolgreich!");
      alert("Vielen Dank für Ihren Einkauf!")
      //TODO: Open HomeComponent

    }
    //window.open("/home");
  }
}
