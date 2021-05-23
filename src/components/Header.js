import React from "react";
import { NavLink } from "react-router-dom";
import { useRenderCount } from "../useRenderCount";

const HeaderItem = ({ label, to }) => (
  <NavLink to={to} activeStyle={{ color: "red" }} exact>
    <h2 style={{ marginRight: "50px" }}>{label}</h2>
  </NavLink>
);

export const Header = () => {
  useRenderCount({ componentName: "<Header />" });

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        padding: "20px",
        borderBottom: "1px solid black",
      }}
    >
      <HeaderItem to="/" label="Home" />
      <HeaderItem to="/start" label="Table of Contents" />
    </div>
  );
};
