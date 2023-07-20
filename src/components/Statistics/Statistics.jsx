
import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="stats">
      <div className="stats_block">
        <span>good {good}</span>
        <span>neutral {neutral}</span>
        <span>bad {bad}</span>
        <span>total {total}</span>
        <span>Positive feedback {positivePercentage}%</span>
      </div>
    </div>
  );
};

export default Statistics;
