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

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars


var styles = {
  base: {
    color: _settings2.default.color.footerCopyright,
    fontSize: "4rem",
    opacity: 1,
    paddingBottom: (0, _grid.gutter)(),
    paddingTop: (0, _grid.gutter)(),
    textAlign: "center",
    transition: "opacity 400ms ease"
  }
};

/**
 * Loading component
 */
function Loading() {
  return _react2.default.createElement(
    "div",
    {
      className: "Loading",
      style: styles.base
    },
    _react2.default.createElement(_icon2.default, {
      name: "loading",
      animation: "spin"
    })
  );
}

Loading.styles = styles;

exports.default = (0, _radium2.default)(Loading);