import React from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { useRenderCount } from "../useRenderCount";

export const Intro = () => {
  useRenderCount({ componentName: "<Intro />" });

  return (
    <PageWrapper>
      <h1 style={{ fontSize: "60px" }}>React Router Refresher</h1>
      <Link to="/start">
        <h2>Start</h2>
      </Link>
    </PageWrapper>
  );
};
