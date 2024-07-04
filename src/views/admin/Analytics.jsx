import React from "react";
import { useParams } from "react-router-dom";

function Analytics() {
  const { aID } = useParams();
  return (
    <div>
      <h1>Analytics</h1>
      <p>Analytics ID: {aID}</p>
    </div>
  );
}

export default Analytics;
