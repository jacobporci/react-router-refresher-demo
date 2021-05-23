import React from "react";
import { Button } from "../components/Button";
import { PageWrapper } from "../components/PageWrapper";
import { useRenderCount } from "../useRenderCount";

export const Home = () => {
  useRenderCount({ componentName: "<Home />" });

  return (
    <PageWrapper>
      <h1 style={{ fontSize: "60px" }}>React Router Refresher</h1>
      <Button to="/topics">Start</Button>
    </PageWrapper>
  );
};
