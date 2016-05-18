"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {},

    sidebar: {
      marginTop: "1.4rem"
    }
  },

  image: {
    base: {
      display: "block"
    },

    sidebar: {
      height: "auto",
      maxHeight: "9rem",
      maxWidth: "27.8rem",
      width: (0, _grid.percentage)("27.8rem", "" + (0, _grid.span)(3, "static"))
    }
  },

  attribution: {
    base: {
      color: _settings.color.lightText,
      display: "inline-block",
      fontSize: ".9rem",
      letterSpacing: ".1px",
      marginTop: ".4rem"
    },

    link: {
      color: "currentColor"
    }
  }
};

/**
 * Generate a static map
 */
function StaticMap(_ref) {
  var token = _ref.token;
  var location = _ref.location;
  var size = _ref.size;
  var sidebar = _ref.sidebar;

  var baseUrl = "http://api.tiles.mapbox.com/v4/lonelyplanet.04cf7895";
  var customMarkerUrl = "https://assets.staticlp.com/assets/mapPin-primary-small.png";
  var customMarker = "url-" + encodeURIComponent(customMarkerUrl) + "(" + location + ")";
  var url = baseUrl + "/" + customMarker + "/" + location + ",14/" + size + ".jpg70?access_token=" + token;

  var style = {
    container: [styles.container.base],
    image: [styles.image.base]
  };

  if (sidebar) {
    style.container.push(styles.container.sidebar);
    style.image.push(styles.image.sidebar);
  }

  return _react2.default.createElement(
    "div",
    {
      className: "StaticMap",
      style: style.container
    },
    _react2.default.createElement("img", {
      className: "StaticMap-image",
      style: style.image,
      src: url
    }),
    _react2.default.createElement(
      "small",
      {
        className: "StaticMap-attribution",
        style: styles.attribution.base
      },
      "© ",
      _react2.default.createElement(
        "a",
        { style: styles.attribution.link, href: "https://www.mapbox.com/map-feedback/" },
        "Mapbox"
      ),
      " © ",
      _react2.default.createElement(
        "a",
        { style: styles.attribution.link, href: "http://www.openstreetmap.org/copyright" },
        "OpenStreetMap contributors"
      )
    )
  );
}

StaticMap.propTypes = {
  /**
   * Mapbox API token
   */
  token: _react2.default.PropTypes.string.isRequired,

  /**
   * Location string as lontxlat
   */
  location: _react2.default.PropTypes.string.isRequired,

  /**
   * Size for the static image in width x height
   * Defaults to 640x480
   */
  size: _react2.default.PropTypes.string,

  /**
   * If the static map is located within the sidebar (POI)
   */
  sidebar: _react2.default.PropTypes.bool
};

var token = "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6ImNpajYyZW1iMjAwO" + "G51bWx2YW50ejNmN2IifQ.neyeEEzBkaNKcKUzCe3s2Q";
StaticMap.defaultProps = {
  token: token,

  location: "",

  size: "640x480",

  sidebar: false
};

StaticMap.styles = styles;

exports.default = (0, _radium2.default)(StaticMap);