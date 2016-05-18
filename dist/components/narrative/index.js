"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _contentBlock = require("../contentBlock");

var _contentBlock2 = _interopRequireDefault(_contentBlock);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

var _profile = require("../profile");

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mq = 667 * 0.0625 + "em";

var scopedStyles = {
  ".Icon": {
    fontSize: "6vw"
  },

  mediaQueries: _defineProperty({}, "(min-width: " + mq + ")", {
    ".Icon": {
      fontSize: "4rem"
    }
  })
};

/**
 * Intro narrative for POI
 */
function Narrative(_ref) {
  var heading = _ref.heading;
  var htmlContent = _ref.htmlContent;
  var author = _ref.author;

  return _react2.default.createElement(
    "div",
    { className: "Narrative" },
    _react2.default.createElement(_radium.Style, {
      scopeSelector: ".Narrative",
      rules: scopedStyles
    }),
    _react2.default.createElement(
      "aside",
      { className: "Narrative-aside" },
      _react2.default.createElement(_icon2.default, {
        name: "lp-diamond",
        color: "blue"
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "Narrative-content" },
      _react2.default.createElement(_contentBlock2.default, {
        heading: heading,
        content: htmlContent
      }),
      _react2.default.createElement(
        "div",
        { className: "Narrative-profile" },
        _react2.default.createElement(_profile2.default, {
          name: author.name,
          title: author.title,
          avatar: author.avatar,
          profileUrl: author.url,
          orientation: "horizontal",
          size: "small"
        })
      )
    )
  );
}

Narrative.propTypes = {
  /**
   * Title of the narrative
   */
  heading: _react2.default.PropTypes.string.isRequired,

  /**
   * HTML formatted content
   */
  htmlContent: _react2.default.PropTypes.string.isRequired,

  /**
   * Author object
   */
  author: _react2.default.PropTypes.object.isRequired
};

Narrative.defaultProps = {
  heading: "",

  htmlContent: "",

  author: {}
};

exports.default = Narrative;