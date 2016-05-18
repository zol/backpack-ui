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

var _bookmark = require("../bookmark");

var _bookmark2 = _interopRequireDefault(_bookmark);

var _bullet = require("../decoration/bullet");

var _bullet2 = _interopRequireDefault(_bullet);

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      display: "flex",
      position: "relative"
    }
  },

  image: {
    base: {
      display: "block",
      height: "auto",
      float: "left",
      marginRight: _settings2.default.layout.gutter,
      width: "8rem"
    }
  },

  content: {
    base: {
      alignSelf: "center",
      float: "left"
    }
  },

  details: {
    base: {
      color: "rgba(" + (0, _color.rgb)(_settings2.default.color.text) + ", .5)",
      fontSize: "1.1rem",
      lineHeight: 1,
      marginTop: ".7rem",
      textTransform: "uppercase"
    },

    item: {
      display: "inline-block"
    }
  },

  heading: {
    base: {
      color: _settings2.default.color.darkGray,
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }
};

/**
 * Nearby map content module
 */
function Place(_ref) {
  var title = _ref.title;
  var slug = _ref.slug;
  var type = _ref.type;
  var category = _ref.category;
  var image = _ref.image;
  var bookmark = _ref.bookmark;
  var coords = _ref.coords;
  var distanceToNearby = _ref.distanceToNearby;

  var measurement = "metric";

  var showDistance = distanceToNearby && distanceToNearby[measurement];

  return _react2.default.createElement(
    "div",
    {
      className: "Place clearfix",
      "data-type": type,
      "data-lat": coords.lat,
      "data-long": coords.long
    },
    _react2.default.createElement(
      "a",
      {
        style: styles.container.base,
        href: slug
      },
      _react2.default.createElement("img", {
        className: "Place-image",
        style: styles.image.base,
        src: image,
        alt: ""
      }),
      _react2.default.createElement(
        "div",
        {
          className: "Place-content",
          style: styles.content.base
        },
        _react2.default.createElement(
          "h3",
          {
            className: "Place-heading",
            style: styles.heading.base
          },
          title
        ),
        _react2.default.createElement(
          "ul",
          {
            className: "Place-details",
            style: styles.details.base
          },
          _react2.default.createElement(
            "li",
            { style: styles.details.item },
            category
          ),
          showDistance && _react2.default.createElement(
            "li",
            { style: styles.details.item },
            _react2.default.createElement(_bullet2.default, { space: "both" }),
            distanceToNearby[measurement].amount,
            " ",
            distanceToNearby[measurement].unit
          )
        )
      )
    ),
    bookmark && _react2.default.createElement(_bookmark2.default, {
      size: "small",
      center: "vertical",
      align: "right",
      onClick: null
    })
  );
}

Place.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,

  slug: _react2.default.PropTypes.string.isRequired,

  type: _react2.default.PropTypes.oneOf(["", "nearby", "top", "sight", "mapSidebar", "mapMarker"]),

  category: _react2.default.PropTypes.string,

  image: _react2.default.PropTypes.string,

  bookmark: _react2.default.PropTypes.bool,

  coords: _react2.default.PropTypes.array,

  distanceToNearby: _react2.default.PropTypes.object
};

Place.defaultProps = {
  type: "",

  title: "",

  slug: "",

  category: "",

  image: "",

  bookmark: false,

  coords: [],

  distanceToNearby: {}
};

Place.styles = styles;

exports.default = (0, _radium2.default)(Place);