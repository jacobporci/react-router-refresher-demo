import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NavLinkItem } from "../components/NavLinkItem";
import { UnorderedLinkItems } from "../components/UnorderedLinkItems";
import { useRenderCount } from "../useRenderCount";

export const Router = () => {
  useRenderCount({ componentName: "<Router />" });
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Router</h1>
      <UnorderedLinkItems>
        <NavLinkItem to={`${url}/browser-router`}>BrowserRouter</NavLinkItem>
        <NavLinkItem to={`${url}/hash-router`}>HashRouter</NavLinkItem>
      </UnorderedLinkItems>
      <Switch>
        <Route path={`${path}/browser-router`}>
          <h2>BrowserRouter</h2>
          <h3>- uses regular URL paths</h3>
          <h3>- requires server to be configured correctly</h3>
        </Route>
        <Route path={`${path}/hash-router`}>
          <h2>HashRouter</h2>
          <h3>- stores the current location in the hash portion of the URL</h3>
        </Route>
      </Switch>
    </div>
  );
};