import React from "react";
import { LinkButton } from "../components/LinkButton";
import { PageWrapper } from "../components/PageWrapper";
import { useRenderCount } from "../useRenderCount";

export const Home = () => {
  useRenderCount({ componentName: "<Home />" });

  return (
    <PageWrapper>
      <h1 style={{ fontSize: "60px" }}>React Router Refresher</h1>
      <LinkButton to="/topics">Start</LinkButton>
    </PageWrapper>
  );
};
