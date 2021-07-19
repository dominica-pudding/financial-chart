import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({ name: 'customCurrency' })
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: any, currency: string, symbol: boolean = false, digits: string = '1.0-0'): string {
    return this.currencyPipe.transform(value, currency, 'symbol', digits);
  }
}
