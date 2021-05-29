import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NavLinkItem } from "../../components/NavLinkItem";
import { UnorderedLinkItems } from "../../components/UnorderedLinkItems";
import { useRenderCount } from "../../useRenderCount";
import { BrowserRouter } from "./BrowserRouter";
import { HashRouter } from "./HashRouter";

export const Router = () => {
  useRenderCount({ componentName: "<Router />" });
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Route path={path} exact>
        <h1 style={{ textAlign: "center" }}>Router</h1>
        <UnorderedLinkItems>
          <NavLinkItem to={`${url}/browser-router`}>BrowserRouter</NavLinkItem>
          <NavLinkItem to={`${url}/hash-router`}>HashRouter</NavLinkItem>
        </UnorderedLinkItems>
      </Route>
      <Switch>
        <Route path={`${path}/browser-router`} component={BrowserRouter} />
        <Route path={`${path}/hash-router`} component={HashRouter} />
      </Switch>
    </div>
  );
};
