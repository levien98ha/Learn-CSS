import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './component/DefaultLayout/footer/footer.component';
import { HeaderComponent } from './component/DefaultLayout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './component/DefaultLayout/default-layout/default-layout.component';
import { HomeSliderComponent } from './component/home-slider/home-slider.component'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
