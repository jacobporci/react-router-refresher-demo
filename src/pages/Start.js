import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { useRenderCount } from "../useRenderCount";

const LinkItems = ({ to, children }) => {
  const { url } = useRouteMatch();
  console.log({ url });

  return (
    <li style={{ fontSize: "30px" }}>
      <Link to={`${url}/${to}`}>{children}</Link>
    </li>
  );
};

export const Start = () => {
  const { url, path } = useRouteMatch();
  console.log({ path });

  useRenderCount({ componentName: "<Start />" });

  return (
    <PageWrapper>
      <h1>Topics to Cover</h1>
      <ul>
        <LinkItems url={url} to="intro">
          Intro
        </LinkItems>
        <LinkItems to="primary-components">Primary Components</LinkItems>
      </ul>
      <Switch>
        <Route path={`${path}/intro`} component={() => <h1>hello</h1>} />
      </Switch>
    </PageWrapper>
  );
};
