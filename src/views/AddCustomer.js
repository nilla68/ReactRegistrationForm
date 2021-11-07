import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddCustomer = () => {
  const [inputs, setInputs] = useState({
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
  });

  const history = useHistory();

  const validateWithRegEx = (value, regEx) => {
    return regEx.test(value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "firstName":
        setInputs((values) => ({ ...values, firstName: value }));
        const isFirstNameValid = validateWithRegEx(value, /^.{2,}$/);
        setInputs((values) => ({ ...values, firstNameValid: isFirstNameValid }));
        break;
      case "lastName":
        setInputs((values) => ({ ...values, lastName: value }));
        const isLastNameValid = validateWithRegEx(value, /^.{2,}$/);
        setInputs((values) => ({ ...values, lastNameValid: isLastNameValid }));
        break;
      case "email":
        setInputs((values) => ({ ...values, email: value }));
        const isEmailValid = validateWithRegEx(value, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        setInputs((values) => ({ ...values, emailValid: isEmailValid }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
      }),
    };

    await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers", request);

    history.push("/");
  };

  return (
    <div className="card shadow m-3 col-2">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="p-2">
          <label>Förnamn</label>
          <input name="firstName" className="form-control" type="text" placeholder="Förnamn" onChange={handleChange} />
          {!inputs.firstNameValid ? ( <span style={{ color: "red" }}>Du måste ange minst 2 tecken</span> ) : ( "" )}
        </div>

        <div className="p-2">
          <label>Efternamn</label>
          <input name="lastName" className="form-control" type="text" placeholder="Efternamn" onChange={handleChange} />
          {!inputs.lastNameValid ? ( <span style={{ color: "red" }}>Du måste ange minst 2 tecken</span> ) : ( "" )}
        </div>

        <div className="p-2">
          <label>E-post</label>
          <input name="email" className="form-control" type="email" placeholder="E-post" onChange={handleChange} />
          {!inputs.emailValid ? ( <span style={{ color: "red" }}>Ange en giltig e-postadress</span> ) : ( "" )}
        </div>

        <div className="p-2">
          <button className="btn btn-primary form-control" type="submit" disabled={!( inputs.firstNameValid && inputs.lastNameValid && inputs.emailValid )}>
            Lägg till kund
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
