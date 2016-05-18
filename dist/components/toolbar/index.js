"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hover = {
  color: _settings.color.blue
};

var styles = {
  container: {
    base: {
      alignItems: "center",
      borderBottom: ".1rem solid " + _settings.color.gray,
      borderTop: ".1rem solid " + _settings.color.gray,
      color: _settings.color.darkGray,
      display: "flex",
      fontSize: "1.1rem",
      fontWeight: 600,
      lineHeight: 1,
      paddingBottom: "3.8rem",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem",
      paddingTop: "4rem"
    }
  },

  link: {
    base: {
      color: "currentColor",
      display: "block",
      flexGrow: 1,
      textAlign: "center",
      transition: "color 400ms",

      ":hover": hover,
      ":active": hover,
      ":focus": hover
    }
  },

  icon: {
    base: {
      fontSize: "2.1rem",
      marginBottom: "1.1rem"
    }
  }
};

/**
 * Toolbar component
 */
function Toolbar(_ref) {
  var phone = _ref.phone;
  var website = _ref.website;
  var directions = _ref.directions;

  return _react2.default.createElement(
    "div",
    {
      className: "Toolbar",
      style: styles.container.base
    },
    phone && _react2.default.createElement(
      "a",
      {
        href: "tel:",
        style: styles.link.base,
        key: "phone"
      },
      _react2.default.createElement(
        "div",
        {
          className: "Toolbar-icon",
          style: styles.icon.base
        },
        _react2.default.createElement(_icon2.default, { name: "mobile" })
      ),
      "Call"
    ),
    website && _react2.default.createElement(
      "a",
      {
        href: website,
        style: styles.link.base,
        key: "website"
      },
      _react2.default.createElement(
        "div",
        {
          className: "Toolbar-icon",
          style: styles.icon.base
        },
        _react2.default.createElement(_icon2.default, { name: "globe" })
      ),
      "Visit"
    ),
    directions && _react2.default.createElement(
      "a",
      {
        href: website,
        style: styles.link.base,
        key: "directions"
      },
      _react2.default.createElement(
        "div",
        {
          className: "Toolbar-icon",
          style: styles.icon.base
        },
        _react2.default.createElement(_icon2.default, { name: "compass" })
      ),
      "Map"
    )
  );
}

Toolbar.propTypes = {
  /**
   * Phone number for POI
   */
  phone: _react2.default.PropTypes.string,

  /**
   * Website URL for POI
   */
  website: _react2.default.PropTypes.string,

  /**
   * Address or coordinates for POI
   */
  directions: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array])
};

Toolbar.defaultProps = {
  phone: "",

  website: "",

  directions: ""
};

Toolbar.styles = styles;

exports.default = (0, _radium2.default)(Toolbar);