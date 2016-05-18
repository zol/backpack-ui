"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var padding = "2rem";

var styles = {
  container: {
    base: {
      borderTop: "1px solid " + _settings.color.gray,
      fontSize: "1.3rem",
      paddingBottom: padding,
      paddingTop: padding
    },

    background: {
      backgroundColor: "#e9f2f8", // This color does not exist in settings
      borderTop: 0,
      paddingLeft: padding,
      paddingRight: padding
    },

    collapsed: {
      paddingBottom: 0,
      paddingTop: 0
    }
  },

  header: {
    base: {
      position: "relative"
    }
  },

  collapsibleHeading: {
    base: {
      display: "block",
      paddingBottom: padding,
      paddingTop: padding
    }
  },

  content: {
    base: {
      marginTop: "1.4rem"
    },

    indented: {
      marginLeft: padding
    },

    collapsed: {
      display: "none",
      marginTop: "-6px",
      paddingBottom: padding
    },

    expanded: {
      display: "block"
    }
  },

  toggleIcon: {
    base: {
      backgroundColor: "transparent",
      color: _settings.color.blue,
      fontSize: "9px",
      paddingBottom: padding,
      paddingTop: padding,
      position: "absolute",
      right: 0,
      top: "2px"
    }
  }
};

var SidebarSection = function (_React$Component) {
  _inherits(SidebarSection, _React$Component);

  function SidebarSection() {
    _classCallCheck(this, SidebarSection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SidebarSection).call(this));

    _this.state = {
      collapsed: false
    };

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(SidebarSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        collapsed: this.props.collapsed
      });
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      this.setState({
        collapsed: !this.state.collapsed
      });

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var title = _props.title;
      var icon = _props.icon;
      var collapsed = _props.collapsed;
      var background = _props.background;
      var scopedStyles = _props.scopedStyles;


      var style = {
        container: [styles.container.base],
        header: [styles.header.base],
        collapsibleHeading: [styles.collapsibleHeading.base],
        content: [styles.content.base],
        toggleIcon: [styles.toggleIcon.base]
      };

      if (icon) {
        style.content.push(styles.content.indented);
      }

      if (collapsed) {
        style.container.push(styles.container.collapsed);
        style.content.push(styles.content.collapsed);
      }

      if (background) {
        style.container.push(styles.container.background);
      }

      if (!this.state.collapsed) {
        style.content.push(styles.content.expanded);
      }

      var heading = _react2.default.createElement(
        _heading2.default,
        {
          level: 4,
          weight: "thick",
          importance: "normal",
          size: "tiny",
          caps: true
        },
        icon && _react2.default.createElement(_icon2.default, {
          name: icon,
          size: "small",
          inline: "before",
          color: background ? "" : "gray"
        }),
        title
      );

      var collapsibleHeading = _react2.default.createElement(
        "a",
        {
          style: style.collapsibleHeading,
          href: "#",
          onClick: this.onClick
        },
        heading,
        _react2.default.createElement(
          "span",
          {
            style: style.toggleIcon,
            type: "button"
          },
          _react2.default.createElement(_icon2.default, {
            name: this.state.collapsed ? "triangle-down" : "triangle-up",
            label: "Expand"
          })
        )
      );

      return _react2.default.createElement(
        "section",
        {
          className: "SidebarSection" + (background ? " SidebarSection--background" : ""),
          style: style.container
        },
        scopedStyles && _react2.default.createElement(_radium.Style, {
          scopeSelector: ".SidebarSection",
          rules: {
            ul: {
              listStyle: "none"
            },
            "li + li": {
              marginTop: ".8rem"
            }
          }
        }),
        background && _react2.default.createElement(_radium.Style, {
          scopeSelector: ".SidebarSection--background",
          rules: {
            "+ .SidebarSection": {
              borderTopWidth: "0 !important"
            }
          }
        }),
        _react2.default.createElement(
          "header",
          {
            className: "SidebarSection-header",
            style: style.header
          },
          collapsed && collapsibleHeading,
          !collapsed && heading
        ),
        _react2.default.createElement(
          "div",
          {
            className: "SidebarSection-content",
            style: style.content,
            "aria-hidden": this.state.collapsed
          },
          children
        )
      );
    }
  }]);

  return SidebarSection;
}(_react2.default.Component);

SidebarSection.propTypes = {
  /**
   * Content for the section
   */
  children: _react2.default.PropTypes.node.isRequired,

  /**
   * The name of the section
   */
  title: _react2.default.PropTypes.string.isRequired,

  /**
   * The name of an icon to be placed to the left of the title
   */
  icon: _react2.default.PropTypes.string,

  /**
   * Should the section be collapsed and expandable
   */
  collapsed: _react2.default.PropTypes.bool,

  /**
   * Should the section be boxed in with a blue background
   */
  background: _react2.default.PropTypes.bool,

  /**
   * Should the component include scoped styles (for user generated content)
   */
  scopedStyles: _react2.default.PropTypes.bool
};

SidebarSection.defaultProps = {
  children: null,

  title: "",

  icon: "",

  collapsed: false,

  background: false,

  scopedStyles: false
};

SidebarSection.styles = styles;

exports.default = (0, _radium2.default)(SidebarSection);