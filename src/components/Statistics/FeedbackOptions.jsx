// import React, { Component } from "react";

import React, { Component } from "react";

export class FeedbackOptions extends Component {
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  getTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  render() {
    return null; 
  }
}

