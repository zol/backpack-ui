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

function Input(_ref) {
  var type = _ref.type;
  var id = _ref.id;
  var name = _ref.name;
  var defaultValue = _ref.defaultValue;
  var min = _ref.min;
  var max = _ref.max;
  var placeholder = _ref.placeholder;
  var required = _ref.required;
  var size = _ref.size;
  var theme = _ref.theme;
  var fill = _ref.fill;

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

  if (fill) {
    style.push(_styles2.default.fill);
  }

  var props = {
    style: style,
    type: type,
    id: id,
    name: name || id
  };

  props.defaultValue = defaultValue || null;
  props.placeholder = placeholder || null;
  props.required = required || null;

  if (type === "number") {
    props.min = min;
    props.max = max;
  }

  return _react2.default.createElement("input", props);
}

Input.propTypes = {
  type: _react2.default.PropTypes.oneOf(["date", "time", "email", "file", "number", "password", "search", "tel", "text", "url", "radio", "checkbox"]).isRequired,

  id: _react2.default.PropTypes.string.isRequired,

  name: _react2.default.PropTypes.string,

  defaultValue: _react2.default.PropTypes.string,

  min: _react2.default.PropTypes.string,

  max: _react2.default.PropTypes.string,

  placeholder: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  size: _react2.default.PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),

  theme: _react2.default.PropTypes.oneOf(["base", "light", "dark", "inputGroup"]),

  /**
   * Fills the width of the parent
   */
  fill: _react2.default.PropTypes.bool
};

Input.defaultProps = {
  type: "text",

  id: "",

  name: "",

  defaultValue: "",

  min: "",

  max: "",

  placeholder: "",

  required: false,

  size: "medium",

  theme: "base",

  fill: false
};

Input.styles = _styles2.default;

exports.default = (0, _radium2.default)(Input);