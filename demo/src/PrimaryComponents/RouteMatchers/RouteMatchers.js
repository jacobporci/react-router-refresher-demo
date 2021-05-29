import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { useRenderCount } from "../../useRenderCount";
import { Route as RoutePage } from "./Route";
import { Switch as SwitchPage } from "./Switch";

export const RouteMatchers = () => {
  useRenderCount({ componentName: "<Router />" });
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Route path={path} exact>
        <h1 style={{ textAlign: "center" }}>Route Matchers</h1>
        <li>
          There are two route matching components: Switch and Route. When a{" "}
          <Link to={`${url}/switch`}>
            <strong>{"<Switch>"}</strong>
          </Link>
          is rendered, it searches through its children{" "}
          <Link to={`${url}/route`}>
            <strong>{"<Route>"}</strong>
          </Link>{" "}
          elements to find one whose path matches the current URL.
        </li>
        <li>
          When it finds one, it renders that{" "}
          <Link to={`${url}/route`}>
            <strong>{"<Route>"}</strong>
          </Link>{" "}
          and ignores all others. This means that you should put{" "}
          <Link to={`${url}/route`}>
            <strong>{"<Route>"}</strong>
          </Link>{" "}
          s with more specific (typically longer) paths before less-specific
          ones.
        </li>
        <li>
          If no{" "}
          <Link to={`${url}/route`}>
            <strong>{"<Route>"}</strong>
          </Link>{" "}
          matches, the{" "}
          <Link to={`${url}/switch`}>
            <strong>{"<Switch>"}</strong>
          </Link>{" "}
          renders nothing (null).
        </li>
        <li>
          One important thing to note is that a{" "}
          <strong>{"<Route path>"}</strong> matches the beginning of the URL,
          not the whole thing. So a <strong>{'<Route path="/">'}</strong> will
          always match the URL.
        </li>
        <li>
          Because of this, we typically put this
          <Link to={`${url}/route`}>
            <strong>{"<Route>"}</strong>
          </Link>{" "}
          last in our{" "}
          <Link to={`${url}/switch`}>
            <strong>{"<Switch>"}</strong>
          </Link>{" "}
          . Another possible solution is to use{" "}
          <strong>{'<Route exact path="/">'}</strong> which does match the
          entire URL.
        </li>
      </Route>
      <Switch>
        <Route path={`${path}/route`} component={RoutePage} />
        <Route path={`${path}/switch`} component={SwitchPage} />
      </Switch>
    </div>
  );
};
