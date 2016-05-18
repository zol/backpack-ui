"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base2, _base4, _base5;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _reactAddonsShallowCompare = require("react-addons-shallow-compare");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactRedux = require("react-redux");

var _settings = require("rizzo-next/sass/settings.json");

var _place = require("../place");

var _place2 = _interopRequireDefault(_place);

var _expandButton = require("../expandButton");

var _expandButton2 = _interopRequireDefault(_expandButton);

var _bookmark2 = require("../bookmark");

var _bookmark3 = _interopRequireDefault(_bookmark2);

var _grid = require("../../utils/grid");

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import actions from "../../actions";

var InteractiveMap = void 0;

if (typeof window !== "undefined") {
  InteractiveMap = require("../interactiveMap").default;
}

var mapHeight = "38rem";

var placeHover = {
  backgroundColor: "rgba(" + (0, _color.rgb)(_settings.color.gray) + ", .3)"
};

var styles = {
  container: {
    base: _defineProperty({}, "@media (min-width: " + _settings.media.min["1080"] + ")", {
      height: mapHeight,
      maxHeight: mapHeight
    })
  },

  column: {
    base: (_base2 = {}, _defineProperty(_base2, "@media (max-width: " + _settings.media.max["768"] + ") and (orientation: landscape)", {
      float: "left",
      height: "100vh",
      width: "50vw"
    }), _defineProperty(_base2, "@media (min-width: " + _settings.media.min["1080"] + ")", {
      float: "left",
      height: "100%",
      width: (0, _grid.add)([(0, _grid.span)("3 of 6"), (0, _grid.gutter)()])
    }), _base2)
  },

  map: {
    container: _defineProperty({
      backgroundColor: "rgba(" + (0, _color.rgb)(_settings.color.lightSlate) + ", .5)",
      maxHeight: mapHeight,
      overflow: "hidden",
      position: "relative"

    }, "@media (max-width: " + _settings.media.max["1080"] + ") and (orientation: portrait)", {
      height: "31vh"
    }),

    base: {}
  },

  expandButton: {
    base: {
      bottom: "2.4rem",
      position: "absolute",
      right: ".8rem",
      zIndex: _settings.zIndex.top
    }
  },

  list: {
    base: _defineProperty({}, "@media (max-width: " + _settings.media.max["1080"] + ") and (orientation: portrait)", {
      borderBottom: ".1rem solid " + _settings.color.gray
    })
  },

  place: {
    base: (_base4 = {
      cursor: "pointer",
      position: "relative"

    }, _defineProperty(_base4, "@media (max-width: " + _settings.media.max["768"] + ") and (orientation: landscape)", {
      height: "25vh",
      paddingLeft: (0, _grid.gutter)("static", 12, 0.5),
      paddingRight: (0, _grid.gutter)("static", 12, 0.5)
    }), _defineProperty(_base4, "@media (max-width: " + _settings.media.max["1080"] + ")", {
      display: "flex",
      alignItems: "center",
      padding: "2.5rem",

      ":hover": placeHover,
      ":active": placeHover,
      ":focus": placeHover
    }), _defineProperty(_base4, "@media (min-width: " + _settings.media.min["1080"] + ")", {
      marginLeft: (0, _grid.gutter)("static"),
      paddingBottom: "2rem",
      paddingTop: "2rem"
    }), _base4),

    notFirst: {
      borderTop: ".1rem solid " + _settings.color.gray
    },

    first: _defineProperty({}, "@media (min-width: " + _settings.media.min["1080"] + ")", {
      paddingTop: "2.1rem"
    }),

    background: {
      base: (_base5 = {}, _defineProperty(_base5, "@media (max-width: " + _settings.media.max["1080"] + ")", {
        display: "none"
      }), _defineProperty(_base5, "@media (min-width: " + _settings.media.min["1080"] + ")", {
        height: "calc(100% + .1rem)",
        left: "-" + (0, _grid.gutter)("static"),
        position: "absolute",
        top: 0,
        width: "calc(100% + " + (0, _grid.gutter)("static") + " + " + (0, _grid.gutter)("static") + ")",
        zIndex: _settings.zIndex.below
      }), _base5),

      hover: placeHover,

      last: {
        height: "100%"
      }
    },

    bookmark: _defineProperty({
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0

    }, "@media (max-width: " + _settings.media.max["1080"] + ")", {
      right: "2.1rem"
    })
  }
};

/**
 * Nearby places map
 */

var NearbyPlaces = function (_React$Component) {
  _inherits(NearbyPlaces, _React$Component);

  function NearbyPlaces() {
    _classCallCheck(this, NearbyPlaces);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NearbyPlaces).call(this));

    _this.state = {
      renderMap: false
    };
    return _this;
  }

  _createClass(NearbyPlaces, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        renderMap: true
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        mapContainer: [styles.map.container, styles.column.base],
        list: [styles.column.base, styles.list.base]
      };

      var places = this.props.places.map(function (place, index) {
        var placeStyle = [styles.place.base];
        var backgroundStyle = [styles.place.background.base];
        var id = parseInt(place.id, 10);

        if (index !== 0) {
          placeStyle.push(styles.place.notFirst);
        } else {
          placeStyle.push(styles.place.first);
        }

        if (_this2.props.activePlace === id) {
          backgroundStyle.push(styles.place.background.hover);
        }

        if (index === _this2.props.places.length - 1) {
          backgroundStyle.push(styles.place.background.last);
        }

        return _react2.default.createElement(
          "div",
          {
            className: "NearbyPlaces-place",
            style: placeStyle,
            key: index,
            onMouseEnter: function onMouseEnter() {
              return _this2.props.dispatch(actions.hoverPlace(id));
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.props.dispatch(actions.hoverPlace(-1));
            }
          },
          _react2.default.createElement(_place2.default, {
            key: "place-" + index,
            type: "nearby",
            title: place.name,
            slug: "/poi/" + place.id,
            category: place.poi_type,
            image: "http://dummyimage.com/80x54/4d494d/686a82.jpg",
            coords: place.location.coordinates
          }),
          _react2.default.createElement(
            "div",
            {
              className: "NearbyPlaces-placeBookmark",
              style: styles.place.bookmark
            },
            _react2.default.createElement(_bookmark3.default, {
              size: "small",
              center: "vertical",
              align: "right",
              onClick: null
            })
          ),
          _react2.default.createElement("div", {
            className: "NearbyPlaces-placeBackground",
            style: backgroundStyle,
            key: "background-" + index
          })
        );
      });

      return _react2.default.createElement(
        "div",
        {
          className: "NearbyPlaces clearfix",
          style: styles.container.base
        },
        _react2.default.createElement(
          "div",
          {
            className: "NearbyPlaces-mapContainer",
            style: style.mapContainer
          },
          _react2.default.createElement(
            "div",
            {
              className: "NearbyPlaces-map",
              style: styles.map.base
            },
            this.state.renderMap && _react2.default.createElement(InteractiveMap, {
              center: this.props.currentPlace.location.coordinates.slice(0).reverse(),
              centerName: this.props.currentPlace.name,
              places: this.props.places,
              poiId: this.props.activePlace,
              fill: true
            })
          ),
          _react2.default.createElement(
            "div",
            {
              className: "NearbyPlaces-expandButton",
              style: styles.expandButton.base
            },
            _react2.default.createElement(_expandButton2.default, {
              onClick: null
            })
          )
        ),
        _react2.default.createElement(
          "div",
          {
            className: "NearbyPlaces-list",
            style: style.list
          },
          places
        )
      );
    }
  }]);

  return NearbyPlaces;
}(_react2.default.Component);

NearbyPlaces.propTypes = {
  /**
   * Data for the current place
   */
  currentPlace: _react2.default.PropTypes.object.isRequired,

  /**
   * Array of nearby POIs to plot on the map
   */
  places: _react2.default.PropTypes.array.isRequired,

  /**
   * Dispatch from the store
   */
  dispatch: _react2.default.PropTypes.func,

  /**
   * The currently hovered place's atlas id
   */
  activePlace: _react2.default.PropTypes.number
};

NearbyPlaces.defaultProps = {
  currentPlace: {},

  places: []
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activePlace: state.activePlace
  };
};

NearbyPlaces = (0, _reactRedux.connect)(mapStateToProps)((0, _radium2.default)(NearbyPlaces));

NearbyPlaces.styles = styles;

exports.default = NearbyPlaces;