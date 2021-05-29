import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";

export const Route = () => {
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.goBack()}>Back</Button>
      <h2>Route</h2>
      <ul>
        <li>
          Router that uses <strong>hash portion of the URL</strong>
        </li>
      </ul>
    </div>
  );
};
