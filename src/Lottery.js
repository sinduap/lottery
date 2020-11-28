import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

export class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);

    this.state = { nums: Array.from({ length: this.props.maxBalls }) };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (num) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  render() {
    return (
      <section className="lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num, idx) => (
            <Ball num={num} key={idx} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
