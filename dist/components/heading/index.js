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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {
    lineHeight: 1
  },

  size: {
    tiny: _defineProperty({
      fontSize: "1.1rem"

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      fontSize: "1.3rem"
    }),
    small: {
      fontSize: "1.6rem"
    },
    medium: {
      fontSize: "2.6rem",
      lineHeight: 40 / 26
    },
    large: {
      fontSize: "4.5rem"
    },
    huge: _defineProperty({
      fontSize: "3rem",
      letterSpacing: "-.1rem",
      lineHeight: 36 / 30

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      fontSize: "6.4rem",
      lineHeight: 70 / 64
    })
  },

  weight: {
    thin: {
      fontWeight: 300
    },
    normal: {
      fontWeight: 400
    },
    thick: {
      fontWeight: 600
    }
  },

  importance: {
    low: {
      color: "rgba(" + (0, _color.rgb)(_settings2.default.color.text) + ", .4)"
    },
    normal: {
      color: _settings2.default.color.titleGray
    },
    high: {
      color: _settings2.default.color.darkGray
    },
    alert: {
      color: _settings2.default.color.red
    }
  },

  variant: {
    caps: {
      textTransform: "uppercase"
    },

    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },

  tracking: {
    tight: {
      letterSpacing: "-1px"
    },
    loose: {
      letterSpacing: "1px"
    }
  }
};

/**
 * Heading component
 */
function Heading(_ref) {
  var children = _ref.children;
  var level = _ref.level;
  var size = _ref.size;
  var weight = _ref.weight;
  var importance = _ref.importance;
  var tracking = _ref.tracking;
  var truncate = _ref.truncate;
  var caps = _ref.caps;
  var override = _ref.override;

  var Component = "h" + level;
  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (weight) {
    style.push(styles.weight[weight]);
  }

  if (importance) {
    style.push(styles.importance[importance]);
  }

  if (tracking) {
    style.push(styles.tracking[tracking]);
  }

  if (truncate) {
    style.push(styles.variant.truncate);
  }

  if (caps) {
    style.push(styles.variant.caps);
  }

  if (override) {
    style.push(override);
  }

  return _react2.default.createElement(
    Component,
    {
      className: "Heading",
      style: style
    },
    children
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * Declares the font size of the heading
   */
  size: _react2.default.PropTypes.oneOf(["huge", "large", "medium", "small", "tiny"]).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: _react2.default.PropTypes.oneOf(["thick", "normal", "thin"]),

  /**
   * The heading color changes based on importance
   */
  importance: _react2.default.PropTypes.oneOf(["alert", "high", "normal", "low"]),

  /**
   * Controls the letter spacing
   */
  tracking: _react2.default.PropTypes.oneOf(["", "tight", "loose"]),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   * @type {[type]}
   */
  truncate: _react2.default.PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: _react2.default.PropTypes.bool,

  /**
   * Override styles
   */
  override: _react2.default.PropTypes.object
};

Heading.defaultProps = {
  level: 2,

  size: "medium",

  weight: "normal",

  importance: "normal",

  tracking: "",

  truncate: false,

  caps: false,

  override: {}
};

Heading.styles = styles;

exports.default = (0, _radium2.default)(Heading);