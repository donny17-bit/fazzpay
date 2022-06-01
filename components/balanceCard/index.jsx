import React from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function BalanceCard() {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const data = user.data;

  return (
    <div className="row m-0 border p-4 balance-container">
      <div className="col p-0">
        <p className="balance-text">Balance</p>
        <p className="balance-amount">{`Rp ${data.balance}`}</p>
        <p className="balance-phone pt-2 m-0">{data.noTelp}</p>
      </div>
      <div className="col d-grid p-0 justify-content-end">
        <button
          className="btn btn-primary balance-button"
          onClick={() => {
            router.push("/transfer");
          }}
        >
          <i className="bi bi-arrow-up balance-icon"></i> Transfer
        </button>
        <button className="btn btn-primary mt-4 balance-button">
          <i className="bi bi-plus-lg balance-icon"></i> Top up
        </button>
      </div>
    </div>
  );
}

export default BalanceCard;
