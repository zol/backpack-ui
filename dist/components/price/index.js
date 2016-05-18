"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    base: {
      lineHeight: 1
    },

    tag: {
      backgroundColor: _settings.color.red,
      display: "inline-block",
      padding: ".6rem .8rem .4rem",
      textAlign: "center",
      verticalAlign: "middle"
    }
  },

  amount: {
    base: {
      display: "inline-block",
      lineHeight: 1
    },

    size: {
      small: {
        fontSize: "1.1rem"
      },
      medium: {
        fontSize: "2rem"
      },
      large: {
        fontSize: "3.6rem"
      }
    },

    weight: {
      thin: {
        fontWeight: 300
      },
      normal: {
        fontSize: 400
      },
      thick: {
        fontSize: 600
      }
    },

    emphasized: {
      color: _settings.color.red,
      fontSize: "3.6rem",
      fontWeight: 300
    },

    tag: {
      color: _settings.color.white,
      fontSize: "1.2rem",
      fontWeight: 600
    },

    thin: {
      fontSize: "2rem",
      fontWeight: 300
    }
  },

  rate: {
    base: (_base = {
      color: "rgba(" + (0, _color.rgb)(_settings.color.darkGray) + ", .4)",
      fontSize: "1.1rem",
      fontWeight: 600,
      letterSpacing: ".06rem",
      lineHeight: 1,
      textTransform: "uppercase"

    }, _defineProperty(_base, "@media (max-width: " + _settings.media.max["768"] + ")", {
      marginTop: ".3rem"
    }), _defineProperty(_base, "@media (min-width: " + _settings.media.min["768"] + ")", {
      display: "inline-block"
    }), _base)
  },

  currencySymbol: {
    base: {},

    emphasized: {
      fontSize: "1.8rem",
      top: "-1.2rem"
    }
  }
};

/**
 * A standalone price for an item
 */
var Price = function Price(_ref) {
  var amount = _ref.amount;
  var rate = _ref.rate;
  var currency = _ref.currency;
  var emphasized = _ref.emphasized;
  var thin = _ref.thin;
  var tag = _ref.tag;

  var style = {
    container: [styles.container.base],
    amount: [styles.amount.base],
    rate: [styles.rate.base],
    currencySymbol: [styles.currencySymbol.base]
  };

  if (emphasized) {
    style.container.push(styles.container.emphasized);
    style.amount.push(styles.amount.emphasized);
    style.currencySymbol.push(styles.currencySymbol.emphasized);
  }

  if (thin) {
    style.amount.push(styles.amount.thin);
  }

  if (tag) {
    style.container.push(styles.container.tag);
    style.amount.push(styles.amount.tag);
  }

  var currencySymbol = {
    USD: "$"
  };

  var Rate = void 0;

  if (rate) {
    Rate = _react2.default.createElement(
      "div",
      {
        className: "Price-rate",
        style: style.rate
      },
      rate
    );
  }

  var CurrencySymbolComponent = emphasized ? _react2.default.createElement(
    "sup",
    {
      className: "Price-symbol",
      style: style.currencySymbol
    },
    currencySymbol[currency]
  ) : "" + currencySymbol[currency];

  return _react2.default.createElement(
    "div",
    {
      className: "Price clearfix",
      style: style.container
    },
    _react2.default.createElement(
      "div",
      {
        className: "Price-amount",
        style: style.amount
      },
      CurrencySymbolComponent,
      amount
    ),
    Rate
  );
};

Price.propTypes = {
  /**
   * The price amount
   */
  amount: _react2.default.PropTypes.number.isRequired,

  /**
   * The rate for the price, i.e., "per night"
   */
  rate: _react2.default.PropTypes.string,

  /**
   * The currency in which the price is displayed in
   */
  currency: _react2.default.PropTypes.string,

  /**
   * Change the color to show emphasis
   */
  emphasized: _react2.default.PropTypes.bool,

  /**
   * Render the price with a thinner font weight and slightly larger size
   */
  thin: _react2.default.PropTypes.bool,

  /**
   * Render the price with a tag-like style
   */
  tag: _react2.default.PropTypes.bool
};

Price.defaultProps = {
  amount: 0,

  rate: "",

  currency: "USD",

  emphasized: false,

  thin: false,

  tag: false
};

Price.styles = styles;

exports.default = (0, _radium2.default)(Price);