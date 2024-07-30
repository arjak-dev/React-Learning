import React from "react";

export default class NameAgeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    const incrementAge = () => {
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };
    const decrementAge = () => {
      this.setState((currentState) => {
        return { age: currentState.age - 1 };
      });
    };
    return (
      <>
        <input
          value={this.state.name}
          onChange={(e) =>
            this.setState((currentState) => {
              return { name: e.target.value };
            })
          }
        ></input>
        <br />
        <br />
        <button onClick={incrementAge}> + </button>
        {this.state.age}
        <button onClick={decrementAge}> - </button>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </>
    );
  }
}
