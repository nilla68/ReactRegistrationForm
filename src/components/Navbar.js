import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Kundlista
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AddCustomer">
              Lägg till kund
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
