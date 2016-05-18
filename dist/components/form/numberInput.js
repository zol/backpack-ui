"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component that replicates the HTML5 number input
 *
 * @usage
 * <NumberInput
 *   id="guests"
 *   min={0}
 *   max={10}
 *   value={2}
 * />
 */

var NumberInput = function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput() {
    _classCallCheck(this, NumberInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberInput).call(this));

    _this.state = {
      value: ""
    };

    _this.setValue = _this.setValue.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    return _this;
  }

  _createClass(NumberInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.value,
        min: this.props.min,
        max: this.props.max
      });
    }
  }, {
    key: "setValue",
    value: function setValue() {
      return this.state.value ? parseInt(this.state.value, 10) : 0;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var whitelistKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, // 0 - 9
      37, 39, // left arrow, right arrow
      8, 9, 46, // backspace, tab, delete
      91, 93, // command
      13, 17, 16, 18, // enter, ctrl, shift, alt
      27];

      // esc
      if (whitelistKeyCodes.indexOf(event.keyCode) === -1) {
        event.preventDefault();
      }

      if (event.keyCode === 38) {
        this.increment();
      }

      if (event.keyCode === 40) {
        this.decrement();
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var value = void 0;

      if (event.target.value) {
        value = parseInt(event.target.value, 10);
      } else {
        value = "";
      }

      this.setState({
        value: value
      });
    }
  }, {
    key: "increment",
    value: function increment(event) {
      var value = this.setValue();

      if (!value) {
        this.setState({
          value: this.state.min
        });
      }

      if (value !== this.state.max && this.state.value < this.state.max) {
        this.setState({
          value: value + 1
        });
      }

      if (this.state.value < this.state.min) {
        this.setState({
          value: this.state.min
        });
      }

      if (event) {
        event.preventDefault();
      }
    }
  }, {
    key: "decrement",
    value: function decrement(event) {
      var value = this.setValue();

      if (!value) {
        this.setState({
          value: this.state.min
        });
      }

      if (value !== this.state.min && this.state.value > this.state.min) {
        this.setState({
          value: value - 1
        });
      }

      if (this.state.value > this.state.max) {
        this.setState({
          value: this.state.max
        });
      }

      if (event) {
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var name = _props.name;
      var min = _props.min;
      var max = _props.max;
      var placeholder = _props.placeholder;
      var required = _props.required;
      var size = _props.size;
      var theme = _props.theme;
      var fill = _props.fill;


      var style = [_styles2.default.base];

      style.push(_styles2.default.element.input.base);

      if (size) {
        style.push(_styles2.default.size[size]);
        style.push(_styles2.default.element.input.size[size]);
      }

      if (theme) {
        style.push(_styles2.default.theme[theme]);
        style.push(_styles2.default.element.input.theme[theme]);
      }

      if (fill) {
        style.push(_styles2.default.fill);
      }

      var props = {
        style: style,
        type: "text",
        id: id,
        name: name || id
      };

      props.placeholder = placeholder || null;
      props.required = required || null;
      props.min = min || null;
      props.max = max || null;

      return _react2.default.createElement(
        "div",
        {
          className: "NumberInput",
          style: _styles2.default.element.numberInput.container.base
        },
        _react2.default.createElement("input", _extends({}, props, {
          value: this.state.value,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })),
        _react2.default.createElement(
          "button",
          {
            style: [_styles2.default.element.numberInput.button.base, _styles2.default.element.numberInput.button.size[size], _styles2.default.element.numberInput.button.plus.size[size]],
            onClick: this.increment,
            type: "button",
            key: "plus"
          },
          _react2.default.createElement(_icon2.default, { name: "plus" })
        ),
        _react2.default.createElement(
          "button",
          {
            style: [_styles2.default.element.numberInput.button.base, _styles2.default.element.numberInput.button.size[size], _styles2.default.element.numberInput.button.minus],
            onClick: this.decrement,
            type: "button",
            key: "minus"
          },
          _react2.default.createElement(_icon2.default, { name: "minus" })
        )
      );
    }
  }]);

  return NumberInput;
}(_react2.default.Component);

NumberInput.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,

  name: _react2.default.PropTypes.string,

  value: _react2.default.PropTypes.number,

  min: _react2.default.PropTypes.number,

  max: _react2.default.PropTypes.number,

  placeholder: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  size: _react2.default.PropTypes.oneOf(["tiny", "small", "medium", "large", "huge"]),

  theme: _react2.default.PropTypes.oneOf(["base", "light", "dark", "inputGroup"]),

  /**
   * Fills the width of the parent
   */
  fill: _react2.default.PropTypes.bool
};

NumberInput.defaultProps = {
  id: "",

  name: "",

  value: null,

  min: 0,

  max: null,

  placeholder: "",

  required: false,

  size: "medium",

  theme: "base",

  fill: false
};

NumberInput.styles = _styles2.default;

exports.default = (0, _radium2.default)(NumberInput);