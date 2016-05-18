"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _price = require("../price");

var _price2 = _interopRequireDefault(_price);

var _button = require("../button");

var _button2 = _interopRequireDefault(_button);

var _input = require("../form/input");

var _input2 = _interopRequireDefault(_input);

var _numberInput = require("../form/numberInput");

var _numberInput2 = _interopRequireDefault(_numberInput);

var _select = require("../form/select");

var _select2 = _interopRequireDefault(_select);

var _inputGroup = require("../form/inputGroup");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _settings = require("rizzo-next/sass/settings.json");

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  price: {
    base: {
      marginBottom: "2.7rem"
    }
  },

  form: {
    base: {
      position: "relative",
      marginBottom: (0, _grid.gutter)("static"),
      width: "100%"
    }
  },

  fieldset: {
    base: _defineProperty({
      marginTop: "2rem"

    }, "@media (min-width: " + _settings.media.min["768"] + ")", {
      marginTop: (0, _grid.gutter)("static", 12, 0.5)
    }),

    notFirst: _defineProperty({}, "@media (min-width: " + _settings.media.min["768"] + ")", {
      marginLeft: (0, _grid.gutter)("fluid", 3, 0.5)
    }),

    size: {
      small: _defineProperty({}, "@media (min-width: " + _settings.media.min["768"] + ")", {
        width: (0, _grid.subtract)([(0, _grid.span)("1 of 3"), (0, _grid.gutter)("fluid", 3)])
      }),
      medium: _defineProperty({}, "@media (min-width: " + _settings.media.min["768"] + ")", {
        width: (0, _grid.add)([(0, _grid.span)("1 of 3"), (0, _grid.gutter)("fluid", 3)])
      }),
      large: _defineProperty({}, "@media (min-width: " + _settings.media.min["768"] + ")", {
        width: (0, _grid.add)([(0, _grid.span)("2 of 3"), (0, _grid.gutter)("fluid", 3), (0, _grid.gutter)("fluid", 3, 0.5)])
      }),
      full: {
        width: "100%"
      }
    }
  },

  button: {
    base: {
      marginTop: (0, _grid.gutter)("static")
    }
  }
};

function Booking(_ref) {
  var _mediaQueries;

  var type = _ref.type;
  var price = _ref.price;

  var checkInValue = (0, _moment2.default)().add(7, "d").format("D MMM YYYY");
  var checkOutValue = (0, _moment2.default)().add(8, "d").format("D MMM YYYY");

  var timeOptions = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];

  var PriceComponent = price && price.amount ? _react2.default.createElement(
    "div",
    {
      className: "Booking-price",
      style: styles.price.base
    },
    _react2.default.createElement(_price2.default, {
      amount: price.amount,
      currency: price.currency,
      rate: price.rate,
      emphasized: true
    })
  ) : null;

  var FieldLayout = {
    activity: _react2.default.createElement(
      "div",
      { className: "Booking-fieldLayout clearfix" },
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Travel on",
            id: "activityDate"
          },
          _react2.default.createElement(_input2.default, {
            type: "text",
            id: "activityDate",
            defaultValue: checkInValue,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      ),
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "People",
            id: "activityPeople"
          },
          _react2.default.createElement(_numberInput2.default, {
            id: "activityPeople",
            min: 1,
            max: 4,
            value: 2,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      )
    ),

    hotel: _react2.default.createElement(
      "div",
      { className: "Booking-fieldLayout clearfix" },
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Check in",
            id: "hotelCheckInDate",
            size: "half"
          },
          _react2.default.createElement(_input2.default, {
            type: "text",
            id: "hotelCheckInDate",
            defaultValue: checkInValue,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        ),
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Check out",
            id: "hotelCheckOutDate",
            size: "half",
            removeBorder: true
          },
          _react2.default.createElement(_input2.default, {
            type: "text",
            id: "hotelCheckOutDate",
            defaultValue: checkOutValue,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      ),
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Guests",
            id: "hotelGuests"
          },
          _react2.default.createElement(_numberInput2.default, {
            id: "hotelGuests",
            min: 1,
            max: 4,
            value: 2,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      )
    ),

    restaurant: _react2.default.createElement(
      "div",
      { className: "Booking-fieldLayout clearfix" },
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Day",
            id: "restaurantDay",
            size: "half"
          },
          _react2.default.createElement(_input2.default, {
            type: "text",
            id: "restaurantDay",
            defaultValue: checkInValue,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        ),
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "Time",
            id: "restaurantTime",
            size: "half",
            removeBorder: true
          },
          _react2.default.createElement(_select2.default, {
            id: "restaurantTime",
            defaultValue: "7:00 PM",
            options: timeOptions,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      ),
      _react2.default.createElement(
        "fieldset",
        {
          className: "Booking-fieldset",
          style: styles.fieldset.base
        },
        _react2.default.createElement(
          _inputGroup2.default,
          {
            label: "People",
            id: "restaurantPeople"
          },
          _react2.default.createElement(_numberInput2.default, {
            id: "restaurantPeople",
            min: 1,
            max: 4,
            value: 2,
            size: "huge",
            theme: "inputGroup",
            required: true,
            fill: true
          })
        )
      )
    )
  };

  var buttonClick = {
    activity: null,
    hotel: null,
    restaurant: null
  };

  var buttonLabel = {
    activity: "Check prices",
    hotel: "Reserve",
    restaurant: "Find a table"
  };

  return _react2.default.createElement(
    "div",
    { className: "Booking" },
    _react2.default.createElement(_radium.Style, {
      scopeSelector: ".Booking",
      rules: {
        ".Price": {
          position: "relative",
          width: "100%"
        },

        ".Price-amount": {},

        ".Price-rate": {},

        mediaQueries: (_mediaQueries = {}, _defineProperty(_mediaQueries, "(max-width: " + _settings.media.max["768"] + ")", {
          ".Price": {
            textAlign: "center"
          }
        }), _defineProperty(_mediaQueries, "(min-width: " + _settings.media.min["768"] + ")", {
          ".Price": {
            borderBottom: ".1rem solid",
            borderBottomColor: _settings.color.gray,
            paddingBottom: ".1rem"
          },

          ".Price-rate": {
            bottom: ".9rem",
            position: "absolute",
            right: 0
          }
        }), _mediaQueries)
      }
    }),
    PriceComponent,
    _react2.default.createElement(
      "form",
      {
        className: "Booking-form clearfix",
        style: styles.form.base
      },
      FieldLayout[type],
      _react2.default.createElement(
        "div",
        {
          className: "Booking-button",
          style: styles.button.base
        },
        _react2.default.createElement(
          _button2.default,
          {
            height: "tall",
            rounded: false,
            full: true,
            onClick: buttonClick[type]
          },
          buttonLabel[type]
        )
      )
    )
  );
}

Booking.propTypes = {
  /**
   * Type of thing to be booked
   */
  type: _react2.default.PropTypes.oneOf(["activity", "hotel", "restaurant"]),

  /**
   * Price of thing to be booked
   */
  price: _react2.default.PropTypes.object
};

Booking.defaultProps = {
  type: "",

  price: {}
};

Booking.styles = styles;

exports.default = (0, _radium2.default)(Booking);