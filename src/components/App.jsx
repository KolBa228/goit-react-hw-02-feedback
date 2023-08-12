import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import { Notification } from "./Notification/Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackIncrement = (type) => {
    switch (type) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        return;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        return;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        return;
      default:
        break;
    }
  };

  const getTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = getTotal();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = getTotal();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ["good", "neutral", "bad"];

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedbackIncrement} />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
}
