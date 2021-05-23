import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    style={{ textDecoration: "none" }}
    activeStyle={{ color: "red" }}
  >
    <li style={{ fontSize: "30px", marginBottom: "10px" }}>{children}</li>
  </NavLink>
);
