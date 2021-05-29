import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const LinkButton = ({ to, ...props }) => (
  <Link to={to}>
    <Button {...props} />
  </Link>
);
