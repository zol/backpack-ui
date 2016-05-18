"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hoverStyles = {
  base: {
    backgroundColor: "rgba(" + (0, _color.rgb)("#e1eaf0") + ", .3)"
  },

  selected: {
    backgroundColor: "#e1eaf0"
  }
};

var styles = {
  base: {
    border: "1px solid #e1eaf0",
    borderRadius: "1.7rem",
    color: _settings.color.darkGray,
    display: "inline-block",
    fontSize: "1.2rem",
    lineHeight: 1,
    padding: "1.2rem 2.5rem .8rem",
    transition: "background-color 400ms",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base
  },

  selected: {
    backgroundColor: "#e1eaf0",

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": hoverStyles.selected
  }
};

/**
 * Tag component
 * @usage
 * <Tag label="Europe" slug="/europe" />
 */
function Tag(_ref) {
  var label = _ref.label;
  var slug = _ref.slug;
  var selected = _ref.selected;

  var style = [styles.base];

  if (selected) {
    style.push(styles.selected);
  }

  return _react2.default.createElement(
    "a",
    {
      className: "Tag",
      style: style,
      href: slug
    },
    label
  );
}

Tag.propTypes = {
  /**
   * Text label which is the tag name
   */
  label: _react2.default.PropTypes.string.isRequired,

  /**
   * Slug URL of the tag
   */
  slug: _react2.default.PropTypes.string.isRequired,

  /**
   * Should the tag appear to have been selected
   */
  selected: _react2.default.PropTypes.bool
};

Tag.defaultProps = {
  label: "",

  slug: "",

  selected: false
};

Tag.styles = styles;

exports.default = (0, _radium2.default)(Tag);