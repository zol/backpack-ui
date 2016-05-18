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

var _font = require("../../utils/font");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      color: _settings2.default.color.lightText,
      fontFamily: (0, _font.font)("miller"),
      fontSize: "1.6rem",
      fontStyle: "italic",
      lineHeight: 1
    }
  }
};

function EditLink(_ref) {
  var url = _ref.url;
  var display = _ref.display;

  var Container = display === "block" ? "div" : "span";

  return _react2.default.createElement(
    Container,
    {
      className: "EditLink",
      style: styles.container.base
    },
    _react2.default.createElement(
      "a",
      { href: url },
      "Suggest an edit"
    ),
    "."
  );
}

EditLink.propTypes = {
  url: _react2.default.PropTypes.string.isRequired,

  display: _react2.default.PropTypes.oneOf(["inline", "block"])
};

EditLink.defaultProps = {
  url: "",

  display: "block"
};

EditLink.styles = styles;

exports.default = (0, _radium2.default)(EditLink);