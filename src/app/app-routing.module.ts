import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { AllProductsPageComponent } from './pages/product/all-products/all-products-page.component';
import { ProductDetailsPageComponent } from './pages/product/details/product-details-page/product-details-page.component';

const routes: Routes = [
  { 
    path: 'products/:name', 
    component: ProductDetailsPageComponent
  },
  { 
    path: 'products', 
    component: AllProductsPageComponent
  },
  { 
    path: '', 
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
