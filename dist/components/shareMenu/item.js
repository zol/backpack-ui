"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShareMenuItem(_ref) {
  var network = _ref.network;
  var href = _ref.href;
  var label = _ref.label;
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    "a",
    {
      className: "ShareMenu-item",
      style: _styles2.default.item.base,
      "data-network": network,
      onClick: onClick,
      href: href
    },
    _react2.default.createElement(_icon2.default, {
      name: network,
      size: "medium"
    }),
    _react2.default.createElement(
      "span",
      { style: _styles2.default.item.label },
      label
    )
  );
}

ShareMenuItem.propTypes = {
  /**
   * Slugified name of the sharable network
   */
  network: _react2.default.PropTypes.oneOf(["twitter", "facebook", "email"]).isRequired,

  /**
   * URL of network's share method
   */
  href: _react2.default.PropTypes.string.isRequired,

  /**
   * Text label to show next to icon
   */
  label: _react2.default.PropTypes.string.isRequired,

  /**
   * Function to run when button is clicked
   */
  onClick: _react2.default.PropTypes.func
};

ShareMenuItem.defaultProps = {
  network: "",

  href: "",

  label: "",

  onClick: null
};

exports.default = (0, _radium2.default)(ShareMenuItem);