import React, { Component } from 'react';
import Progress from '../lib/react-progress';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '#ff0000',
      percent: 20
    };
  }

  render() {
    return (
      <div>
        <Progress color={this.state.color} percent={this.state.percent} />
        <label>Percent: <input type='text' value={this.state.percent} onChange={this.handlePercentChange.bind(this)} /></label>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
        <button onClick={this.handleDecrement.bind(this)}>-20</button>
        <button onClick={this.handleIncrement.bind(this)}>+20</button>
        <button onClick={this.handleDone.bind(this)}>Done</button>
      </div>
    );
  }

  handleReset() {
    this.setState({
      percent: 0
    });
  }

  handleDecrement() {
    let percent = this.state.percent - 20;
    percent = percent < 0 ? 0 : percent;

    this.setState({
      percent: percent
    });
  }

  handleIncrement() {
    let percent = this.state.percent + 20;
    percent = percent > 100 ? 100 : percent;

    this.setState({
      percent: percent
    });
  }

  handleDone() {
    this.setState({
      percent: 100
    });
  }

  handlePercentChange(e) {
    let percent = parseInt(e.target.value, 10) || 0;
    this.setState({
      percent: percent
    });
  }
}
