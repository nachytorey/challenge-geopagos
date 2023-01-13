export interface IUnitPrice {
  amount: number;
}

export interface IItem {
  name: string;
  quantity: number;
  unitPrice: IUnitPrice;
}

export interface IInstallment {
  installment: number;
  total: number;
  financialRate: number;
  installmentPrice: number;
}

export interface IAttributes {
  total_price: number;
  total_price_accessibility: string;
  currency: string;
  currency_symbol: string;
  items: IItem[];
  installments: IInstallment[];
}

export interface ICheckout {
  shop_name: string;
  attributes: IAttributes;
}