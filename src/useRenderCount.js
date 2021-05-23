import React, { useRef } from "react";

export const useRenderCount = ({ componentName }) => {
  const renderCount = useRef(0);
  console.log(`${componentName} render count: ${renderCount.current++}`);
  return null;
};
