import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";

export const Switch = () => {
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.goBack()}>Back</Button>
      <h2 style={{ textAlign: "center" }}>Switch</h2>
      <ul>
        <li>
          is unique in that it renders a route <strong>exclusively</strong>
        </li>
        <li>
          In contrast, every <strong>{"<Route>"}</strong> that matches the
          location renders inclusively
        </li>
      </ul>
    </div>
  );
};
