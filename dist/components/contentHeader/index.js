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

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _moreLink = require("../moreLink");

var _moreLink2 = _interopRequireDefault(_moreLink);

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {},

    border: {
      bottom: {
        borderBottom: ".1rem solid " + _settings2.default.color.gray,
        paddingBottom: ".7rem",
        marginBottom: (0, _grid.gutter)("static")
      },

      top: {
        borderTop: ".1rem solid " + _settings2.default.color.gray,
        paddingTop: ".7rem",
        marginTop: (0, _grid.gutter)("static")
      }
    }
  },

  heading: {
    base: {
      float: "left"
    }
  },

  link: {
    base: {
      float: "right"
    }
  }
};

function ContentHeader(_ref) {
  var title = _ref.title;
  var heading = _ref.heading;
  var border = _ref.border;
  var moreLink = _ref.moreLink;

  var style = {
    container: [styles.container.base]
  };

  if (border) {
    style.container.push(styles.container.border[border]);
  }

  var hasLink = moreLink && moreLink.href && moreLink.children;

  var headerClassName = hasLink ? "ContentHeader clearfix" : "ContentHeader";

  return _react2.default.createElement(
    "header",
    {
      className: headerClassName,
      style: style.container
    },
    hasLink && _react2.default.createElement(
      "div",
      { style: styles.heading.base },
      _react2.default.createElement(
        _heading2.default,
        heading,
        title
      )
    ),
    !hasLink && _react2.default.createElement(
      _heading2.default,
      heading,
      title
    ),
    hasLink && _react2.default.createElement(
      "div",
      { style: styles.link.base },
      _react2.default.createElement(_moreLink2.default, moreLink)
    )
  );
}

ContentHeader.propTypes = {
  /**
   * Title of the content widget
   */
  title: _react2.default.PropTypes.string.isRequired,

  /**
   * Options for Heading component
   */
  heading: _react2.default.PropTypes.object.isRequired,

  /**
   * Adds a border to the header
   */
  border: _react2.default.PropTypes.oneOf(["", "top", "bottom"]),

  /**
   * Options for MoreLink component
   */
  moreLink: _react2.default.PropTypes.object
};

ContentHeader.defaultProps = {
  title: "",

  heading: {},

  border: "",

  moreLink: {}
};

ContentHeader.styles = styles;

exports.default = (0, _radium2.default)(ContentHeader);