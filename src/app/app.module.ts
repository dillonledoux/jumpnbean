import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './sections/featured/featured.component';
import { AboutComponent } from './sections/about/about.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { AllProductsPageComponent } from './pages/product/all-products/all-products-page.component';
import { FeaturedBadgeComponent } from './featured-badge/featured-badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsPageComponent } from './pages/product/details/product-details-page/product-details-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ContactUsBlockComponent } from './sections/contact-us-block/contact-us-block.component';
import { BenefitItemComponent } from './benefit-item/benefit-item.component';
import { TerpsComponent } from './sections/terps/terps.component';
import { HeadlineComponent } from './sections/headline/headline.component';
import { AromaIconComponent } from './aroma-icon/aroma-icon.component';
import { AgeVerWrapperComponent } from './age-ver-wrapper/age-ver-wrapper.component';
import { AgeVerModalComponent } from './age-ver-modal/age-ver-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsFormComponent,
    ProductCardComponent,
    HeaderComponent,
    FeaturedComponent,
    AboutComponent,
    BenefitsComponent,
    AllProductsPageComponent,
    FeaturedBadgeComponent,
    FooterComponent,
    ProductDetailsPageComponent,
    HomePageComponent,
    ContactUsBlockComponent,
    BenefitItemComponent,
    TerpsComponent,
    HeadlineComponent,
    AromaIconComponent,
    AgeVerWrapperComponent,
    AgeVerModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
