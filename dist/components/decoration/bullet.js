"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bullet(_ref) {
  var space = _ref.space;

  if (space === "before") {
    return _react2.default.createElement(
      "span",
      null,
      " •"
    );
  }

  if (space === "after") {
    return _react2.default.createElement(
      "span",
      null,
      "• "
    );
  }

  if (space === "both") {
    return _react2.default.createElement(
      "span",
      null,
      " • "
    );
  }

  return _react2.default.createElement(
    "span",
    null,
    "•"
  );
}

Bullet.propTypes = {
  /**
   * Where a space should be placed
   */
  space: _react2.default.PropTypes.oneOf(["", "before", "after", "both"])
};

Bullet.defaultProps = {
  space: ""
};

exports.default = Bullet;