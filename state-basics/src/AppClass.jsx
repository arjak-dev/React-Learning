import React from "react";
import CounterClassUpdate from "./CounterClassUpdate";
export default class AppClass extends React.Component {
  // render() {
  //   const setName = () => {
  //     this.setState({ name: "Mondal" });
  //     this.setState((currentState) => {
  //       return { age: currentState.age + 1 };
  //     });
  //     this.setState((currentState) => {
  //       return { age: currentState.age + 1 };
  //     });
  //   };

  //   // return (
  //   //   <h1 onClick={() => this.setState({ name: "Mondal" })}>
  //   //     Hi {this.state.name}
  //   //   </h1>
  //   // );

  //   return (
  //     <h1 onClick={setName}>
  //       Hi {this.state.name} {this.state.age}
  //     </h1>
  //   );
  // }

  render() {
    return <CounterClassUpdate />;
  }
}
