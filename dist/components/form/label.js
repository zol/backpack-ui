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

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    lineHeight: 1
  },

  orientation: {
    horizontal: {
      marginRight: ".8rem"
    },
    vertical: {
      marginBottom: ".8rem"
    }
  },

  size: {
    small: {
      fontSize: "1.1rem"
    }
  },

  type: {
    full: {
      display: "block",
      width: "100%"
    }
  },

  uppercase: {
    color: "rgba(" + (0, _color.rgb)(_settings2.default.color.darkGray) + ", .4)",
    textTransform: "uppercase"
  }
};

/**
 * Form label component
 */
function Label(_ref) {
  var owns = _ref.owns;
  var orientation = _ref.orientation;
  var size = _ref.size;
  var type = _ref.type;
  var uppercase = _ref.uppercase;
  var children = _ref.children;

  var style = [styles.base];

  if (orientation) {
    style.push(styles.orientation[orientation]);
  }

  if (size) {
    style.push(styles.size[size]);
  }

  if (type) {
    style.push(styles.type[type]);
  }

  if (uppercase) {
    style.push(styles.uppercase);
  }

  return _react2.default.createElement(
    "label",
    {
      style: style,
      htmlFor: owns
    },
    children
  );
}

Label.propTypes = {
  /**
   * Content for label
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * ID of the input that the label owns/controls
   */
  owns: _react2.default.PropTypes.string.isRequired,

  /**
   * Whether or not the label is floated to the left (horizontal)
   * or stacked (vertical)
   */
  orientation: _react2.default.PropTypes.oneOf(["horizontal", "vertical"]),

  /**
   * Controls the font size of the label
   */
  size: _react2.default.PropTypes.oneOf(["", "small"]),

  /**
   * Defines a type of label to apply specific styles
   */
  type: _react2.default.PropTypes.oneOf(["", "full"]),

  uppercase: _react2.default.PropTypes.bool
};

Label.defaultProps = {
  owns: "",

  orientation: "vertical",

  size: "",

  type: "",

  uppercase: false
};

Label.styles = styles;

exports.default = (0, _radium2.default)(Label);