export class StockPrice {
  date: Date;
  l: number;
  h: number;
  o: number;
  c: number;
  annotations: StockPriceAnnotation[];

  constructor(init?: Partial<StockPrice>) {
    if (init) Object.assign(this, init);
  }
}

export class StockPriceAnnotation {
  ruleType: RuleType;
  actionType: StockPriceType;
  dateTime: Date;
  profit: number;
  positionSizing: string;

  constructor(init?: Partial<StockPriceAnnotation>) {
    if (init) Object.assign(this, init);
  }
}

export enum RuleType {
  Exit= 1,
  Entry,
}

export enum StockPriceType {
  Buy = 1,
  Sell,
}
