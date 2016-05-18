"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Rating(_ref) {
  var _ratingMap;

  var amount = _ref.amount;
  var text = _ref.text;
  var provider = _ref.provider;

  var ratingMap = (_ratingMap = {}, _defineProperty(_ratingMap, 0, "0_0"), _defineProperty(_ratingMap, 0.5, "0_5"), _defineProperty(_ratingMap, 1, "1_0"), _defineProperty(_ratingMap, 1.5, "1_5"), _defineProperty(_ratingMap, 2, "2_0"), _defineProperty(_ratingMap, 2.5, "2_5"), _defineProperty(_ratingMap, 3, "3_0"), _defineProperty(_ratingMap, 3.5, "3_5"), _defineProperty(_ratingMap, 4, "4_0"), _defineProperty(_ratingMap, 4.5, "4_5"), _defineProperty(_ratingMap, 5, "5_0"), _ratingMap);

  var label = amount ? amount + " rating" : "";

  var iconDimensions = {
    height: "1.2rem",
    width: "10rem"
  };

  var providers = {
    bookingcom: "booking.com",
    opentable: "OpenTable",
    gadventures: "G Adventures",
    viator: "Viator"
  };

  return _react2.default.createElement(
    "div",
    {
      className: "Rating",
      title: label
    },
    amount && _react2.default.createElement(_icon2.default, {
      name: "rating-" + ratingMap[amount],
      label: label,
      dimensions: iconDimensions
    }),
    text && _react2.default.createElement(
      "div",
      null,
      text
    ),
    provider && _react2.default.createElement(
      "div",
      null,
      providers[provider]
    )
  );
}

Rating.propTypes = {
  /**
   * A numeric value, 0-5
   */
  amount: _react2.default.PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),

  /**
   * A string representation of a rating
   */
  text: _react2.default.PropTypes.string,

  /**
   * If the rating comes from a third-party
   */
  provider: _react2.default.PropTypes.oneOf(["bookingcom", "opentable", "gadventures", "viator"])
};

Rating.defaultProps = {
  amount: "",

  text: "",

  provider: ""
};

exports.default = (0, _radium2.default)(Rating);