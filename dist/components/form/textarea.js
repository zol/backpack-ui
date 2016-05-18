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

function TextArea(_ref) {
  var id = _ref.id;
  var name = _ref.name;
  var value = _ref.value;
  var placeholder = _ref.placeholder;
  var required = _ref.required;
  var rows = _ref.rows;
  var cols = _ref.cols;
  var size = _ref.size;
  var theme = _ref.theme;
  var onChange = _ref.onChange;

  var style = [_styles2.default.base];

  style.push(_styles2.default.element.textarea.base);

  if (size) {
    style.push(_styles2.default.size[size]);
    style.push(_styles2.default.element.textarea.size[size]);
  }

  if (theme) {
    style.push(_styles2.default.theme[theme]);
    style.push(_styles2.default.element.textarea.theme[theme]);
  }

  return _react2.default.createElement("textarea", {
    style: style,
    id: id,
    name: name || id,
    defaultValue: value,
    placeholder: placeholder,
    rows: rows,
    cols: cols,
    required: required,
    onChange: onChange
  });
}

TextArea.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,

  name: _react2.default.PropTypes.string,

  value: _react2.default.PropTypes.string,

  placeholder: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  rows: _react2.default.PropTypes.number,

  cols: _react2.default.PropTypes.number,

  size: _react2.default.PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),

  theme: _react2.default.PropTypes.oneOf(["base", "light", "dark"]),

  onChange: _react2.default.PropTypes.func
};

TextArea.defaultProps = {
  id: "",

  name: "",

  value: "",

  placeholder: "",

  required: false,

  rows: 10,

  cols: 0,

  size: "medium",

  theme: "base",

  onChange: null
};

exports.default = (0, _radium2.default)(TextArea);