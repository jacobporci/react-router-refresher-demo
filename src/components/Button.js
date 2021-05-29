import React from "react";

export const Button = ({ children, ...props }) => (
  <button
    style={{
      fontSize: "15px",
      fontWeight: "bold",
      padding: "10px 30px",
      borderRadius: "20px",
      backgroundColor: "red",
      color: "white",
      border: "none",
      cursor: "pointer",
    }}
    {...props}
  >
    {children}
  </button>
);
