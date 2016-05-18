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
  base: {
    color: _settings2.default.color.blue
  },
  blue: {
    color: _settings2.default.color.blue
  }
};

var styles = {
  base: {
    appearance: "none",
    backgroundColor: _settings2.default.color.white,
    border: 0,
    borderRadius: "50%",
    cursor: "pointer",
    display: "inline-block",
    fontSize: ".9rem",
    lineHeight: 1,
    outline: "none",
    transition: "color 400ms, box-shadow 400ms",

    ":hover": hoverState.base,
    ":focus": hoverState.base,
    ":active": hoverState.base
  },

  size: {
    small: {
      height: "3rem",
      width: "3rem"
    },
    medium: {
      height: "4rem",
      width: "4rem"
    }
  },

  shadow: {
    loose: {
      boxShadow: "0 .2rem .8rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .1)"
    },
    tight: {
      boxShadow: "0 0 .4rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .16)"
    }
  },

  color: {
    blue: {
      color: _settings2.default.color.blue,

      ":hover": hoverState.blue,
      ":focus": hoverState.blue,
      ":active": hoverState.blue
    }
  },

  align: {
    base: {
      position: "absolute"
    },
    vertical: {
      bottom: 0,
      marginBottom: "auto",
      marginTop: "auto",
      top: 0
    },
    horizontal: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      right: 0
    }
  },

  direction: {
    up: {
      base: {
        top: 0
      },

      offset: {
        small: {
          top: "-1.5rem"
        },
        medium: {
          top: "-2rem"
        }
      }
    },
    down: {
      base: {
        bottom: 0
      },

      offset: {
        small: {
          bottom: "-1.5rem"
        },
        medium: {
          bottom: "-2rem"
        }
      }
    },
    left: {
      base: {
        left: 0
      },

      offset: {
        small: {
          left: "-1.5rem"
        },
        medium: {
          left: "-2rem"
        }
      }
    },
    right: {
      base: {
        right: 0
      },

      offset: {
        small: {
          right: "-1.5rem"
        },
        medium: {
          right: "-2rem"
        }
      }
    }
  }
};

function PaginatorButton(_ref) {
  var direction = _ref.direction;
  var size = _ref.size;
  var shadow = _ref.shadow;
  var arrow = _ref.arrow;
  var color = _ref.color;
  var align = _ref.align;
  var offset = _ref.offset;
  var onClick = _ref.onClick;

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (shadow) {
    style.push(styles.shadow[shadow]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (align) {
    style.push(styles.align.base, styles.align[align], offset ? styles.direction[direction].offset[size] : styles.direction[direction].base);
  }

  var iconName = arrow + "-" + direction;

  var label = direction === "up" || direction === "left" ? "Previous" : "Next";

  return _react2.default.createElement(
    "button",
    {
      className: "PaginatorButton",
      style: style,
      title: label,
      onClick: onClick
    },
    _react2.default.createElement(_icon2.default, {
      name: iconName,
      label: label
    })
  );
}

PaginatorButton.propTypes = {
  /**
   * Change the direction the arrow points
   */
  direction: _react2.default.PropTypes.oneOf(["up", "down", "left", "right"]).isRequired,

  /**
   * Set the size of the button
   */
  size: _react2.default.PropTypes.oneOf(["small", "medium"]),

  /**
   * Change the shadow
   */
  shadow: _react2.default.PropTypes.oneOf(["loose", "tight"]),

  /**
   * Change the arrow icon type
   */
  arrow: _react2.default.PropTypes.oneOf(["chevron", "triangle"]),

  /**
   * Change the color of the icon
   */
  color: _react2.default.PropTypes.oneOf(["", "blue"]),

  /**
   * Position the button absolutely and align it
   */
  align: _react2.default.PropTypes.oneOf(["", "horizontal", "vertical"]),

  /**
   * Offset the button when positioned absolutely; must be used with align
   */
  offset: _react2.default.PropTypes.bool,

  /**
   * Function to run when the button is clicked
   */
  onClick: _react2.default.PropTypes.func
};

PaginatorButton.defaultProps = {
  direction: "up",

  size: "medium",

  shadow: "loose",

  arrow: "chevron",

  color: "",

  align: "",

  offset: false,

  onClick: null
};

PaginatorButton.styles = styles;

exports.default = (0, _radium2.default)(PaginatorButton);