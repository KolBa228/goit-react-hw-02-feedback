import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
    const { good, neutral, bad } = this.state;
    const total = this.getTotal();
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <>
        <FeedbackOptions />
        <div className="stats">
          <div className="btn_block">
            <button type="button" onClick={this.goodIncrement}>
              good
            </button>
            <button type="button" onClick={this.neutralIncrement}>
              neutral
            </button>
            <button type="button" onClick={this.badIncrement}>
              bad
            </button>
          </div>

          {total > 0 ? (
            <div className="stats_block">
              <span>good {good}</span>
              <span>neutral {neutral}</span>
              <span>bad {bad}</span>
              <span>total {total}</span>
              <span>Positive feedback {positivePercentage}%</span>
            </div>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </>
    );
  }
}

function Notification({ message }) {
  return <div>{message}</div>;
}



// import {FeedbackOptions} from './FeedbackOptions'

// const { Component } = require("react");

// export class Statistics extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.getTotal();
//     const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

//       return (
//         <FeedbackOptions></FeedbackOptions>
//       <div className="stats">
//         <div className="btn_block">
//           <button type="button" onClick={this.goodIncrement}>
//             good
//           </button>
//           <button type="button" onClick={this.neutralIncrement}>
//             neutral
//           </button>
//           <button type="button" onClick={this.badIncrement}>
//             bad
//           </button>
//         </div>

//         {total > 0 ? (
//           <div className="stats_block">
//             <span>good {good}</span>
//             <span>neutral {neutral}</span>
//             <span>bad {bad}</span>
//             <span>total {total}</span>
//             <span>Positive feedback {positivePercentage}%</span>
//           </div>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }

// function Notification({ message }) {
//   return <div>{message}</div>;
// }
