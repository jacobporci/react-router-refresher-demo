import React from "react";
import { Link } from "react-router-dom";

export const LinkItem = ({ to, children }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <li style={{ fontSize: "30px", marginBottom: "10px" }}>{children}</li>
  </Link>
);
