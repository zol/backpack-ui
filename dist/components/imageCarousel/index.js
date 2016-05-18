"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _paginatorButton = require("../paginatorButton");

var _paginatorButton2 = _interopRequireDefault(_paginatorButton);

var _expandButton = require("../expandButton");

var _expandButton2 = _interopRequireDefault(_expandButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function imgix(url) {
  return url.replace(/media.lonelyplanet.com/, "lonelyplanetimages.imgix.net");
}

var styles = {
  container: {
    base: {
      maxHeight: "430px",
      position: "relative"
    }
  },

  images: {
    base: {
      position: "relative"
    }
  },

  image: {
    base: {
      display: "block",
      width: "100%"
    },

    hidden: {
      opacity: 0
    }
  },

  expandButton: {
    base: {
      bottom: "12px",
      position: "absolute",
      right: "12px"
    }
  }
};

/**
 * ImageCarousel component
 */

var ImageCarousel = function (_React$Component) {
  _inherits(ImageCarousel, _React$Component);

  function ImageCarousel() {
    _classCallCheck(this, ImageCarousel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCarousel).call(this));

    _this.state = {
      index: 0
    };

    _this._goToPreviousImage = _this._goToPreviousImage.bind(_this);
    _this._goToNextImage = _this._goToNextImage.bind(_this);
    return _this;
  }

  _createClass(ImageCarousel, [{
    key: "_goToNextImage",
    value: function _goToNextImage() {
      if (this.state.index + 1 !== this.props.images.length) {
        this.setState({
          index: this.state.index + 1
        });
      }
    }
  }, {
    key: "_goToPreviousImage",
    value: function _goToPreviousImage() {
      if (this.state.index !== 0) {
        this.setState({
          index: this.state.index - 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var buttonLabel = this.props.images.length > 1 ? this.state.index + 1 + " of " + this.props.images.length : "";

      return _react2.default.createElement(
        "div",
        {
          className: "ImageCarousel",
          style: styles.container.base
        },
        _react2.default.createElement(
          "div",
          {
            className: "ImageCarousel-images",
            style: styles.images.base
          },
          _react2.default.createElement("img", {
            style: styles.image.base,
            src: imgix(this.props.images[this.state.index]),
            alt: ""
          })
        ),
        _react2.default.createElement(
          "div",
          {
            className: "ImageCarousel-expandButton",
            style: styles.expandButton.base
          },
          _react2.default.createElement(_expandButton2.default, {
            label: buttonLabel
          })
        ),
        this.state.index !== 0 && _react2.default.createElement(_paginatorButton2.default, {
          direction: "left",
          align: "vertical",
          offset: true,
          onClick: this._goToPreviousImage
        }),
        this.state.index + 1 !== this.props.images.length && _react2.default.createElement(_paginatorButton2.default, {
          direction: "right",
          align: "vertical",
          offset: true,
          onClick: this._goToNextImage
        })
      );
    }
  }]);

  return ImageCarousel;
}(_react2.default.Component);

ImageCarousel.propTypes = {
  /**
   * Array of image paths
   */
  images: _react2.default.PropTypes.array.isRequired
};

ImageCarousel.defaultProps = {
  images: []
};

ImageCarousel.displayName = "ImageCarousel";
ImageCarousel.styles = styles;

exports.default = ImageCarousel;