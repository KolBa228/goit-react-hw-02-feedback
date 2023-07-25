import React from "react";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
