"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _settings = require("rizzo-next/sass/settings.json");

var _font = require("../../utils/font");

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _small$large = {
  small: {
    size: "2.5rem",
    fontSize: "1.4rem"
  },

  large: {
    size: "3.6rem",
    fontSize: "2rem"
  }
};
var small = _small$large.small;
var large = _small$large.large;


var styles = {
  container: {
    base: {
      backfaceVisibility: "hidden",
      color: _settings.color.titleGray,
      display: "inline-block",
      fontFamily: (0, _font.font)("miller"),
      position: "relative",
      textAlign: "center",
      zIndex: _settings.zIndex.default
    },

    size: {
      small: {
        fontSize: small.fontSize,
        height: small.size,
        lineHeight: small.size,
        width: small.size
      },

      large: {
        fontSize: large.fontSize,
        height: large.size,
        lineHeight: large.size,
        width: large.size
      }
    },

    place: {
      left: "6.7rem",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    }
  },

  diamond: {
    base: {
      backgroundColor: _settings.color.white,
      boxShadow: "2px 2px 2px rgba(" + (0, _color.rgb)(_settings.color.black) + ", .18)",
      content: "",
      display: "block",
      height: "100%",
      position: "relative",
      transform: "rotate(45deg)",
      width: "100%",
      zIndex: _settings.zIndex.below
    },

    size: {
      small: {
        borderRadius: "4px",
        marginTop: "-" + small.size
      },

      large: {
        borderRadius: "6px",
        marginTop: "-" + large.size
      }
    },
    outlined: {
      boxShadow: "0 0 0 1px #e1eaf0" }
  },

  // this color does not exist in settings
  circle: {
    base: {
      backgroundColor: _settings.color.white,
      boxShadow: "2px 2px 2px rgba(" + (0, _color.rgb)(_settings.color.black) + ", .18)",
      content: "",
      display: "block",
      height: "100%",
      position: "relative",
      width: "100%",
      zIndex: _settings.zIndex.below
    },

    size: {
      small: {
        borderRadius: "50%",
        marginTop: "-" + small.size,
        width: small.size,
        height: small.size
      },

      large: {
        borderRadius: "50%",
        marginTop: "-" + large.size,
        width: large.size,
        height: large.size
      }
    },
    outlined: {
      boxShadow: "0 0 0 1px #e1eaf0" }
  }
};

// this color does not exist in settings
function NumberMarker(_ref) {
  var number = _ref.number;
  var size = _ref.size;
  var outlined = _ref.outlined;
  var place = _ref.place;
  var type = _ref.type;

  var style = {
    container: [styles.container.base]
  };

  if (styles[type]) {
    style[type] = [].concat(_toConsumableArray(styles[type]));
  }

  if (size) {
    style.container.push(styles.container.size[size]);
    style[type].push(styles[type].size[size]);
  }

  if (outlined) {
    style[type].push(styles[type].outlined);
  }

  if (place) {
    style.container.push(styles.container.place);
  }

  return _react2.default.createElement(
    "div",
    {
      className: "NumberMarker",
      style: style.container
    },
    number,
    _react2.default.createElement("div", {
      className: "NumberMarker-diamond",
      style: style[type]
    })
  );
}

NumberMarker.propTypes = {
  /**
   * Number to show
   */
  number: _react2.default.PropTypes.number.isRequired,

  /**
   * How big the marker should be
   */
  size: _react2.default.PropTypes.oneOf(["small", "large"]),

  /**
   * Changes the box shadow style to look more like an outline
   */
  outlined: _react2.default.PropTypes.bool,

  /**
   * If the marker used within a place list;
   * positions the marker over an 80px wide photo
   */
  place: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.oneOf(["diamond", "circle"])
};

NumberMarker.defaultProps = {
  type: "diamond",

  number: "",

  size: "small",

  outlined: false,

  place: false
};

NumberMarker.styles = styles;

exports.default = (0, _radium2.default)(NumberMarker);