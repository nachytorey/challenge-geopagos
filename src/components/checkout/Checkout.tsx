/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import Input from "../ui/Input";
import Installment from "./Installment";
import { LockIcon } from "../ui/Icons";
import { convertToCurrency } from "../../utils/utils";
import { IInstallment } from "../../types";
import Header from "../ui/Header";
import CheckoutError from "./CheckoutError";
import useCheckout from "../../hooks/useChekout";
import Spinner from "../ui/Spinner";

const Checkout = () => {
  const { isLoading, data: checkout } = useCheckout();
  const [error, setError] = useState<boolean>(false);
  const [selectedInstallment, setSelectedInstallment] = useState<
    IInstallment | null | undefined
  >(null);

  const onSave = () => {
    // call API, hook, graph and set result
    setError(true);
  };

  useEffect(() => {
    if (checkout) {
      setSelectedInstallment(checkout?.attributes.installments[0]);
    }
  }, [error, checkout]);

  if (error) {
    return (
      <CheckoutError
        shopName={checkout?.shop_name ?? ""}
        onRedirect={() => setError(false)}
      />
    );
  }

  return (
    <>
      <Header isDark shopName={checkout?.shop_name} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="m-auto max-w-sm p-4">
          <h1 className="text-center mb-3">Completá los datos para pagar</h1>
          <div className="grid grid-cols-1 border-2 p-3 rounded-lg">
            <div className="grid grid-cols-2 pb-1 text-primary bold text-xl">
              <p>Total</p>
              <p className="text-end">
                {convertToCurrency(selectedInstallment?.total)}
              </p>
            </div>
            {checkout?.attributes.items.map((item) => {
              return (
                <div className="grid grid-cols-3 pb-1 label-item" key={item.name}>
                  <p className="col-span-2">{`${item.name} x ${item.quantity}`}</p>
                  <p className="text-end">{`${convertToCurrency(
                    item.unitPrice.amount
                  )}`}</p>
                </div>
              );
            })}
          </div>

          <div className="my-4">
            <span className="label2 mr-1 bold">
              Paga con tarjeta de crédito o débito.
            </span>
            <a href="#">Ver tarjetas</a>
          </div>

          <div className="grid grid-cols-1">
            <Input
              type="number"
              label={"Número de tarjeta"}
              className="bg-visa-icon"
              mask="9999-9999-9999-9999"
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeHolder="MM/AA"
                helperText={"Fecha de expiración"}
                mask="99/99"
              />
              <Input
                type="number"
                placeHolder="Cód. de seguridad"
                helperText={"3 números al dorso de la tarjeta"}
                className="bg-interrogative-icon"
                mask="999"
              />
            </div>
            <Input
              placeHolder="Nombre de titular"
              helperText={"Como figura en la tarjeta"}
              maxLength={30}
            />
            <Input
              type="number"
              placeHolder="DNI del titular"
              helperText={"Número de documento"}
              mask="99.999.999"
            />
          </div>

          <h2 className="text-start my-4">Cuotas</h2>
          {checkout?.attributes.installments.map((installment) => {
            return (
              <Installment
                installment={installment}
                key={installment.financialRate}
                onSelectedInstallment={setSelectedInstallment}
                isChecked={selectedInstallment?.total === installment.total}
              />
            );
          })}

          <h2 className="my-4">Datos personales</h2>
          <Input
            type="email"
            placeHolder="E-mail"
            helperText={"A este email te enviaremos el recibo de compra"}
            maxLength={60}
          />

          <button className="w-full" onClick={onSave}>
            Continuar
          </button>

          <div className="text-center mt-5">
            <LockIcon size={25} />
            <span className="footer-label">
              Todas las transacciones son seguras y encriptadas.
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
