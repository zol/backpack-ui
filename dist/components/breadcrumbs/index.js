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

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      color: _settings2.default.color.lightText,
      fontSize: "1.4rem",
      fontWeight: 300,
      lineHeight: 1
    }
  },

  item: {
    base: {
      ":hover": {
        textDecoration: "underline"
      },
      ":active": {
        textDecoration: "underline"
      },
      ":focus": {
        textDecoration: "underline"
      }
    },

    padded: {
      marginRight: "1rem"
    }
  },

  anchor: {
    padded: {
      marginRight: "1rem"
    }
  }
};

/**
 * Breadcrumb navigation component
 */
function Breadcrumbs(_ref) {
  var links = _ref.links;

  var items = links.map(function (link, index) {
    var itemStyle = [styles.item.base];

    if (index !== links.length - 1) {
      itemStyle.push(styles.item.padded);
    }

    return _react2.default.createElement(
      "span",
      {
        className: "Breadcrumbs-item",
        style: itemStyle,
        key: index
      },
      _react2.default.createElement(
        "a",
        {
          style: styles.anchor.padded,
          href: link.href
        },
        link.title
      ),
      index < links.length - 1 && _react2.default.createElement(_icon2.default, {
        name: "chevron-right",
        size: "tiny"
      })
    );
  });

  return _react2.default.createElement(
    "nav",
    { className: "Breadcrumbs",
      style: styles.container.base
    },
    items
  );
}

Breadcrumbs.propTypes = {
  /**
   * An array of links for the navigation
   */
  links: _react2.default.PropTypes.array.isRequired
};

Breadcrumbs.defaultProps = {
  links: []
};

Breadcrumbs.styles = styles;

exports.default = (0, _radium2.default)(Breadcrumbs);