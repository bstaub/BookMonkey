import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {BookFormComponent} from './book-form/book-form.component';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DateValueAccessorModule,
    FormsModule,
  ],
  declarations: [
    BookFormComponent,
  ]
})
export class AdminModule { }
