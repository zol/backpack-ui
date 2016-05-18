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

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _price = require("../price");

var _price2 = _interopRequireDefault(_price);

var _bullet2 = require("../decoration/bullet");

var _bullet3 = _interopRequireDefault(_bullet2);

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {},

  elements: {
    image: {
      base: {
        display: "block",
        marginBottom: (0, _grid.gutter)("static"),
        width: "100%"
      }
    },

    content: {
      base: {
        position: "relative"
      }
    },

    details: {
      base: (_base = {
        color: _settings.color.text,
        fontSize: "1.1rem",
        lineHeight: 1,
        textTransform: "uppercase"

      }, _defineProperty(_base, "@media (max-width: " + _settings.media.max["480"] + ")", {
        display: "inline-block"
      }), _defineProperty(_base, "@media (min-width: " + _settings.media.min["480"] + ")", {
        marginTop: ".7rem"
      }), _base),

      list: _defineProperty({}, "@media (max-width: " + _settings.media.max["480"] + ")", {
        display: "inline-block"
      }),

      item: {
        display: "inline-block"
      },

      bullet: _defineProperty({
        display: "inline-block"

      }, "@media (min-width: " + _settings.media.min["480"] + ")", {
        display: "none"
      })
    }
  }
};

function RelatedTour(_ref) {
  var _mediaQueries;

  var title = _ref.title;
  var slug = _ref.slug;
  var image = _ref.image;
  var price = _ref.price;
  var tripLength = _ref.tripLength;
  var destination = _ref.destination;
  var reviews = _ref.reviews;

  var Details = tripLength || destination || reviews ? _react2.default.createElement(
    "div",
    {
      className: "RelatedTour-details",
      style: styles.elements.details.base
    },
    _react2.default.createElement(
      "span",
      {
        style: styles.elements.details.bullet
      },
      _react2.default.createElement(_bullet3.default, { space: "both" })
    ),
    _react2.default.createElement(
      "ul",
      { style: styles.elements.details.list },
      tripLength && _react2.default.createElement(
        "li",
        { style: styles.elements.details.item },
        tripLength,
        _react2.default.createElement(_bullet3.default, { space: "both" })
      ),
      destination && _react2.default.createElement(
        "li",
        { style: styles.elements.details.item },
        destination,
        _react2.default.createElement(_bullet3.default, { space: "both" })
      ),
      reviews && _react2.default.createElement(
        "li",
        { style: styles.elements.details.item },
        reviews,
        " reviews"
      )
    )
  ) : null;

  return _react2.default.createElement(
    "div",
    { className: "RelatedTour" },
    _react2.default.createElement(_radium.Style, {
      scopeSelector: ".RelatedTour",
      rules: {
        ".Price-amount": {
          color: _settings.color.red,
          fontSize: "1.1rem"
        },

        mediaQueries: (_mediaQueries = {}, _defineProperty(_mediaQueries, "(max-width: " + _settings.media.max["480"] + ")", {
          ".Price": {
            display: "inline-block"
          },

          ".Price-amount": {
            fontWeight: 600
          }
        }), _defineProperty(_mediaQueries, "(min-width: " + _settings.media.min["480"] + ")", {
          ".Price": {
            position: "absolute",
            right: 0,
            top: ".8rem"
          },

          ".Price-amount": {
            color: "" + _settings.color.darkGray,
            fontSize: "2.4rem"
          }
        }), _mediaQueries)
      }
    }),
    _react2.default.createElement(
      "a",
      {
        className: "RelatedTour-image",
        style: styles.elements.image.base,
        href: slug
      },
      _react2.default.createElement("img", {
        src: image,
        alt: ""
      })
    ),
    _react2.default.createElement(
      "div",
      {
        className: "RelatedTour-content clearfix",
        style: styles.elements.content.base
      },
      _react2.default.createElement(
        _heading2.default,
        {
          level: 3,
          size: "medium",
          importance: "high",
          weight: "thick",
          truncate: true,
          tracking: "tight"
        },
        _react2.default.createElement(
          "a",
          { href: slug },
          title
        )
      ),
      _react2.default.createElement(_price2.default, {
        amount: price.amount,
        currency: price.currency
      }),
      Details
    )
  );
}

RelatedTour.propTypes = {
  /**
   * The name of the tour
   */
  title: _react2.default.PropTypes.string.isRequired,

  /**
   * The URL of the tour
   */
  slug: _react2.default.PropTypes.string.isRequired,

  /**
   * The image of the tour
   */
  image: _react2.default.PropTypes.string.isRequired,

  /**
   * The price of the tour, containing currency and amount
   */
  price: _react2.default.PropTypes.object.isRequired,

  /**
   * The length of the trip, usually in days i.e., "14 days"
   */
  tripLength: _react2.default.PropTypes.string,

  /**
   * The main destination of the tour; can be something like "London to Ireland"
   */
  destination: _react2.default.PropTypes.string,

  /**
   * The number of reviews for the tour
   */
  reviews: _react2.default.PropTypes.number
};

RelatedTour.defaultProps = {
  title: "",

  slug: "",

  image: "",

  price: {},

  tripLength: "",

  destination: "",

  reviews: 0
};

RelatedTour.styles = styles;

exports.default = (0, _radium2.default)(RelatedTour);