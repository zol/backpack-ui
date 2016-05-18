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

function Select(_ref) {
  var id = _ref.id;
  var options = _ref.options;
  var name = _ref.name;
  var defaultValue = _ref.defaultValue;
  var required = _ref.required;
  var size = _ref.size;
  var theme = _ref.theme;

  var style = [_styles2.default.base];

  style.push(_styles2.default.element.select.base);

  if (size) {
    style.push(_styles2.default.size[size]);
    style.push(_styles2.default.element.select.size[size]);
  }

  if (theme) {
    style.push(_styles2.default.theme[theme]);
    style.push(_styles2.default.element.select.theme[theme]);
  }

  return _react2.default.createElement(
    "select",
    {
      style: style,
      id: id,
      name: name || id,
      defaultValue: defaultValue,
      required: required
    },
    options.map(function (value, index) {
      return _react2.default.createElement(
        "option",
        {
          value: value,
          key: index
        },
        value
      );
    })
  );
}

Select.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,

  options: _react2.default.PropTypes.array.isRequired,

  name: _react2.default.PropTypes.string,

  defaultValue: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  size: _react2.default.PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),

  theme: _react2.default.PropTypes.oneOf(["base", "light", "dark", "inputGroup"])
};

Select.defaultProps = {
  id: "",

  options: [],

  name: "",

  defaultValue: "",

  required: false,

  size: "medium",

  theme: "base"

};

Select.styles = _styles2.default;

exports.default = (0, _radium2.default)(Select);