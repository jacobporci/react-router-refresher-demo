import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ to, children }) => (
  <Link to={to}>
    <button
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        padding: "15px 60px",
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
