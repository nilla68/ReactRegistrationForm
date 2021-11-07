import React from "react";

const Customer = ({ customer }) => {
  return (
    <div className="card shadow m-3 col-2">
      <div className="card-body">
        <div className="card-title">
          {customer.firstName} {customer.lastName}
        </div>
        <small>{customer.email}</small>
      </div>
    </div>
  );
};

export default Customer;
