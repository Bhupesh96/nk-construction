// components/NavigationMenu.jsx
import React from "react";

const NavigationMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="menu-item menu-item-has-children">
        <a href="/">HOME</a>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="/about">ABOUT US</a>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="services">SERVICES</a>
      </li>
      <li>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
