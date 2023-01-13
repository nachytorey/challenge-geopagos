import { useEffect, useState } from "react";
import { getCheckoutData } from "../service/checkout.service";
import { ICheckout } from "../types";

const useCheckout = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ICheckout | null>(null);

  useEffect(() => {
    getCheckoutData()
      .then((data: ICheckout) => {
        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsloading(false));
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};

export default useCheckout;
