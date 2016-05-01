'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function (_Component) {
  (0, _inherits3.default)(Progress, _Component);

  function Progress(props) {
    (0, _classCallCheck3.default)(this, Progress);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Progress).call(this, props));
  }

  (0, _createClass3.default)(Progress, [{
    key: 'render',
    value: function render() {
      var progressStyle = {
        width: this.props.percent + '%',
        height: this.props.height + 'px',
        WebkitTransition: this.props.speed + 's width, ' + this.props.speed + 's background-color',
        transition: this.props.speed + 's width, ' + this.props.speed + 's background-color'
      };
      progressStyle = (0, _assign2.default)({}, progressStyle, this.props.style);

      if (this.props.color && this.props.color !== 'rainbow') {
        progressStyle.backgroundColor = this.props.color;
      } else {
        progressStyle.backgroundImage = 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
        progressStyle.backgroundSize = '100vw ' + this.props.height + 'px';
      }

      return _react2.default.createElement('div', { className: _style2.default.progress, style: progressStyle });
    }
  }]);
  return Progress;
}(_react.Component);

exports.default = Progress;


Progress.defaultProps = {
  height: 2,
  percent: 0,
  speed: .4
};
module.exports = exports['default'];