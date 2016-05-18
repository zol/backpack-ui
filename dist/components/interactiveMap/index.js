"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require("react-redux");

var _reactLeaflet = require("react-leaflet");

var _leaflet = require("leaflet");

var _leaflet2 = _interopRequireDefault(_leaflet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import actions from "../../actions";

var styles = {
  container: {
    base: {},

    fill: {
      height: "100%",
      width: "100%"
    }
  },

  map: {
    base: {
      height: "100%",
      width: "100%"
    }
  }
};

var InteractiveMap = function (_React$Component) {
  _inherits(InteractiveMap, _React$Component);

  function InteractiveMap() {
    _classCallCheck(this, InteractiveMap);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InteractiveMap).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(InteractiveMap, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var center = _props.center;
      var centerName = _props.centerName;
      var places = _props.places;
      var fill = _props.fill;
      var poiId = _props.poiId;


      var accessToken = "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6ImNpajYyZW1iMjAwO" + "G51bWx2YW50ejNmN2IifQ.neyeEEzBkaNKcKUzCe3s2Q";

      var style = {
        container: [styles.container.base]
      };

      if (fill) {
        style.container.push(styles.container.fill);
      }

      var Markers = places.map(function (place) {
        var id = parseInt(place.id, 10);
        var markerOpacity = id === poiId ? 1 : 0.4;

        return _react2.default.createElement(
          _reactLeaflet.Marker,
          {
            opacity: markerOpacity,
            position: place.location.coordinates.slice(0).reverse(),
            icon: _leaflet2.default.icon({
              iconUrl: "//assets.staticlp.com/assets/mapPin-secondary.png",
              iconSize: [30, 30]
            }),
            key: place.id,
            zIndexOffset: 1,
            onMouseover: function onMouseover() {
              return _this2.props.dispatch(actions.hoverPlace(id));
            }
          },
          _react2.default.createElement(
            _reactLeaflet.Popup,
            null,
            _react2.default.createElement(
              "strong",
              null,
              place.name
            )
          )
        );
      });

      return _react2.default.createElement(
        "div",
        {
          className: "InteractiveMap",
          style: style.container
        },
        _react2.default.createElement(
          _reactLeaflet.Map,
          {
            scrollWheelZoom: false,
            center: center,
            zoom: 14,
            style: styles.map.base
          },
          _react2.default.createElement(_reactLeaflet.TileLayer, {
            id: "lonelyplanet.04cf7895",
            accessToken: accessToken,
            attribution: "© <a href=`http://osm.org/copyright`>OpenStreetMap</a> contributors",
            url: "http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          }),
          _react2.default.createElement(
            _reactLeaflet.Marker,
            {
              opacity: 1,
              position: center,
              icon: _leaflet2.default.icon({
                iconUrl: "//assets.staticlp.com/assets/mapPin-primary.png",
                iconSize: [40, 40]
              })
            },
            _react2.default.createElement(
              _reactLeaflet.Popup,
              null,
              _react2.default.createElement(
                "strong",
                null,
                centerName
              )
            )
          ),
          Markers
        )
      );
    }
  }]);

  return InteractiveMap;
}(_react2.default.Component);

InteractiveMap.propTypes = {
  /**
   * Coordinates for the map center point
   */
  center: _react2.default.PropTypes.array.isRequired,

  /**
   * Name of the POI at the center point
   */
  centerName: _react2.default.PropTypes.string,

  /**
   * An array of places to plot on the map
   */
  places: _react2.default.PropTypes.array.isRequired,

  /**
   * Allow the map to fill its parent's dimentions
   */
  fill: _react2.default.PropTypes.bool,

  /**
   * ID of POI that's selected
   */
  poiId: _react2.default.PropTypes.number,

  /**
   * Dispatch from the store
   */
  dispatch: _react2.default.PropTypes.func
};

InteractiveMap.defaultProps = {
  center: [],

  centerName: "",

  places: [],

  fill: false
};

InteractiveMap.styles = styles;

exports.default = (0, _reactRedux.connect)()((0, _radium2.default)(InteractiveMap));