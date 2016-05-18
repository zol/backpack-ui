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

var _grid = require("../../utils/grid");

var _color = require("../../utils/color");

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _price = require("../price");

var _price2 = _interopRequireDefault(_price);

var _moreLink = require("../moreLink");

var _moreLink2 = _interopRequireDefault(_moreLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    base: _defineProperty({
      backgroundColor: _settings2.default.color.white,
      boxShadow: "0 0 2rem rgba(" + (0, _color.rgb)(_settings2.default.color.black) + ", .05)"

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      display: "flex",
      padding: (0, _grid.gutter)("static")
    })
  },

  content: {
    base: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
      padding: "2.5rem"
    }),

    align: {
      center: {
        alignSelf: "center"
      }
    }
  },

  heading: {
    base: {
      fontSize: "2rem",
      lineHeight: 26 / 20
    }
  },

  description: {
    base: {
      color: _settings2.default.color.text,
      fontSize: "1.4rem",
      lineHeight: 1.5,
      marginTop: "1.4rem",
      paddingRight: "4rem"
    }
  },

  image: {
    base: _defineProperty({}, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      marginRight: (0, _grid.gutter)("static")
    }),

    img: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
      width: "100%"
    })
  },

  category: {
    base: {
      color: _settings2.default.color.lightText,
      fontSize: "1.1rem",
      lineHeight: 1,
      marginBottom: ".4rem",
      textTransform: "uppercase"
    }
  },

  price: {
    base: {
      marginTop: "1.2rem"
    }
  },

  moreLink: {
    base: {
      marginTop: "1.6rem"
    }
  },

  type: {
    activity: {},

    book: {}
  }
};

function Callout(_ref) {
  var type = _ref.type;
  var heading = _ref.heading;
  var slug = _ref.slug;
  var image = _ref.image;
  var price = _ref.price;
  var description = _ref.description;
  var category = _ref.category;
  var align = _ref.align;

  var style = {
    container: [styles.container.base],
    content: [styles.content.base],
    description: [styles.description.base],
    image: [styles.image.base],
    category: [styles.category.base],
    price: [styles.price.base],
    moreLink: [styles.moreLink.base]
  };

  if (align) {
    style.content.push(styles.content.align[align]);
  }

  return _react2.default.createElement(
    "div",
    {
      className: "Callout",
      style: style.container,
      "data-type": type
    },
    _react2.default.createElement(
      "div",
      {
        className: "Callout-image",
        style: style.image
      },
      _react2.default.createElement("img", {
        style: styles.image.img,
        src: image,
        alt: ""
      })
    ),
    _react2.default.createElement(
      "div",
      {
        className: "Callout-content",
        style: style.content
      },
      category && _react2.default.createElement(
        "div",
        { style: style.category },
        category,
        " ",
        type
      ),
      _react2.default.createElement(
        _heading2.default,
        {
          size: "medium",
          weight: "thick",
          override: styles.heading.base
        },
        heading
      ),
      price && price.amount && _react2.default.createElement(
        "div",
        {
          className: "Callout-price",
          style: style.price
        },
        _react2.default.createElement(_price2.default, {
          amount: price.amount,
          currency: price.currency,
          thin: true
        })
      ),
      description && _react2.default.createElement(
        "p",
        { style: style.description },
        description
      ),
      _react2.default.createElement(
        "div",
        {
          className: "Callout-moreLink",
          style: style.moreLink
        },
        _react2.default.createElement(
          _moreLink2.default,
          {
            href: slug,
            size: "small"
          },
          "Learn more"
        )
      )
    )
  );
}

Callout.propTypes = {
  type: _react2.default.PropTypes.oneOf(["activity", "book"]).isRequired,

  heading: _react2.default.PropTypes.string.isRequired,

  slug: _react2.default.PropTypes.string.isRequired,

  image: _react2.default.PropTypes.string.isRequired,

  price: _react2.default.PropTypes.object,

  description: _react2.default.PropTypes.string,

  category: _react2.default.PropTypes.string,

  align: _react2.default.PropTypes.oneOf(["", "center"])
};

Callout.defaultProps = {
  type: "",

  heading: "",

  slug: "",

  image: "",

  price: {},

  description: "",

  category: "",

  align: ""
};

Callout.styles = styles;

exports.default = (0, _radium2.default)(Callout);