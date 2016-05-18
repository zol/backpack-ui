"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _color = require("color");

var _color2 = _interopRequireDefault(_color);

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    fontSize: "1.3rem",
    fontWeight: 600,
    lineHeight: 1,
    textTransform: "uppercase",

    ":hover": {
      color: (0, _color2.default)(_settings2.default.color.blue).blacken(0.5)
    },

    ":active": {
      color: (0, _color2.default)(_settings2.default.color.blue).blacken(0.5)
    },

    ":focus": {
      color: (0, _color2.default)(_settings2.default.color.blue).blacken(0.5)
    }
  },

  size: {
    small: {
      fontSize: "1.1rem"
    }
  }
};

/**
 * MoreLink component
 *
 * @usage
 * <MoreLink href="/foo">View all tours</MoreLink>
 */
function MoreLink(_ref) {
  var href = _ref.href;
  var size = _ref.size;
  var children = _ref.children;

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  return _react2.default.createElement(
    "a",
    {
      className: "MoreLink",
      style: style,
      href: href
    },
    children,
    _react2.default.createElement(_icon2.default, {
      name: "chevron-right",
      size: "tiny",
      inline: "after"
    })
  );
}

MoreLink.propTypes = {
  /**
   * Content for the link
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * Where the link should point to
   */
  href: _react2.default.PropTypes.string.isRequired,

  /**
   * Adjusts the font size
   */
  size: _react2.default.PropTypes.oneOf(["", "small"])
};

MoreLink.defaultProps = {
  href: "",

  size: ""
};

MoreLink.styles = styles;

exports.default = (0, _radium2.default)(MoreLink);