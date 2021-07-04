import React from "react";
import { Component } from "react/cjs/react.production.min";
import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncreament = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countpositivePercentage = () =>
    this.state.good
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          option={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncreament}
        />
        <Section title="Statistics" />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countpositivePercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Container>
    );
  }
}

export default App;
