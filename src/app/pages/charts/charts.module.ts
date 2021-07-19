import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {DevExtremeModule} from "devextreme-angular";

import {ScreenService} from "../../shared/services";

import {ChartsComponent} from "./charts.component";
import {StockChartComponent} from "./components/stock-chart/stock-chart.component";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    StockChartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ScreenService],
  bootstrap: [ChartsComponent]
})
export class ChartsModule { }
