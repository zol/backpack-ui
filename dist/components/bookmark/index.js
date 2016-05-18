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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {
    color: "rgba(" + (0, _color.rgb)(_settings2.default.color.text) + ", .7)",
    backgroundColor: "transparent",
    display: "block"
  },

  size: {
    small: {
      fontSize: "2rem",
      height: "2rem"
    },

    large: _defineProperty({
      fontSize: "2rem",
      height: "2rem"

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      fontSize: "2.4rem",
      height: "2.4rem"
    })
  },

  center: {
    horizontal: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      position: "absolute",
      right: 0
    },
    vertical: {
      bottom: 0,
      marginBottom: "auto",
      marginTop: "auto",
      position: "absolute",
      top: 0
    }
  },

  align: {
    bottom: {
      bottom: 0
    },
    left: {
      left: 0
    },
    right: {
      right: 0
    },
    top: {
      top: 0
    }
  }
};

function Bookmark(_ref) {
  var onClick = _ref.onClick;
  var size = _ref.size;
  var center = _ref.center;
  var align = _ref.align;
  var marked = _ref.marked;

  var style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (center) {
    style.push(styles.center[center]);
  }

  if (align) {
    style.push(styles.align[align]);
  }

  var BookmarkIcon = marked ? _react2.default.createElement(_icon2.default, {
    name: "bookmark",
    label: "Bookmark"
  }) : _react2.default.createElement(_icon2.default, {
    name: "bookmark-outline",
    label: "Bookmark"
  });

  return _react2.default.createElement(
    "button",
    {
      className: "Bookmark",
      style: style,
      onClick: onClick
    },
    BookmarkIcon
  );
}

Bookmark.propTypes = {
  onClick: _react2.default.PropTypes.func,

  size: _react2.default.PropTypes.oneOf(["small", "large"]),

  center: _react2.default.PropTypes.oneOf(["", "horizontal", "vertical"]),

  align: _react2.default.PropTypes.oneOf(["", "bottom", "left", "right", "top"]),

  marked: _react2.default.PropTypes.bool
};

Bookmark.defaultProps = {
  onClick: null,

  size: "small",

  center: "",

  align: "",

  marked: false
};

Bookmark.styles = styles;

exports.default = (0, _radium2.default)(Bookmark);