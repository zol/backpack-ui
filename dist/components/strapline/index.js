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

var _font = require("../../utils/font");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    fontFamily: (0, _font.font)("miller"),
    fontSize: "3rem",
    fontStyle: "italic"
  },

  size: {
    tiny: {
      fontSize: "1.4rem",
      letterSpacing: ".4px",
      lineHeight: 1
    },
    small: {
      fontSize: "1.6rem",
      letterSpacing: ".4px",
      lineHeight: 21 / 16
    }
  },

  parent: {
    masthead: {
      letterSpacing: ".1rem"
    }
  },

  color: {
    white: {
      color: _settings2.default.color.white
    },
    gray: {
      color: "rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .4)"
    }
  }
};

/**
 * Strapline component
 */
function Strapline(_ref) {
  var children = _ref.children;
  var size = _ref.size;
  var parent = _ref.parent;
  var color = _ref.color;

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (parent) {
    style.push(styles.parent[parent]);
  }

  return _react2.default.createElement(
    "div",
    {
      className: "Strapline",
      style: style
    },
    children
  );
}

Strapline.propTypes = {
  /**
   * Text for the strapline
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * Declares the font size
   */
  size: _react2.default.PropTypes.oneOf(["", "tiny", "small"]),

  /**
   * Adjusts the font color
   */
  color: _react2.default.PropTypes.oneOf(["", "white", "gray"]),

  /**
   * Add a parent identifier
   */
  parent: _react2.default.PropTypes.oneOf(["", "masthead", "pageHeader"])
};

Strapline.defaultProps = {
  size: "",

  color: "",

  parent: ""
};

Strapline.styles = styles;

exports.default = (0, _radium2.default)(Strapline);