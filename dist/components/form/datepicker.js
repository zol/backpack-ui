"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePicker(_ref) {
  var id = _ref.id;
  var name = _ref.name;
  var required = _ref.required;
  var size = _ref.size;
  var theme = _ref.theme;

  var style = [_styles2.default.base];

  style.push(_styles2.default.element.input.base);

  if (size) {
    style.push(_styles2.default.size[size]);
    style.push(_styles2.default.element.input.size[size]);
  }

  if (theme) {
    style.push(_styles2.default.theme[theme]);
    style.push(_styles2.default.element.input.theme[theme]);
  }

  return _react2.default.createElement("input", {
    style: style,
    type: "text",
    id: id,
    name: name || id,
    required: required
  });
}

DatePicker.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,

  name: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  size: _react2.default.PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),

  theme: _react2.default.PropTypes.oneOf(["base", "light", "dark"])
};

DatePicker.defaultProps = {
  id: "",

  name: "",

  required: false,

  size: "medium",

  theme: "base"
};

exports.default = (0, _radium2.default)(DatePicker);