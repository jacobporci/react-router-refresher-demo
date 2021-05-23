import React from "react";
import { Button } from "../components/Button";
import { PageWrapper } from "../components/PageWrapper";
import { useRenderCount } from "../useRenderCount";

export const Intro = () => {
  useRenderCount({ componentName: "<Intro />" });

  return (
    <PageWrapper>
      <h1 style={{ width: "70%", lineHeight: 1.8, textAlign: "center" }}>
        This guide’s purpose is to explain the mental model to have when using
        React Router. We call it “Dynamic Routing”, which is quite different
        from the “Static Routing” you’re probably more familiar with.
      </h1>
      <Button to="/primary-components">Next</Button>
    </PageWrapper>
  );
};
