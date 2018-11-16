import {NgModule} from "@angular/core";

import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatNativeDateModule

} from '@angular/material';

@NgModule({

  imports: [

    MatNativeDateModule,

    MatDatepickerModule,

    CommonModule,

    MatToolbarModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatProgressSpinnerModule

  ],

  exports: [

    MatDatepickerModule,

    CommonModule,

    MatToolbarModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatProgressSpinnerModule

  ],

})

export class CustomMaterialModule {
}
