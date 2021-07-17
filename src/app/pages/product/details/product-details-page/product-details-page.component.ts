import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../../../models/product';
import { PRODUCTS } from '../../../../data/product-data';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AgeVerificationService } from 'src/app/age-verification.service';
import { isNgTemplate } from '@angular/compiler';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})

export class ProductDetailsPageComponent {

  name: string;
  item: Product;
  analyteChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Cannaboid Analysis",
    },
    scales: {
      xAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function(context) {
          return context.value+'%';
        }
      }
    }
  };
  analyteChartLabels: Label[];
  analyteChartType: ChartType = 'horizontalBar';
  analyteChartLegend = true;
  analyteChartPlugins = [];
  analyteChartData: ChartDataSets[];
  

  terpsChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Terpene Analysis",
    },
    scales: {
      xAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function(context) {
          return context.value+'%';
        }
      }
    }
  };
  terpsChartType: ChartType = 'horizontalBar';
  terpsChartLegend = true;
  terpsChartPlugins = [];
  terpsChartLabels: Label[];
  terpsChartData: ChartDataSets[];

  constructor(
    private route: ActivatedRoute,
    public ageVer: AgeVerificationService
  ) {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.item = this.returnItemByName(this.name, PRODUCTS);
    });

    this.analyteChartLabels = this.item.analyte_cann_labels as Label[];
    this.analyteChartData = [
      {
        data: this.item.analyte_cann_results,
        backgroundColor: '7fa128',
        hoverBackgroundColor: '3e4797',
      }
    ] as ChartDataSets[];

    this.terpsChartLabels = this.item.analyte_terp_labels as Label[];
  
    this.terpsChartData = [
      { 
        data: this.item.analyte_terp_results,
        backgroundColor: '7fa128',
        hoverBackgroundColor: '3e4797',
      }
    ] as ChartDataSets[];
    
  }

  
  
  

  
  returnItemByName(name:string, list:Product[]): Product {
    return list.find( element => element.name == name );
  }
}




