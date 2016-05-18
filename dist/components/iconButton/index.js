"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hoverState = {
  backgroundColor: (0, _color.darken)(_settings2.default.color.white, 9),
  textDecoration: "none"
};

var styles = {
  base: {
    appearance: "none",
    backgroundColor: (0, _color.darken)(_settings2.default.color.white, 6),
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: "100%",
    color: _settings2.default.color.darkGray,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    lineHeight: 1,
    outline: 0,
    padding: 0,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 400ms",
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverState,
    ":focus": hoverState,
    ":active": hoverState
  },

  size: {
    small: {
      fontSize: "1.2rem",
      height: "2rem",
      width: "2rem"
    },
    medium: {
      fontSize: "1.6rem",
      height: "3rem",
      width: "3rem"
    },
    large: {
      fontSize: "2rem",
      height: "4rem",
      width: "4rem"
    }
  }
};

function IconButton(_ref) {
  var icon = _ref.icon;
  var label = _ref.label;
  var className = _ref.className;
  var href = _ref.href;
  var onClick = _ref.onClick;
  var size = _ref.size;
  var owns = _ref.owns;

  var Element = href ? "a" : "button";
  var role = Element === "a" ? "button" : "";

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  return _react2.default.createElement(
    Element,
    {
      className: (className ? className + " " : "") + "IconButton",
      style: style,
      href: href,
      onClick: onClick,
      role: role,
      title: label,
      "aria-label": label,
      "aria-owns": owns
    },
    _react2.default.createElement(_icon2.default, {
      name: icon
    })
  );
}

IconButton.propTypes = {
  /**
   * Name of the icon to display inside of the button
   */
  icon: _react2.default.PropTypes.string.isRequired,

  /**
   * A descriptive label of the button's purpose
   */
  label: _react2.default.PropTypes.string.isRequired,

  /**
   * A custom classname to append to the default IconButton classname
   */
  className: _react2.default.PropTypes.string,

  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: _react2.default.PropTypes.string,

  /**
   * Function to run when the button is clicked
   */
  onClick: _react2.default.PropTypes.func,

  /**
   * Size of the button
   */
  size: _react2.default.PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The ID of the sibling element that the button owns, e.g., if the button has
   * a menu with an ID of "share-menu", then `owns="share-menu"`.
   */
  owns: _react2.default.PropTypes.string
};

IconButton.defaultProps = {
  icon: "",

  label: "",

  className: "",

  href: "",

  onClick: null,

  size: "medium",

  owns: ""
};

IconButton.styles = styles;

exports.default = (0, _radium2.default)(IconButton);