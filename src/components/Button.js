import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ to, children }) => (
  <Link to={to}>
    <button
      style={{
        fontSize: "30px",
        fontWeight: "bold",
        padding: "20px 100px",
        borderRadius: "20px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  </Link>
);
