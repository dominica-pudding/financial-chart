import { NgModule } from '@angular/core';

import {DxChartModule} from "devextreme-angular";

import {ScreenService} from "../../shared/services";

import {ChartsComponent} from "./charts.component";
import {StockChartComponent} from "./components/stock-chart/stock-chart.component";

@NgModule({
  declarations: [
    ChartsComponent,
    StockChartComponent
  ],
  imports: [
    DxChartModule
  ],
  providers: [ScreenService],
  bootstrap: [ChartsComponent]
})
export class ChartsModule { }
