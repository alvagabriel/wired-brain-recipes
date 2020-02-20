import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-offsized-bar',
  templateUrl: './stacked-offsized-bar.component.html',
  styleUrls: ['./stacked-offsized-bar.component.css']
})
export class StackedOffsizedBarComponent implements OnInit {

  public primaryXAxis: object;
  public chartData: object[];
  public primaryYAxis: object = {
      labelFormat: 'n2'
  };
  public chartArea: object = {
    border: {
        width: 0
    }
};

  constructor() { }

    ngOnInit(): void {
      // Data for chart series
      this.chartData = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
      ];
      this.primaryXAxis = {
        valueType: 'Category'
      };
    }

}
