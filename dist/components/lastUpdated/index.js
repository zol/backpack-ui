"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    color: _settings2.default.color.lightText,
    fontFamily: _settings2.default.font.family.miller,
    fontSize: "1.6rem",
    fontStyle: "italic",
    lineHeight: 1
  }
};

/**
 * LastUpdated component
 */
function LastUpdated(_ref) {
  var date = _ref.date;
  var editUrl = _ref.editUrl;

  return _react2.default.createElement(
    "div",
    {
      className: "LastUpdated",
      style: styles.base
    },
    _react2.default.createElement(
      "p",
      null,
      "Last updated ",
      date,
      ". ",
      editUrl && _react2.default.createElement(
        "a",
        { href: editUrl },
        "Suggest an edit."
      )
    )
  );
}

LastUpdated.propTypes = {
  /**
   * Date
   */
  date: _react2.default.PropTypes.string.isRequired,

  /**
   * Link to "suggest an edit" page
   */
  editUrl: _react2.default.PropTypes.string
};

LastUpdated.defaultProps = {
  content: "",

  editUrl: ""
};

LastUpdated.styles = styles;

exports.default = LastUpdated;