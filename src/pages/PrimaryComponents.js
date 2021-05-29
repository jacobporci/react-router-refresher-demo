import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LinkItem } from "../components/LinkItem";
import { UnorderedLinkItems } from "../components/UnorderedLinkItems";
import { RouteMatchers } from "../PrimaryComponents/RouteMatchers/RouteMatchers";
import { Router } from "../PrimaryComponents/Router/Router";
import { useRenderCount } from "../useRenderCount";

export const PrimaryComponents = () => {
  useRenderCount({ componentName: "<PrimaryComponents />" });
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Route path={path} exact>
        <h1 style={{ textAlign: "center" }}>Primary Components</h1>
        <UnorderedLinkItems>
          <LinkItem to={`${url}/router`}>Router</LinkItem>
          <LinkItem to={`${url}/route-matchers`}>Route Matchers</LinkItem>
          <LinkItem to={`${url}/navigations`}>Navigations</LinkItem>
        </UnorderedLinkItems>
      </Route>
      <Switch>
        <Route path={`${path}/router`} component={Router} />
        <Route path={`${path}/route-matchers`} component={RouteMatchers} />
      </Switch>
    </div>
  );
};
