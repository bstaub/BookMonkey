import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeDE from '@angular/common/locales/de';

import {SuiModule} from 'ng2-semantic-ui';

import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BookFormComponent } from './book-form/book-form.component';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {FormsModule} from '@angular/forms';
import {BookStoreService} from './shared/book-store.service';
import { IsbnPipe } from './shared/isbn.pipe';
import { ZoomDirective } from './shared/zoom.directive';
import { DelayDirective } from './shared/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ],
  imports: [
    SuiModule, BrowserModule, AppRoutingModule, HttpClientModule, DateValueAccessorModule, FormsModule
  ],
  providers: [BookStoreService , { provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDE);
  }
}
