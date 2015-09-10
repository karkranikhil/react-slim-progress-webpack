'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var Progress = (function (_Component) {
  _inherits(Progress, _Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var progressStyle = {
        width: this.props.percent + '%',
        height: this.props.height + 'px',
        WebkitTransition: this.props.speed + 's width, ' + this.props.speed + 's background-color',
        transition: this.props.speed + 's width, ' + this.props.speed + 's background-color'
      };
      progressStyle = _Object$assign({}, progressStyle, this.props.style);

      if (this.props.color && this.props.color !== 'rainbow') {
        progressStyle.backgroundColor = this.props.color;
      } else {
        progressStyle.backgroundImage = 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
        progressStyle.backgroundSize = '100vw ' + this.props.height + 'px';
      }

      return _react2['default'].createElement('div', { styleName: 'progress', style: progressStyle });
    }
  }]);

  return Progress;
})(_react.Component);

exports['default'] = (0, _reactCssModules2['default'])(Progress, _styleCss2['default']);

Progress.defaultProps = {
  height: 2,
  percent: 0,
  speed: .4
};
module.exports = exports['default'];
