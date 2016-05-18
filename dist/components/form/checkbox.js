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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    display: "inline-block"
  },
  button: {
    position: "relative",
    border: 0,
    backgroundColor: "#fff",
    display: "inline-block",
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    color: "#8b8f94",
    fontSize: "75%",
    verticalAlign: "middle",
    marginBottom: "1rem"
  },
  span: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: _settings.color.gray,
    backgroundColor: "#fff",
    lineHeight: "2rem",
    textAlign: "center",
    backgroundSize: "75% 75%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    userSelect: "none"
  },
  checked: {
    backgroundColor: _settings.color.blue,
    backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=)" },
  // eslint-disable-line max-len
  checkboxHide: {
    display: "none"
  }
};

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

    _this.state = {
      checked: props.checked || false
    };

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onClick",
    value: function onClick() {
      this.setState({
        checked: !this.state.checked
      });

      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var value = _props.value;


      return _react2.default.createElement(
        "div",
        { style: styles.base },
        _react2.default.createElement(
          "button",
          {
            id: id,
            ref: id,
            value: value,
            onClick: this.onClick,
            style: styles.button
          },
          _react2.default.createElement("span", {
            style: [styles.span, this.state.checked && styles.checked]
          }),
          value,
          _react2.default.createElement("input", {
            type: "checkbox",
            style: styles.checkboxHide,
            checked: this.state.checked
          })
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
  /**
   * ID for the checkbox
   */
  id: _react2.default.PropTypes.string.isRequired,

  /**
   * Value of the checkbox
   */
  value: _react2.default.PropTypes.string,

  /**
   * Whether or not the checkbox is checked
   */
  checked: _react2.default.PropTypes.bool,

  /**
   * Click handler for checkbox
   */
  onClick: _react2.default.PropTypes.func
};

Checkbox.defaultProps = {
  id: "",

  value: "",

  checked: false,

  onClick: null
};

Checkbox.styles = styles;

exports.default = (0, _radium2.default)(Checkbox);