import {Injectable} from "@angular/core";
import {StockPrice} from "../pages/charts/models/stock-price.model";

@Injectable()
export class Service {
  getStockPrices(): StockPrice[] {
    return [];
  }
}
