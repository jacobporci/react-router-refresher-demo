import React from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkItem } from "../components/LinkItem";
import { PageWrapper } from "../components/PageWrapper";
import { UnorderedLinkItems } from "../components/UnorderedLinkItems";

export const PrimaryComponents = () => {
  const { url } = useRouteMatch();

  return (
    <PageWrapper>
      <h1>Primary Components</h1>
      <UnorderedLinkItems>
        <LinkItem to={`${url}/router`}>Router</LinkItem>
        <LinkItem to={`${url}/route-matchers`}>Route Matchers</LinkItem>
        <LinkItem to={`${url}/navigations`}>Navigations</LinkItem>
      </UnorderedLinkItems>
    </PageWrapper>
  );
};
