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

var _grid = require("../../utils/grid");

var _font = require("../../utils/font");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {
    fontSize: "1.4rem",
    letterSpacing: ".01rem"
  },
  size: {},
  orientation: {
    vertical: {
      textAlign: "center"
    },
    horizontal: _defineProperty({
      display: "inline-block",
      marginTop: "2.4rem",
      overflow: "hidden"

    }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
      marginTop: (0, _grid.gutter)("static")
    })
  },
  type: {
    article: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
      marginTop: ".6rem"
    }),
    narrative: {
      marginTop: "1.5rem"
    }
  },

  element: {
    anchor: {
      base: {
        display: "inline-block"
      }
    },
    avatar: {
      base: {
        backgroundColor: _settings2.default.color.white,
        borderRadius: "100%",
        display: "inline-block",
        height: "4rem",
        maxWidth: "4rem",
        position: "relative",
        verticalAlign: "middle",
        width: "4rem"
      },
      size: {
        large: _defineProperty({}, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
          height: "auto",
          maxWidth: "none",
          width: "8rem"
        })
      },
      orientation: {
        horizontal: {
          float: "left",
          marginRight: "1.4rem"
        }
      },
      type: {
        author: {
          height: "auto",
          maxWidth: "4rem",
          width: "12vw"
        },
        navigation: {
          position: "relative",
          top: "-.4rem"
        },
        article: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
          display: "none"
        })
      }
    },
    details: {
      base: {},
      size: {},
      orientation: {
        horizontal: {
          float: "left",
          marginTop: ".6rem"
        },
        vertical: _defineProperty({
          marginTop: "1.3rem"

        }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
          marginTop: "1.8rem"
        })
      },
      type: {}
    },
    name: {
      base: _defineProperty({
        color: _settings2.default.color.titleGray,
        fontSize: "1.2rem",
        fontWeight: 600,
        lineHeight: 1,

        // not inline
        marginBottom: ".8rem",
        textTransform: "uppercase"

      }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
        fontSize: "1.4rem"
      }),

      size: {
        small: _defineProperty({
          letterSpacing: ".06rem",

          // not inline
          marginBottom: ".5rem"

        }, "@media (min-width: " + _settings2.default.media.min["600"] + ")", {
          fontSize: "1.2rem"
        })
      },
      orientation: {},
      type: {
        article: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
          display: "inline",
          fontSize: "1.1rem"
        })
      }
    },
    title: {
      base: {
        color: _settings2.default.color.lightText,
        fontSize: "1.4rem",
        lineHeight: 1,

        // not inline
        fontFamily: (0, _font.font)("miller"),
        fontStyle: "italic",
        letterSpacing: 0

      },
      // inline
      // display: "inline",
      // fontFamily: settings.font.family.benton.join(", "),
      // fontSize: "1.2rem",
      // fontStyle: "normal",
      // letterSpacing: ".06rem",
      size: {},
      orientation: {},
      type: {
        article: _defineProperty({}, "@media (max-width: " + _settings2.default.media.max["600"] + ")", {
          display: "inline",
          fontSize: "1.1rem",
          marginLeft: "1.2rem"
        })
      }
    },
    bio: {
      base: {
        marginTop: ".4rem",
        maxWidth: "40rem"
      }
    }
  }
};

/**
 * Intro narrative for POI
 */
function Profile(_ref) {
  var name = _ref.name;
  var title = _ref.title;
  var avatar = _ref.avatar;
  var profileUrl = _ref.profileUrl;
  var size = _ref.size;
  var orientation = _ref.orientation;
  var type = _ref.type;

  var style = {
    base: [styles.base],
    anchor: [styles.element.anchor.base],
    avatar: [styles.element.avatar.base],
    details: [styles.element.details.base],
    name: [styles.element.name.base],
    title: [styles.element.title.base],
    bio: [styles.element.bio.base]
  };

  if (size) {
    style.base.push(styles.size[size]);
    style.avatar.push(styles.element.avatar.size[size]);
    style.details.push(styles.element.details.size[size]);
    style.name.push(styles.element.name.size[size]);
    style.title.push(styles.element.title.size[size]);
  }

  if (orientation) {
    style.base.push(styles.orientation[orientation]);
    style.avatar.push(styles.element.avatar.orientation[orientation]);
    style.details.push(styles.element.details.orientation[orientation]);
    style.name.push(styles.element.name.orientation[orientation]);
    style.title.push(styles.element.title.orientation[orientation]);
  }

  if (type) {
    style.base.push(styles.type[type]);
    style.avatar.push(styles.element.avatar.type[type]);
    style.details.push(styles.element.details.type[type]);
    style.name.push(styles.element.name.type[type]);
    style.title.push(styles.element.title.type[type]);
  }

  var ProfileAvatar = _react2.default.createElement("img", {
    className: "Profile-avatar",
    style: style.avatar,
    src: avatar
  });

  var AuthorDetails = _react2.default.createElement(
    "div",
    { className: "Profile-details", style: style.details },
    _react2.default.createElement(
      "div",
      { className: "Profile-name", style: style.name },
      name
    ),
    _react2.default.createElement(
      "div",
      { className: "Profile-title", style: style.title },
      title
    )
  );

  if (profileUrl) {
    return _react2.default.createElement(
      "div",
      { className: "Profile", style: style.base },
      _react2.default.createElement(
        "a",
        { style: style.anchor, href: profileUrl },
        ProfileAvatar,
        AuthorDetails
      )
    );
  }

  return _react2.default.createElement(
    "div",
    { className: "Profile", style: style.base },
    ProfileAvatar,
    AuthorDetails
  );
}

Profile.propTypes = {
  /**
   * Profile name
   */
  name: _react2.default.PropTypes.string.isRequired,

  /**
   * Profile title
   */
  title: _react2.default.PropTypes.string,

  /**
   * Profile avatar URL
   */
  avatar: _react2.default.PropTypes.string,

  /**
   * Profile profile URL
   */
  profileUrl: _react2.default.PropTypes.string,

  /**
   * Size of profile
   */
  size: _react2.default.PropTypes.oneOf(["", "small", "large"]),

  /**
   * Orientation of profile; how is it presented
   */
  orientation: _react2.default.PropTypes.oneOf(["", "horizontal", "vertical"]),

  /**
   * A specific type of profile
   */
  type: _react2.default.PropTypes.oneOf(["", "article", "narrative", "navigation"])
};

Profile.defaultProps = {
  name: "",

  title: "",

  avatar: "//assets.staticlp.com/profiles/users/placeholders/large.png",

  profileUrl: "",

  size: "small",

  orientation: "horizontal",

  type: ""
};

Profile.styles = styles;

exports.default = (0, _radium2.default)(Profile);