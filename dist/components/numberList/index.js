"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _numberMarker = require("../numberMarker");

var _numberMarker2 = _interopRequireDefault(_numberMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      color: _settings.color.darkGray,
      fontSize: "1.4rem",
      lineHeight: 22 / 14
    }
  },

  list: {
    base: {
      listStyle: "none"
    }
  },

  item: {
    base: {
      borderBottom: "1px solid " + _settings.color.gray,
      display: "flex",
      padding: "13px 12px 13px 6px"
    },

    notFirst: {
      marginTop: "3px"
    }
  },

  marker: {
    base: {
      marginTop: "3px",
      padding: "5px"
    }
  },

  link: {
    base: {
      marginLeft: "26px"
    }
  },

  anchor: {
    base: {
      color: "currentColor",
      transition: "color 400ms",

      ":hover": {
        color: _settings.color.blue
      },
      ":active": {
        color: _settings.color.blue
      },
      ":focus": {
        color: _settings.color.blue
      }
    }
  }
};

function NumberList(_ref) {
  var list = _ref.list;
  var itemType = _ref.itemType;
  var itemSize = _ref.itemSize;

  return _react2.default.createElement(
    "div",
    {
      className: "NumberList",
      style: styles.container.base
    },
    _react2.default.createElement(
      "ul",
      { style: styles.list.base },
      list.map(function (_ref2, i) {
        var title = _ref2.title;
        var subtitle = _ref2.subtitle;
        var url = _ref2.url;
        return _react2.default.createElement(
          "li",
          {
            className: "NumberList-item",
            style: [styles.item.base, i !== 0 && styles.item.notFirst],
            key: i + 1
          },
          _react2.default.createElement(
            "div",
            {
              className: "NumberList-marker",
              style: styles.marker.base
            },
            _react2.default.createElement(_numberMarker2.default, {
              number: i + 1,
              size: itemSize,
              type: itemType,
              outlined: true
            })
          ),
          _react2.default.createElement(
            "div",
            {
              className: "NumberList-link",
              style: styles.link.base
            },
            _react2.default.createElement(
              "a",
              {
                style: styles.anchor.base,
                href: url,
                key: i + 1
              },
              title
            ),
            subtitle && _react2.default.createElement(
              "span",
              null,
              subtitle
            )
          )
        );
      })
    )
  );
}

NumberList.propTypes = {
  /**
   * An array of items to list
   */
  list: _react2.default.PropTypes.array.isRequired,

  itemStyle: _react2.default.PropTypes.oneOf(["diamond", "circle"])
};

NumberList.defaultProps = {
  list: [],
  itemStyle: "diamond"
};

NumberList.styles = styles;

exports.default = (0, _radium2.default)(NumberList);