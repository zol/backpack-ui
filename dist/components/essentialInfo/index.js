"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _sidebarSection = require("../sidebarSection");

var _sidebarSection2 = _interopRequireDefault(_sidebarSection);

var _rating = require("../rating");

var _rating2 = _interopRequireDefault(_rating);

var _staticMap = require("../staticMap");

var _staticMap2 = _interopRequireDefault(_staticMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EssentialInfo(_ref) {
  var poi = _ref.poi;
  var place = _ref.place;
  var mobile = _ref.mobile;

  var showContact = poi.url || poi.email || poi.telephone;
  var showMap = poi.address.street || place.attributes.name || poi.location.coordinates;

  var headings = {
    rating: {
      title: "Rating",
      icon: "star"
    },
    duration: {
      title: "Duration",
      icon: "clock"
    },
    price: {
      title: "Price",
      icon: "price"
    },
    hours: {
      title: "Hours",
      icon: "clock"
    },
    contact: {
      title: "Contact",
      icon: "globe"
    },
    address: {
      title: "Address",
      icon: "pin"
    },
    convenience: {
      title: "Convenience",
      icon: "guest-services"
    }
  };

  return _react2.default.createElement(
    "div",
    { className: "EssentialInfo" },
    poi.rating && _react2.default.createElement(
      _sidebarSection2.default,
      headings.rating,
      _react2.default.createElement(_rating2.default, {
        amount: poi.rating
      })
    ),
    poi.duration && _react2.default.createElement(
      _sidebarSection2.default,
      headings.duration,
      poi.duration
    ),
    poi.price_string && _react2.default.createElement(
      _sidebarSection2.default,
      headings.price,
      poi.price_string
    ),
    poi.hours_string && _react2.default.createElement(
      _sidebarSection2.default,
      headings.hours,
      poi.hours_string
    ),
    !mobile && showContact && _react2.default.createElement(
      _sidebarSection2.default,
      _extends({}, headings.contact, { scopedStyles: true }),
      _react2.default.createElement(
        "ul",
        null,
        poi.url && _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "" + poi.url },
            poi.url
          )
        ),
        poi.email && _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "mailto:" + poi.email },
            poi.email
          )
        ),
        typeof poi.telephone === "string" && _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "tel:" + poi.telephone },
            poi.telephone
          )
        ),
        _typeof(poi.telephone) === "object" && Object.keys(poi.telephone).map(function (t) {
          return _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "tel:" + poi.telephone[t] },
              poi.telephone[t]
            )
          );
        })
      )
    ),
    showMap && _react2.default.createElement(
      _sidebarSection2.default,
      headings.address,
      poi.address.street && _react2.default.createElement(
        "div",
        null,
        poi.address.street
      ),
      place.attributes.name && _react2.default.createElement(
        "div",
        null,
        place.attributes.name
      ),
      !mobile && poi.location.coordinates && _react2.default.createElement(_staticMap2.default, {
        location: poi.location.coordinates.join(","),
        size: "278x90",
        sidebar: true
      })
    )
  );
}

EssentialInfo.propTypes = {
  /**
   * POI data
   */
  poi: _react2.default.PropTypes.object.isRequired,

  /**
   * Place data for POI
   */
  place: _react2.default.PropTypes.object.isRequired,

  /**
   * Whether or not the layout should be formatted for mobile screen sizes
   */
  mobile: _react2.default.PropTypes.bool.isRequired
};

EssentialInfo.defaultProps = {
  poi: {},

  place: {},

  mobile: true
};

exports.default = EssentialInfo;