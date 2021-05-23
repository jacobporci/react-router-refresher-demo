import React from "react";
import { NavLink } from "react-router-dom";
import { useRenderCount } from "../useRenderCount";

const HeaderItem = ({ label, to, exact = false }) => (
  <NavLink to={to} activeStyle={{ color: "red" }} exact={exact}>
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
      <HeaderItem to="/" label="Home" exact />
      <HeaderItem to="/topics" label="Topic to Cover" />
      <HeaderItem to="/intro" label="Intro" />
      <HeaderItem to="/primary-components" label="Primary Components" />
    </div>
  );
};
