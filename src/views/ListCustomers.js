import React from "react";
import Customer from "../components/Customer";

const ListCustomers = ({ allCustomers }) => {
  return (
    <div>
      {allCustomers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default ListCustomers;
