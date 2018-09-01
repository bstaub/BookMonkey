import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeDE from '@angular/common/locales/de';

import {SuiModule} from 'ng2-semantic-ui';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import {BookStoreService} from './shared/book-store.service';
import {BookModule} from './book/book.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    SuiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule,
    AdminModule,
  ],
  providers: [BookStoreService , { provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDE);
  }
}
