import React, { Component } from 'react';
import styles from './style.css';

export default class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let progressStyle = {
      width: `${this.props.percent}%`,
      height: `${this.props.height}px`,
      WebkitTransition: `${this.props.speed}s width, ${this.props.speed}s background-color`,
      transition: `${this.props.speed}s width, ${this.props.speed}s background-color`
    };
    progressStyle = Object.assign({}, progressStyle, this.props.style);

    if (this.props.color && this.props.color !== 'rainbow') {
      progressStyle.backgroundColor = this.props.color;
    } else {
      progressStyle.backgroundImage = 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
      progressStyle.backgroundSize = `100vw ${this.props.height}px`;
    }

    return <div className={styles.progress} style={progressStyle}></div>;
  }
}

Progress.defaultProps = {
  height: 2,
  percent: 0,
  speed: .4
};
