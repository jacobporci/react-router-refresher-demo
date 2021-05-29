import React from "react";
import { useRenderCount } from "../useRenderCount";
import { NavLinkItem } from "./NavLinkItem";

export const Header = () => {
  useRenderCount({ componentName: "<Header />" });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ul
        style={{
          listStyle: "none",
          width: "100%",
          display: "flex",
          padding: "20px",
          margin: "0",
          borderBottom: "1px solid black",
        }}
      >
        <NavLinkItem to="/" exact>
          Home
        </NavLinkItem>
        <NavLinkItem to="/topics">Topics to Cover</NavLinkItem>
        <NavLinkItem to="/intro">Intro</NavLinkItem>
        <NavLinkItem to="/primary-components">Primary Components</NavLinkItem>
      </ul>
    </div>
  );
};
