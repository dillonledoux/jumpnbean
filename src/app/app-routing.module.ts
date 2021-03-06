import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { AllProductsPageComponent } from './pages/product/all-products/all-products-page.component';
import { ProductDetailsPageComponent } from './pages/product/details/product-details-page/product-details-page.component';

import { HeaderComponent } from './header/header.component';


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
    path: 'test', 
    component: HeaderComponent
  },
  { 
    path: '', 
    component: HomePageComponent
  },
  { 
    path: '**', 
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
