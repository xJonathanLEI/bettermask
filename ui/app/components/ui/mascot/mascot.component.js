import PropTypes from 'prop-types';
import React, { Component } from 'react';

const directionTargetGenerator = ({ top, left, height, width }) => {
  const horizontalMiddle = left + width / 2;
  const verticalMiddle = top + height / 2;
  return {
    up: { x: horizontalMiddle, y: top - height },
    down: { x: horizontalMiddle, y: top + height * 2 },
    left: { x: left - width, y: verticalMiddle },
    right: { x: left + width * 2, y: verticalMiddle },
    middle: { x: horizontalMiddle, y: verticalMiddle },
  };
};

export default class Mascot extends Component {
  static propTypes = {
    animationEventEmitter: PropTypes.object.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    followMouse: PropTypes.bool,
    lookAtTarget: PropTypes.object,
    lookAtDirection: PropTypes.oneOf(['up', 'down', 'left', 'right', 'middle']),
  };

  static defaultProps = {
    width: '200',
    height: '200',
    followMouse: true,
    lookAtTarget: {},
    lookAtDirection: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        id="logo"
        src="./images/logo/bettermask-fox.svg"
        alt="logo"
        width="175"
        height="165"
      />
    );
  }
}
