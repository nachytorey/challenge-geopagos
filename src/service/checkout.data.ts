import { ICheckout } from "../types";

export const checkoutData: ICheckout = {
  shop_name: "John's Shop",
  attributes: {
    total_price: 1000,
    total_price_accessibility: "1000 pesos",
    currency: "ARS",
    currency_symbol: "$",
    items: [
      {
        name: "Pizza Pequeña",
        quantity: 2,
        unitPrice: {
          amount: 250,
        },
      },
      {
        name: "Ensalada de Frutas",
        quantity: 1,
        unitPrice: {
          amount: 500,
        },
      },
    ],
    installments: [
      {
        installment: 1,
        total: 1000,
        financialRate: 0,
        installmentPrice: 1000,
      },
      {
        installment: 3,
        total: 1122.21,
        financialRate: 0.09,
        installmentPrice: 374.07,
      },
      {
        installment: 6,
        total: 1249.45,
        financialRate: 0.165,
        installmentPrice: 208.24,
      },
    ],
  },
};
