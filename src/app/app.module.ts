import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
