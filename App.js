import React from "react";
import { findDOMNode } from "react-dom";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    - logo
 *    - Nav Items
 * Body
 *    - Search
 *    - RestaurentContainer
 *         - RestaurentCard
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 **/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logoground.com/uploads8/dv8y2020646782020-03-243826278Quick-resto2.jpeg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="pizza"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7"
      />
      <h3>Pizza Hut</h3>
      <h4>Italian, Global</h4>
      <h4>4.1</h4>
      <h4>20 min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
