import React from "react";

export default function MiniCard(props) {
  const { amount, fullName, type } = props.data;
  return (
    <div className="row m-0 p-3 register-list" style={{ width: "400px" }}>
      <div className="col-2">
        {type == "send" ? (
          <i
            className={`bi bi-arrow-up-short p-0`}
            style={{ color: "#FF5B37", fontSize: 30 }}
          ></i>
        ) : (
          <i
            className={`bi bi-arrow-down-short p-0`}
            style={{ color: "#1EC15F", fontSize: 30 }}
          ></i>
        )}
      </div>
      <div className="col pt-1 ">
        {type == "send" ? (
          <p className="mb-2 transfer-phone">Transfer to {fullName}</p>
        ) : (
          <p className="mb-2 transfer-phone">Accept from {fullName}</p>
        )}
        <p className="m-0 transfer-name">Rp {amount}</p>
      </div>
      <div className="col ps-0 pt-3 text-end pe-0 pb-3"></div>
    </div>
  );
}
