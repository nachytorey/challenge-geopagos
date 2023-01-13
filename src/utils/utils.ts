export const convertToCurrency = (amount: number | null | undefined) =>
  amount?.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
  });

export const convertToAverage = (amount: number) =>
  `${new Intl.NumberFormat("de-DE").format(amount)}%`;
