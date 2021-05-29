import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children, exact = false }) => (
  <NavLink
    to={to}
    style={{ textDecoration: "none", margin: "0 10px" }}
    activeStyle={{ color: "red" }}
    exact={exact}
  >
    <li style={{ fontSize: "20px", marginBottom: "10px" }}>{children}</li>
  </NavLink>
);
