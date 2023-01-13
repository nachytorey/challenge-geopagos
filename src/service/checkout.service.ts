import { ICheckout } from "../types";
import { checkoutData } from "./checkout.data";

export const getCheckoutData = () => {
  return new Promise<ICheckout>((resolve, reject) => {
    setTimeout(() => resolve(checkoutData), 1000);
  });
};
