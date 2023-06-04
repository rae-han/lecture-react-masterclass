export interface Price {
  id:                 string;
  name:               string;
  symbol:             string;
  rank:               number;
  circulating_supply: number;
  total_supply:       number;
  max_supply:         number;
  beta_value:         number;
  first_data_at:      Date;
  last_updated:       Date;
  quotes:             Quotes;
}

export interface Quotes {
  USD: Usd;
}

export interface Usd {
  price:                  number;
  volume_24h:             number;
  volume_24h_change_24h:  number;
  market_cap:             number;
  market_cap_change_24h:  number;
  percent_change_15m:     number;
  percent_change_30m:     number;
  percent_change_1h:      number;
  percent_change_6h:      number;
  percent_change_12h:     number;
  percent_change_24h:     number;
  percent_change_7d:      number;
  percent_change_30d:     number;
  percent_change_1y:      number;
  ath_price:              number;
  ath_date:               Date;
  percent_from_price_ath: number;
}

export interface Historical {
  time_open:  number;
  time_close: number;
  open:       string;
  high:       string;
  low:        string;
  close:      string;
  volume:     string;
  market_cap: number;
}
