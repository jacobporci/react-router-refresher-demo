import React from "react";
import { LinkItem } from "../components/LinkItem";
import { PageWrapper } from "../components/PageWrapper";
import { UnorderedLinkItems } from "../components/UnorderedLinkItems";
import { useRenderCount } from "../useRenderCount";

export const Topics = () => {
  useRenderCount({ componentName: "<Topics />" });

  return (
    <PageWrapper>
      <h1>Topics to Cover</h1>
      <UnorderedLinkItems>
        <LinkItem to="/intro">Intro</LinkItem>
        <LinkItem to="/primary-components">Primary components</LinkItem>
      </UnorderedLinkItems>
    </PageWrapper>
  );
};
