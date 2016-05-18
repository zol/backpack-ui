"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _iconButton = require("../iconButton");

var _iconButton2 = _interopRequireDefault(_iconButton);

var _flyout = require("../flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _item = require("./item");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareMenu = function (_React$Component) {
  _inherits(ShareMenu, _React$Component);

  function ShareMenu() {
    _classCallCheck(this, ShareMenu);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShareMenu).call(this));

    _this.state = {
      optionsHidden: true,
      flyoutArrow: "up"
    };

    _this._toggleOptions = _this._toggleOptions.bind(_this);
    _this._shareContent = _this._shareContent.bind(_this);
    _this._shareUrl = _this._shareUrl.bind(_this);
    _this._calculateWindowPosition = _this._calculateWindowPosition.bind(_this);
    _this._windowSettings = _this._windowSettings.bind(_this);
    _this._openWindow = _this._openWindow.bind(_this);
    return _this;
  }

  _createClass(ShareMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.innerWidth < 768) {
        this.setState({
          flyoutArrow: "right"
        });
      }
    }
  }, {
    key: "_toggleOptions",
    value: function _toggleOptions() {
      this.setState({
        optionsHidden: !this.state.optionsHidden
      });
    }
  }, {
    key: "_shareContent",
    value: function _shareContent() {
      var _props = this.props;
      var url = _props.url;
      var text = _props.text;


      return {
        text: encodeURIComponent(text),
        url: encodeURIComponent(url),
        via: "lonelyplanet"
      };
    }
  }, {
    key: "_shareUrl",
    value: function _shareUrl() {
      var _shareContent2 = this._shareContent();

      var url = _shareContent2.url;
      var text = _shareContent2.text;
      var via = _shareContent2.via;


      return {
        twitter: "https://twitter.com/intent/tweet?text=" + text + "&url=" + url + "&via=" + via,
        facebook: "https://www.facebook.com/sharer/sharer.php?u=" + url,
        email: "mailto:?subject=" + text + "&body=" + url
      };
    }
  }, {
    key: "_calculateWindowPosition",
    value: function _calculateWindowPosition(windowDimension, popUpDimension) {
      return Math.round(windowDimension / 2 - popUpDimension / 2);
    }
  }, {
    key: "_windowSettings",
    value: function _windowSettings() {
      var windowSettings = {
        popUpWidth: 840,
        popUpHeight: 420,
        popUpLeft: 0,
        popUpTop: 0,
        height: window.innerHeight,
        width: window.innerWidth
      };

      windowSettings.popUpLeft = this._calculateWindowPosition(windowSettings.width, windowSettings.popUpWidth);

      windowSettings.popUpTop = windowSettings.height > windowSettings.popUpHeight ? this._calculateWindowPosition(windowSettings.height, windowSettings.popUpHeight) : 0;

      windowSettings.windowOptions = "toolbar=no," + "menubar=no," + "location=yes," + "resizable=no," + "scrollbars=yes";

      windowSettings.windowSize = "width=" + windowSettings.popUpWidth + "," + ("height=" + windowSettings.popUpHeight + ",") + ("top=" + windowSettings.popUpTop + ",") + ("left=" + windowSettings.popUpLeft);

      return windowSettings;
    }
  }, {
    key: "_openWindow",
    value: function _openWindow(event) {
      var _windowSettings2 = this._windowSettings();

      var windowOptions = _windowSettings2.windowOptions;
      var windowSize = _windowSettings2.windowSize;


      if (event.currentTarget.dataset.network !== "email") {
        window.open(event.currentTarget.href, "share", windowOptions + "," + windowSize);
      }

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _shareUrl2 = this._shareUrl();

      var twitter = _shareUrl2.twitter;
      var facebook = _shareUrl2.facebook;
      var email = _shareUrl2.email;


      var style = {
        container: [_styles2.default.container.base],
        options: [_styles2.default.options.base]
      };

      var position = {
        up: "below",
        down: "above",
        left: "right",
        right: "left"
      };

      var visibility = {
        true: "hidden",
        false: "visible"
      };

      style.options.push(_styles2.default.options.position[position[this.state.flyoutArrow]]);

      style.options.push(_styles2.default.options.state[visibility[this.state.optionsHidden]].base, _styles2.default.options.state[visibility[this.state.optionsHidden]].position[position[this.state.flyoutArrow]]);

      return _react2.default.createElement(
        "div",
        {
          className: "ShareMenu",
          style: style.container
        },
        _react2.default.createElement(_iconButton2.default, {
          className: "ShareMenu-button",
          icon: "share",
          label: "Share this article on Twitter, Facebook, or email",
          owns: "share-menu-options",
          onClick: this._toggleOptions,
          onFocus: this._toggleOptions,
          onBlur: this._toggleOptions
        }),
        _react2.default.createElement(
          "div",
          {
            className: "ShareMenu-options",
            id: "share-menu-options",
            style: style.options,
            "aria-hidden": this.state.optionsHidden
          },
          _react2.default.createElement(
            _flyout2.default,
            { arrow: this.state.flyoutArrow, fill: true },
            _react2.default.createElement(_item2.default, {
              network: "twitter",
              href: twitter,
              label: "Share on Twitter",
              onClick: this._openWindow
            }),
            _react2.default.createElement(_item2.default, {
              network: "facebook",
              href: facebook,
              label: "Share on Facebook",
              onClick: this._openWindow
            }),
            _react2.default.createElement(_item2.default, {
              network: "email",
              href: email,
              label: "Share by email"
            })
          )
        )
      );
    }
  }]);

  return ShareMenu;
}(_react2.default.Component);

ShareMenu.propTypes = {
  /**
   * URL of page to share
   */
  url: _react2.default.PropTypes.string.isRequired,

  /**
   * Text to share
   */
  text: _react2.default.PropTypes.string,

  /**
   * Describe how the buttons should be aligned
   */
  alignment: _react2.default.PropTypes.oneOf(["", "centered"])
};

ShareMenu.defaultProps = {
  url: "",

  text: "",

  alignment: ""
};

ShareMenu.styles = _styles2.default;

exports.default = (0, _radium2.default)(ShareMenu);