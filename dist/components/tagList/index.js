"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _tag = require("../tag");

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TagList component
 * @usage
 * <TagList tags={[
 *   { label: "The Americas", slug: "/americas" },
 *   { label: "World", slug: "/world" },
 *   { label: "Europe", slug: "/europe" },
 * ]} />
 */
function TagList(_ref) {
  var tags = _ref.tags;

  var Tags = tags.map(function (tag, i) {
    return _react2.default.createElement(_tag2.default, {
      label: tag.label,
      slug: tag.slug,
      selected: tag.selected,
      key: i
    });
  });

  return _react2.default.createElement(
    "div",
    { className: "TagList" },
    _react2.default.createElement(_radium.Style, {
      scopeSelector: ".TagList",
      rules: {
        ".Tag": {
          marginBottom: "1rem",
          marginRight: ".6rem"
        }
      }
    }),
    _react2.default.createElement(_tag2.default, { label: "All", slug: "/", selected: true }),
    Tags
  );
}

TagList.propTypes = {
  /**
   * An array of tags to display
   */
  tags: _react2.default.PropTypes.array.isRequired
};

TagList.defaultProps = {
  label: []
};

exports.default = TagList;