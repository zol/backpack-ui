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

var _label = require("../form/label");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    base: {
      backgroundColor: _settings.color.white,
      borderColor: (0, _color.darken)(_settings.color.white, 17),
      borderStyle: "solid",
      borderWidth: ".1rem",
      color: "rgba(" + (0, _color.rgb)(_settings.color.titleGray) + ", .72)",
      position: "relative"
    },

    size: {
      full: {
        width: "100%"
      },
      half: {
        float: "left",
        width: "50%"
      }
    },

    removeBorder: {
      borderLeft: 0
    }
  }
};

function InputGroup(_ref) {
  var children = _ref.children;
  var label = _ref.label;
  var id = _ref.id;
  var size = _ref.size;
  var removeBorder = _ref.removeBorder;

  var style = {
    container: [styles.container.base]
  };

  if (size) {
    style.container.push(styles.container.size[size]);
  }

  if (removeBorder) {
    style.container.push(styles.container.removeBorder);
  }

  return _react2.default.createElement(
    "div",
    {
      className: "InputGroup",
      style: style.container
    },
    _react2.default.createElement(_radium.Style, {
      scopeSelector: ".InputGroup",
      rules: {
        label: {
          position: "absolute",
          left: "2rem",
          top: "1.9rem",
          zIndex: 2
        },

        mediaQueries: _defineProperty({}, "(min-width: " + _settings.media.min["768"] + ")", {
          label: {
            left: "1.5rem",
            top: "1.4rem"
          }
        })
      }
    }),
    _react2.default.createElement(
      _label2.default,
      {
        owns: id,
        orientation: "vertical",
        size: "small",
        uppercase: true
      },
      label
    ),
    children
  );
}

InputGroup.propTypes = {
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    var error = null;

    _react2.default.Children.forEach(prop, function (child) {
      var component = child.type.displayName !== "Input" && child.type.displayName !== "Select" && child.type.displayName !== "NumberInput";

      if (component) {
        error = new Error(componentName + " children should be of type \"Input\" or \"Select\".");
      }
    });

    return error;
  },

  label: _react2.default.PropTypes.string.isRequired,

  type: _react2.default.PropTypes.oneOf(["date", "time", "email", "number", "tel", "text", "url"]).isRequired,

  id: _react2.default.PropTypes.string.isRequired,

  name: _react2.default.PropTypes.string,

  defaultValue: _react2.default.PropTypes.string,

  min: _react2.default.PropTypes.string,

  max: _react2.default.PropTypes.string,

  placeholder: _react2.default.PropTypes.string,

  required: _react2.default.PropTypes.bool,

  size: _react2.default.PropTypes.oneOf(["full", "half"]),

  removeBorder: _react2.default.PropTypes.bool
};

InputGroup.defaultProps = {
  label: "",

  type: "text",

  id: "",

  name: "",

  defaultValue: "",

  min: "",

  max: "",

  placeholder: "",

  required: false,

  size: "full",

  removeBorder: false
};

InputGroup.styles = styles;

exports.default = (0, _radium2.default)(InputGroup);