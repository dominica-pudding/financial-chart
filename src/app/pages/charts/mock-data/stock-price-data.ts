import {RuleType, StockPrice, StockPriceType} from "../models/stock-price.model";

export const STOCK_PRICES: StockPrice[] = [{
  date: new Date(1994, 2, 1),
  l: 24.00,
  h: 25.00,
  o: 25.00,
  c: 24.875,
  annotations: [{
    ruleType: RuleType.Exit,
    actionType: StockPriceType.Buy,
    dateTime: new Date(1994, 2, 1, 2, 14, 55),
    positionSizing: '5 shares',
    profit: 423234.77
  }],
}, {
  date: new Date(1994, 2, 2),
  l: 23.625,
  h: 25.125,
  o: 24.00,
  c: 24.875,
  annotations: [{
    ruleType: RuleType.Entry,
    actionType: StockPriceType.Sell,
    dateTime: new Date(1994, 2, 2, 2, 14, 55),
    positionSizing: '5 shares',
    profit: 323234.77
  }],
}, {
  date: new Date(1994, 2, 3),
  l: 26.25,
  h: 28.25,
  o: 26.75,
  c: 27.00,
  annotations: null
}, {
  date: new Date(1994, 2, 4),
  l: 26.50,
  h: 27.875,
  o: 26.875,
  c: 27.25,
  annotations: null,
}, {
  date: new Date(1994, 2, 7),
  l: 26.375,
  h: 27.50,
  o: 27.375,
  c: 26.75,
  annotations: null,
}, {
  date: new Date(1994, 2, 8),
  l: 25.75,
  h: 26.875,
  o: 26.75,
  c: 26.00,
  annotations: null,
}, {
  date: new Date(1994, 2, 9),
  l: 25.75,
  h: 26.75,
  o: 26.125,
  c: 26.25,
  annotations: null,
}, {
  date: new Date(1994, 2, 10),
  l: 25.75,
  h: 26.375,
  o: 26.375,
  c: 25.875,
  annotations: [{
    ruleType: RuleType.Exit,
    actionType: StockPriceType.Buy,
    dateTime: new Date(1994, 2, 10, 2, 14, 55),
    positionSizing: '5 shares',
    profit: 223234.77
  },{
    ruleType: RuleType.Entry,
    actionType: StockPriceType.Sell,
    dateTime: new Date(1994, 2, 10, 6, 54, 55),
    positionSizing: '2 shares',
    profit: 133234.77
  }],
}, {
  date: new Date(1994, 2, 11),
  l: 24.875,
  h: 26.125,
  o: 26.00,
  c: 25.375,
  annotations: [{
    ruleType: RuleType.Exit,
    actionType: StockPriceType.Buy,
    dateTime: new Date(1994, 2, 11, 2, 14, 55),
    positionSizing: '5 shares',
    profit: 523234.77
  }],
}, {
  date: new Date(1994, 2, 14),
  l: 25.125,
  h: 26.00,
  o: 25.625,
  c: 25.75,
  annotations: null,
}, {
  date: new Date(1994, 2, 15),
  l: 25.875,
  h: 26.625,
  o: 26.125,
  c: 26.375,
  annotations: null,
}, {
  date: new Date(1994, 2, 16),
  l: 26.25,
  h: 27.375,
  o: 26.25,
  c: 27.25,
  annotations: null,
}, {
  date: new Date(1994, 2, 17),
  l: 26.875,
  h: 27.25,
  o: 27.125,
  c: 26.875,
  annotations: null,
}, {
  date: new Date(1994, 2, 18),
  l: 26.375,
  h: 27.125,
  o: 27.00,
  c: 27.125,
  annotations: null,
}, {
  date: new Date(1994, 2, 21),
  l: 26.75,
  h: 27.875,
  o: 26.875,
  c: 27.75,
  annotations: null,
}, {
  date: new Date(1994, 2, 22),
  l: 26.75,
  h: 28.375,
  o: 27.50,
  c: 27.00,
  annotations: null,
}, {
  date: new Date(1994, 2, 23),
  l: 26.875,
  h: 28.125,
  o: 27.00,
  c: 28.00,
  annotations: null,
}, {
  date: new Date(1994, 2, 24),
  l: 26.25,
  h: 27.875,
  o: 27.75,
  c: 27.625,
  annotations: null,
}, {
  date: new Date(1994, 2, 25),
  l: 27.50,
  h: 28.75,
  o: 27.75,
  c: 28.00,
  annotations: [{
    ruleType: RuleType.Exit,
    actionType: StockPriceType.Buy,
    dateTime: new Date(1994, 2, 25, 2, 14, 55),
    positionSizing: '5 shares',
    profit: 663234.77
  }],
}, {
  date: new Date(1994, 2, 28),
  l: 25.75,
  h: 28.25,
  o: 28.00,
  c: 27.25,
  annotations: null,
}, {
  date: new Date(1994, 2, 29),
  l: 26.375,
  h: 27.50,
  o: 27.50,
  c: 26.875,
  annotations: null,
}, {
  date: new Date(1994, 2, 30),
  l: 25.75,
  h: 27.50,
  o: 26.375,
  c: 26.25,
  annotations: null,
}, {
  date: new Date(1994, 2, 31),
  l: 24.75,
  h: 27.00,
  o: 26.50,
  c: 25.25,
  annotations: [{
    ruleType: RuleType.Exit,
    actionType: StockPriceType.Buy,
    dateTime: new Date(1994, 2, 31, 5, 34, 55),
    positionSizing: '5 shares',
    profit: 1323234.77
  }],
}];
