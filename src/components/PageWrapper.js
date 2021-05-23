import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        widows: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
