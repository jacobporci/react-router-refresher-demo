import React from "react";
import { Link } from "react-router-dom";

export const LinkItem = ({ to, children }) => (
  <Link to={to}>
    <li style={{ fontSize: "30px" }}>{children}</li>
  </Link>
);
