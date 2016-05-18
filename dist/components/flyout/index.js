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
    backgroundColor: _settings2.default.color.white,
    borderRadius: ".4rem",
    boxShadow: "0 .2rem 1.3rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .2)",
    display: "inline-block",
    lineHeight: 1,
    position: "relative"
  },

  size: {
    small: {
      fontSize: "1.3rem",
      padding: "1rem 1.6rem .8rem"
    }
  },

  arrow: {
    base: {
      color: _settings2.default.color.white,
      position: "absolute"
    },

    direction: {
      up: {
        height: ".6rem",
        top: "-.6rem",
        width: "100%"
      },
      down: {
        bottom: "-.6rem",
        height: ".6rem",
        width: "100%"
      },
      left: {
        height: "100%",
        left: "-.6rem",
        width: ".6rem"
      },
      right: {
        height: "100%",
        right: "-.6rem",
        width: ".6rem"
      }
    },

    text: {
      base: {
        display: "block",
        fontSize: "9px",
        lineHeight: 1,
        position: "absolute"
      },

      direction: {
        up: {
          bottom: "-.2rem",
          left: "50%",
          marginLeft: "-.45rem",
          textShadow: "0 -.1rem .1rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .05)",
          transform: "scaleX(2)"
        },
        down: {
          left: "50%",
          marginLeft: "-.45rem",
          textShadow: "0 .1rem .1rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .05)",
          top: "-.1rem",
          transform: "scaleX(2)"
        },
        left: {
          left: "-.1rem",
          marginTop: "-.4rem",
          top: "50%",
          textShadow: "-.1rem 0 .1rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .05)",
          transform: "scaleY(2)"
        },
        right: {
          marginTop: "-.4rem",
          right: "-.1rem",
          top: "50%",
          textShadow: ".1rem 0 .1rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .05)",
          transform: "scaleY(2)"
        }
      }
    },

    center: {
      horizontal: {
        left: 0,
        marginLeft: "auto",
        marginRight: "auto",
        right: 0
      },
      vertical: {
        bottom: 0,
        marginBottom: "auto",
        marginTop: "auto",
        top: 0
      }
    }
  },

  fill: {
    display: "block",
    width: "100%"
  }
};

/**
 * Flyout component
 */
function Flyout(_ref) {
  var size = _ref.size;
  var arrow = _ref.arrow;
  var fill = _ref.fill;
  var children = _ref.children;

  var arrows = {
    up: "&#9650;",
    down: "&#9660;",
    left: "&#9668;",
    right: "&#9658;"
  };

  var style = {
    container: [styles.base],
    arrow: [styles.arrow.base],
    arrowText: [styles.arrow.text.base]
  };

  if (size) {
    style.container.push(styles.size[size]);
  }

  if (arrow) {
    style.arrow.push(styles.arrow.direction[arrow]);
    style.arrowText.push(styles.arrow.text.direction[arrow]);
  }

  if (arrow === "up" || arrow === "down") {
    style.arrow.push(styles.arrow.center.horizontal);
  }

  if (arrow === "left" || arrow === "right") {
    style.arrow.push(styles.arrow.center.vertical);
  }

  if (fill) {
    style.container.push(styles.fill);
  }

  function markup() {
    return {
      __html: arrows[arrow]
    };
  }

  return _react2.default.createElement(
    "div",
    {
      className: "Flyout",
      style: style.container
    },
    _react2.default.createElement(
      "div",
      { className: "Flyout-content" },
      children
    ),
    _react2.default.createElement(
      "div",
      {
        className: "Flyout-arrow",
        style: style.arrow
      },
      _react2.default.createElement("span", {
        style: style.arrowText,
        dangerouslySetInnerHTML: markup()
      })
    )
  );
}

Flyout.propTypes = {
  /**
   * Content for the flyout
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * Size of the flyout
   */
  size: _react2.default.PropTypes.oneOf(["small"]),

  /**
   * Position of the flyout arrow
   */
  arrow: _react2.default.PropTypes.oneOf(["up", "down", "left", "right"]),

  /**
   * Whether or not the flyout should fill its parent's width
   */
  fill: _react2.default.PropTypes.bool
};

Flyout.defaultProps = {
  size: "small",

  arrow: "down",

  fill: false
};

Flyout.styles = styles;

exports.default = (0, _radium2.default)(Flyout);