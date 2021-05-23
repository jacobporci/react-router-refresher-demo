import React from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkItem } from "../components/LinkItem";
import { PageWrapper } from "../components/PageWrapper";

export const PrimaryComponents = () => {
  const { url } = useRouteMatch();

  return (
    <PageWrapper>
      <ul>
        <LinkItem to={`${url}/router`}>Router</LinkItem>
        <LinkItem to={`${url}/route-matchers`}>Route Matchers</LinkItem>
        <LinkItem to={`${url}/navigations`}>Navigations</LinkItem>
      </ul>
    </PageWrapper>
  );
};
