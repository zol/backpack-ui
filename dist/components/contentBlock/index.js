"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _lede = require("../lede");

var _lede2 = _interopRequireDefault(_lede);

var _settings = require("rizzo-next/sass/settings.json");

var _font = require("../../utils/font");

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pMargin = (0, _grid.subtract)([(0, _grid.gutter)("static"), ".2rem"], "static");
var ulMargin = (0, _grid.gutter)("static", 12, 2);

var scopedStyles = {
  "ContentBlock-text": {
    fontFamily: (0, _font.font)("miller"),
    fontSize: "1.6rem",
    lineHeight: 25 / 16,

    mediaQueries: _defineProperty({}, "(min-width: " + _settings.media.min["600"] + ")", {
      fontSize: "2rem",
      lineHeight: 36 / 20
    }),

    p: {
      marginBottom: pMargin
    },
    ul: {
      marginBottom: pMargin,
      marginLeft: ulMargin
    },
    ol: {
      marginBottom: pMargin,
      marginLeft: ulMargin
    },

    "p:not(:first-child)": {
      marginTop: pMargin
    },
    "ul:not(:first-child)": {
      marginTop: pMargin
    },
    "ol:not(:first-child)": {
      marginTop: pMargin
    }
  }
};

/**
 * Content block component
 */

var ContentBlock = function (_React$Component) {
  _inherits(ContentBlock, _React$Component);

  function ContentBlock() {
    _classCallCheck(this, ContentBlock);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContentBlock).call(this));

    _this.state = { editable: false };
    return _this;
  }

  _createClass(ContentBlock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var heading = _props.heading;
      var lede = _props.lede;
      var htmlContent = _props.htmlContent;
      var type = _props.type;

      var headingImportance = type === "partnerDescription" ? "low" : "normal";
      var headingWeight = type === "partnerDescription" ? "thin" : "normal";

      function markup() {
        return {
          __html: htmlContent
        };
      }

      return _react2.default.createElement(
        "div",
        { className: "ContentBlock", onDoubleClick: function onDoubleClick() {
            return _this2.setState({ editable: !_this2.state.editable });
          } },
        _react2.default.createElement(_radium.Style, {
          scopeSelector: ".ContentBlock-text",
          rules: scopedStyles["ContentBlock-text"]
        }),
        heading && _react2.default.createElement(
          _heading2.default,
          { level: 3,
            size: "medium",
            weight: headingWeight,
            importance: headingImportance
          },
          heading
        ),
        lede && _react2.default.createElement(_lede2.default, {
          content: lede
        }),
        _react2.default.createElement("div", {
          className: "ContentBlock-text",
          dangerouslySetInnerHTML: markup(),
          contentEditable: this.state.editable
        })
      );
    }
  }]);

  return ContentBlock;
}(_react2.default.Component);

ContentBlock.propTypes = {
  /**
   * Heading
   */
  heading: _react2.default.PropTypes.string.isRequired,

  /**
   * Introduction content
   */
  lede: _react2.default.PropTypes.string,

  /**
   * HTML formatted content
   */
  htmlContent: _react2.default.PropTypes.string.isRequired,

  /**
   * Type of content
   */
  type: _react2.default.PropTypes.oneOf(["", "partnerDescription"])
};

ContentBlock.defaultProps = {
  heading: "",

  lede: "",

  htmlContent: "",

  type: ""
};

exports.default = ContentBlock;