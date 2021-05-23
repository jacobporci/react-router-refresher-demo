import React from "react";

export const UnorderedLinkItems = ({ children }) => (
  <ul
    style={{
      listStyle: "none",
      margin: "0",
      padding: "0",
      textAlign: "center",
    }}
  >
    {children}
  </ul>
);
