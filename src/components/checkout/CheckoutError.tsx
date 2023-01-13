import React from "react";
import { FC } from "react";
import Header from "../ui/Header";
import { AlertCircleIcon } from "../ui/Icons";

interface ICheckoutError {
  shopName: string;
  onRedirect: () => void;
}

const CheckoutError: FC<ICheckoutError> = ({ shopName, onRedirect }) => {
  return (
    <>
      <Header isDark={false} shopName={shopName} />
      <div className="grid grid-row justify-items-center gap-6 m-auto max-w-sm text-center my-20">
        <AlertCircleIcon size={80} />
        <h3>Transacción denegada</h3>
        <div>
          <p>¡Disculpas! Se ha producido un error,</p>
          <p>por favor vuelve a intentar.</p>
        </div>
        <button className="w-6/12" onClick={onRedirect}>
          Volver a intentar
        </button>
      </div>
    </>
  );
};

export default CheckoutError;
