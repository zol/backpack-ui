"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    color: _settings2.default.color.darkGray,
    fontSize: "2.6rem",
    fontWeight: 300,
    lineHeight: 40 / 26,
    marginBottom: 0
  }
};

/**
 * Lede component
 */
function Lede(_ref) {
  var content = _ref.content;

  return _react2.default.createElement(
    "div",
    {
      className: "Lede",
      style: styles.base
    },
    _react2.default.createElement(
      "p",
      null,
      content
    )
  );
}

Lede.propTypes = {
  /**
   * String of content
   */
  content: _react2.default.PropTypes.string.isRequired
};

Lede.defaultProps = {
  content: ""
};

exports.default = (0, _radium2.default)(Lede);