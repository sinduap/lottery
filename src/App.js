import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxBalls={3} maxNum={4} />
      </div>
    );
  }
}

export default App;
