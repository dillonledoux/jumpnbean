import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './sections/featured/featured.component';
import { ContactComponent } from './sections/contact/contact.component';
import { AboutComponent } from './sections/about/about.component';
import { HeadlineComponent } from './sections/headline/headline.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './pages/product/product.component';
import { FeaturedBadgeComponent } from './featured-badge/featured-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsFormComponent,
    ProductCardComponent,
    HeaderComponent,
    FeaturedComponent,
    ContactComponent,
    AboutComponent,
    HeadlineComponent,
    BenefitsComponent,
    AllProductsComponent,
    ProductComponent,
    FeaturedBadgeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
