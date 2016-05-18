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

var styles = {
  base: {
    backgroundColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .6)",
    borderRadius: _settings2.default.layout.borderRadius,
    color: _settings2.default.color.white,
    display: "block",
    height: "2.4rem",
    fontSize: "1.4rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    transition: "background-color 400ms linear",
    width: "auto",

    ":hover": {
      backgroundColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .9)"
    },
    ":active": {
      backgroundColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .9)"
    },
    ":focus": {
      backgroundColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .9)"
    }
  },

  element: {
    label: {
      fontSize: "1rem",
      marginRight: ".7rem"
    }
  }
};

/**
 * ExpandButton component
 *
 * @usage
 * <ExpandButton />
 */
function ExpandButton(_ref) {
  var label = _ref.label;
  var onClick = _ref.onClick;

  var style = {
    container: [styles.base],
    label: [styles.element.label]
  };

  return _react2.default.createElement(
    "button",
    {
      className: "ExpandButton",
      style: style.container,
      "aria-label": "Expand",
      onClick: onClick
    },
    label && _react2.default.createElement(
      "small",
      {
        className: "ExpandButton-label",
        style: style.label
      },
      label
    ),
    _react2.default.createElement(_icon2.default, {
      name: "pop-out"
    })
  );
}

ExpandButton.propTypes = {
  /**
   * Text to be placed to the right of the icon
   */
  label: _react2.default.PropTypes.string,

  /**
   * Perform an action when the button is clicked
   */
  onClick: _react2.default.PropTypes.func
};

ExpandButton.defaultProps = {
  label: "",

  onClick: null
};

ExpandButton.styles = styles;

exports.default = (0, _radium2.default)(ExpandButton);