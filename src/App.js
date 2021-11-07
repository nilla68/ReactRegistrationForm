import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListCustomers from "./views/ListCustomers";
import AddCustomer from "./views/AddCustomer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allCustomers, setAllCustomers] = useState([]);
  
  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers");
      const customers = await response.json();
      setAllCustomers(customers);
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <Navbar />
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route path="/AddCustomer">
            <AddCustomer />
          </Route>
          <Route path="/">
            <ListCustomers allCustomers={allCustomers} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
