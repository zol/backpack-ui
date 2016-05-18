"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base, _base3;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _strapline = require("../strapline");

var _strapline2 = _interopRequireDefault(_strapline);

var _bookmark = require("../bookmark");

var _bookmark2 = _interopRequireDefault(_bookmark);

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    base: {
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative"
    },

    alignment: {
      center: {
        textAlign: "center"
      }
    },

    contained: {
      maxWidth: (0, _grid.span)(10, "static")
    },

    underline: {
      borderBottom: ".2rem solid #dc221a",
      bottom: 0,
      content: "",
      display: "block",
      left: "0",
      marginLeft: "1.5rem",
      position: "absolute",
      width: "3rem"
    }
  },

  content: {
    base: {},

    bookmark: {
      display: "inline-block"
    }
  },

  title: {
    base: (_base = {
      marginBottom: "1.4rem"

    }, _defineProperty(_base, "@media (min-width: " + _settings2.default.media.min["560"] + ")", {
      display: "inline-block"
    }), _defineProperty(_base, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      marginBottom: "2.2rem"
    }), _base)
  },

  topChoice: {
    base: {
      color: _settings2.default.color.red
    }
  },

  bookmark: {
    base: _defineProperty({
      display: "inline-block",
      marginLeft: ".8rem",
      verticalAlign: ".4rem"

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      marginLeft: "1rem",
      verticalAlign: "3rem"
    })
  },

  strapline: {
    base: (_base3 = {
      marginTop: "1.2rem"

    }, _defineProperty(_base3, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
      paddingLeft: (0, _grid.gutter)("static"),
      paddingRight: (0, _grid.gutter)("static")
    }), _defineProperty(_base3, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      marginTop: ".5rem"
    }), _base3)
  }
};

/**
 * PageHeader component
 */

var PageHeader = function (_React$Component) {
  _inherits(PageHeader, _React$Component);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageHeader).call(this));

    _this.state = {
      marked: false
    };

    _this._bookmarkOnClick = _this._bookmarkOnClick.bind(_this);
    return _this;
  }

  _createClass(PageHeader, [{
    key: "_bookmarkOnClick",
    value: function _bookmarkOnClick() {
      this.setState({
        marked: !this.state.marked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var alignment = _props.alignment;
      var contained = _props.contained;
      var topChoice = _props.topChoice;
      var neighborhood = _props.neighborhood;
      var place = _props.place;
      var strapline = _props.strapline;
      var titleHref = _props.titleHref;
      var title = _props.title;
      var heading = _props.heading;
      var bookmark = _props.bookmark;
      var type = _props.type;
      var underline = _props.underline;
      var override = _props.override;


      var style = {
        container: [styles.container.base]
      };

      if (alignment) {
        style.container.push(styles.container.alignment[alignment]);
      }

      if (contained) {
        style.container.push(styles.container.contained);
      }

      var TopChoiceText = _react2.default.createElement(
        "span",
        { key: "topChoice" },
        topChoice ? _react2.default.createElement(
          "em",
          { style: styles.topChoice.base },
          "Top choice ",
          type.toLowerCase()
        ) : "" + type.toLowerCase()
      );

      var PlaceText = _react2.default.createElement(
        "span",
        { key: "placeText" },
        neighborhood ? "located in the " + neighborhood + " neighbourhood" : "located in " + place
      );

      var straplineText = strapline || [TopChoiceText, " ", PlaceText];

      var TitleContent = titleHref ? _react2.default.createElement(
        "a",
        { href: titleHref },
        title
      ) : title;

      return _react2.default.createElement(
        "header",
        {
          className: "PageHeader",
          style: style.container
        },
        underline && _react2.default.createElement("div", { style: styles.container.underline }),
        title && _react2.default.createElement(
          "div",
          { style: styles.title.base },
          _react2.default.createElement(
            _heading2.default,
            { level: 6,
              size: "tiny",
              weight: "thick",
              importance: "alert",
              caps: true
            },
            TitleContent
          )
        ),
        _react2.default.createElement(
          _heading2.default,
          { level: 1,
            size: "huge",
            weight: "thick",
            importance: "high",
            override: override
          },
          heading,
          "!",
          bookmark && _react2.default.createElement(
            "div",
            {
              className: "PageHeader-bookmark",
              style: styles.bookmark.base
            },
            _react2.default.createElement(_bookmark2.default, {
              onClick: this._bookmarkOnClick,
              marked: this.state.marked,
              size: "large"
            })
          )
        ),
        (type || strapline) && _react2.default.createElement(
          "div",
          {
            className: "PageHeader-strapline",
            style: styles.strapline.base
          },
          _react2.default.createElement(
            _strapline2.default,
            {
              size: "small",
              parent: "pageHeader"
            },
            straplineText
          )
        )
      );
    }
  }]);

  return PageHeader;
}(_react2.default.Component);

PageHeader.propTypes = {
  /**
   * Text for the heading
   */
  heading: _react2.default.PropTypes.string.isRequired,

  /**
   * Small title
   */
  title: _react2.default.PropTypes.string,

  /**
   * URL for small title
   */
  titleHref: _react2.default.PropTypes.string,

  /**
   * Show the top choice text
   */
  topChoice: _react2.default.PropTypes.bool,
  /**
   * Override the strapline
   */
  strapline: _react2.default.PropTypes.string,
  /**
   * Type of POI
   */
  type: _react2.default.PropTypes.string,

  /**
   * Neighborhood where the POI is located
   */
  neighborhood: _react2.default.PropTypes.string,

  /**
   * Where the POI is located, if neighborhood is null
   */
  place: _react2.default.PropTypes.string,

  /**
   * Alignment for header text
   */
  alignment: _react2.default.PropTypes.oneOf(["", "center"]),

  /**
   * Whether or not to set a max width on the header
   */
  contained: _react2.default.PropTypes.bool,

  /**
   * Whether or not to show the bookmark button
   */
  bookmark: _react2.default.PropTypes.bool
};

PageHeader.defaultProps = {
  title: "",

  titleHref: "",

  topChoice: false,

  type: "",

  neighborhood: "",

  place: "",

  alignment: "",

  contained: false,

  bookmark: false
};

PageHeader.styles = styles;

exports.default = (0, _radium2.default)(PageHeader);