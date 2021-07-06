import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../../../models/product';
import { PRODUCTS } from '../../../../data/product-data';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})

export class ProductDetailsPageComponent implements OnInit {

  name: string;
  item: Product;

  analyteChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    }
  };
  analyteChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  analyteChartType: ChartType = 'horizontalBar';
  analyteChartLegend = true;
  analyteChartPlugins = [];
  analyteChartData: ChartDataSets[] = [
    { 
      data: [65, 67, 70, 75, 80, 90],
      backgroundColor: 'green' 
    },
  ];
  
  terpsChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    }
  };
  terpsChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  terpsChartType: ChartType = 'horizontalBar';
  terpsChartLegend = true;
  terpsChartPlugins = [];
  terpsChartData: ChartDataSets[] = [
    { 
      data: [65, 67, 70, 75, 80, 90],
      backgroundColor: 'green' 
    },
  ];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.item = this.returnItemByName(this.name, PRODUCTS);
    console.log(this.item);
  }
  
  returnItemByName(name:string, list:Product[]): Product {
    return list.find( element => element.name == name );
  }
}




