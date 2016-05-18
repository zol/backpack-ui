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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    display: "inline-block",
    fill: "currentColor",
    height: "1em",
    verticalAlign: "middle",
    width: "1em"
  },

  position: {
    inline: {
      base: {
        lineHeight: 1,
        position: "relative",
        verticalAlign: "initial"
      },
      before: {
        marginRight: ".5em"
      },
      after: {
        marginLeft: ".5em"
      }
    }
  },

  size: {
    fit: {
      height: "100%",
      width: "100%"
    },
    medium: {
      height: "1.6rem",
      width: "1.6rem"
    },
    small: {
      height: "1rem",
      width: "1rem"
    },
    tiny: {
      height: ".6rem",
      width: ".6rem"
    },
    half: {
      height: ".5em",
      width: ".5em"
    }
  },

  color: {
    blue: {
      fill: _settings2.default.color.blue
    },
    gray: {
      fill: _settings2.default.color.footerCopyright
    }
  },

  animation: {
    spin: {
      animation: "spin 500ms linear infinite"
    }
  }
};

/**
 * Icon component
 *
 * The icon component renders an inline SVG element.
 *
 * @usage
 * <Icon name="heart" size="small" />
 */
function Icon(_ref) {
  var name = _ref.name;
  var size = _ref.size;
  var inline = _ref.inline;
  var color = _ref.color;
  var label = _ref.label;
  var dimensions = _ref.dimensions;
  var animation = _ref.animation;

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (inline) {
    style.push(styles.position.inline.base, styles.position.inline[inline]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (animation) {
    style.push(styles.animation[animation]);
  }

  if (dimensions && dimensions.width) {
    style.push({
      width: dimensions.width
    });
  }

  if (dimensions && dimensions.height) {
    style.push({
      height: dimensions.height
    });
  }

  if (label) {
    return _react2.default.createElement(
      "svg",
      {
        className: "Icon",
        style: style,
        "aria-label": label
      },
      _react2.default.createElement("use", {
        xlinkHref: "#lp-icon-" + name
      })
    );
  }

  return _react2.default.createElement(
    "svg",
    {
      className: "Icon",
      style: style,
      "aria-hidden": "true"
    },
    _react2.default.createElement("use", {
      xlinkHref: "#lp-icon-" + name
    })
  );
}

Icon.propTypes = {
  /**
   * The icon name is the part after `#lp-icon-` found on the ID of each of the
   * symbols within the SVG sprite.
   */
  name: _react2.default.PropTypes.string.isRequired,

  /**
   * The style definition for each size can be found in icons.scss.
   */
  size: _react2.default.PropTypes.oneOf(["", "fit", "medium", "small", "tiny", "half"]),

  /**
   * Describes how to align the icon
   */
  inline: _react2.default.PropTypes.oneOf(["", "before", "after"]),

  /**
   * A text label to describe the icon
   */
  label: _react2.default.PropTypes.string,

  /**
   * Override the icon color
   */
  color: _react2.default.PropTypes.string,

  /**
   * Override width and height
   */
  dimensions: _react2.default.PropTypes.object,

  /**
   * Name of CSS animation to apply
   */
  animation: _react2.default.PropTypes.string
};

Icon.defaultProps = {
  name: "",

  size: "",

  inline: "",

  label: "",

  color: "",

  dimensions: {},

  animation: ""
};

Icon.styles = styles;

exports.default = (0, _radium2.default)(Icon);