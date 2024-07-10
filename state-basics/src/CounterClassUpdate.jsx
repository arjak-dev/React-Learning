import React from "react";

export default class CounterClassUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const counterUpdate = () => {
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 };
      });
    };
    return <h1 onClick={counterUpdate}>{this.state.counter}</h1>;
  }
}
