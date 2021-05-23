import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LinkItem } from "../components/LinkItem";
import { PageWrapper } from "../components/PageWrapper";
import { UnorderedLinkItems } from "../components/UnorderedLinkItems";
import { Router } from "../PrimaryComponents/Router";
import { useRenderCount } from "../useRenderCount";

export const PrimaryComponents = () => {
  useRenderCount({ componentName: "<PrimaryComponents />" });
  const { url, path } = useRouteMatch();

  return (
    <PageWrapper>
      <Route path={path} exact>
        <h1>Primary Components</h1>
        <UnorderedLinkItems>
          <LinkItem to={`${url}/router`}>Router</LinkItem>
          <LinkItem to={`${url}/route-matchers`}>Route Matchers</LinkItem>
          <LinkItem to={`${url}/navigations`}>Navigations</LinkItem>
        </UnorderedLinkItems>
      </Route>
      <Switch>
        <Route path={`${path}/router`} component={Router} />
      </Switch>
    </PageWrapper>
  );
};
