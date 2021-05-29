import { useRef } from "react";

export const useRenderCount = ({ componentName }) => {
  const renderCount = useRef(1);
  console.log(`${componentName} render count: ${renderCount.current++}`);
  return null;
};
