import React from "react";
import { FC } from "react";
import { IInstallment } from "../../types";
import { convertToAverage, convertToCurrency } from "../../utils/utils";

interface IInstallmentProps {
  installment: IInstallment;
  onSelectedInstallment: (installment: IInstallment) => void;
  isChecked?: boolean;
}

const Installment: FC<IInstallmentProps> = ({
  installment,
  onSelectedInstallment,
  isChecked,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-2xl my-1 p-3 ${
        isChecked ? "bg-primary" : "bg-secondary"
      }`}
      onClick={() => onSelectedInstallment(installment)}
    >
      <div className="flex flex-row">
        <div className="basis-1/4 m-auto">
          <input
            type="radio"
            name="installment"
            className="mt-3"
            checked={isChecked}
            onChange={() => {}}
          />
        </div>
        <div className="basis-1/2 m-auto">
          <p className="label">{`${
            installment.installment
          } cuotas de ${convertToCurrency(installment.total)}`}</p>
          <p className="information-label">
            {`CF: ${convertToAverage(installment.financialRate)}`}
          </p>
        </div>
        <div className="basis-1/4 m-auto">
          <p className="amount">
            {installment.installmentPrice === 0
              ? "Sin interės"
              : convertToCurrency(installment.installmentPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Installment;
