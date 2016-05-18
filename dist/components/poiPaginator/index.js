"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _heading = require("../heading");

var _heading2 = _interopRequireDefault(_heading);

var _strapline = require("../strapline");

var _strapline2 = _interopRequireDefault(_strapline);

var _paginatorButton = require("../paginatorButton");

var _paginatorButton2 = _interopRequireDefault(_paginatorButton);

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: (0, _grid.add)([(0, _grid.gutter)("static"), (0, _grid.gutter)("static"), (0, _grid.span)(4, "static")], "static"),
      textAlign: "center"
    }
  },

  strapline: {
    base: {
      marginBottom: "2.7rem",
      marginTop: "2.1rem"
    }
  }
};

/**
 * PoiPaginator component
 */
function PoiPaginator(_ref) {
  var title = _ref.title;
  var slug = _ref.slug;
  var topChoice = _ref.topChoice;
  var type = _ref.type;
  var neighborhood = _ref.neighborhood;
  var place = _ref.place;
  var onClick = _ref.onClick;

  var TopChoiceText = void 0;
  var PlaceText = void 0;

  if (topChoice) {
    TopChoiceText = _react2.default.createElement(
      "em",
      { style: styles.topChoice },
      "Top choice ",
      type.toLowerCase()
    );
  } else {
    TopChoiceText = "" + type.toLowerCase();
  }

  if (neighborhood) {
    PlaceText = "located in the " + neighborhood + " neighbourhood";
  } else if (place) {
    PlaceText = "located in " + place;
  }

  var headingText = slug ? _react2.default.createElement(
    "span",
    null,
    "You might also like ",
    _react2.default.createElement(
      "a",
      { href: slug },
      title
    )
  ) : _react2.default.createElement(
    "span",
    null,
    "You might also like ",
    title
  );

  return _react2.default.createElement(
    "div",
    {
      className: "PoiPaginator",
      style: styles.container.base
    },
    _react2.default.createElement(
      _heading2.default,
      {
        level: 4,
        size: "medium",
        weight: "thin",
        importance: "high",
        override: {
          lineHeight: 1
        }
      },
      headingText
    ),
    type && _react2.default.createElement(
      "div",
      {
        className: "PoiPaginator-strapline",
        style: styles.strapline.base
      },
      _react2.default.createElement(
        _strapline2.default,
        {
          size: "tiny",
          color: "gray"
        },
        TopChoiceText,
        " ",
        PlaceText
      )
    ),
    _react2.default.createElement(_paginatorButton2.default, {
      direction: "down",
      color: "blue",
      shadow: "tight",
      size: "small",
      arrow: "triangle",
      onClick: onClick
    })
  );
}

PoiPaginator.propTypes = {
  /**
   * Name of the POI
   */
  title: _react2.default.PropTypes.string.isRequired,

  /**
   * URL slug of the POI
   */
  slug: _react2.default.PropTypes.string.isRequired,

  /**
   * Show the top choice text
   */
  topChoice: _react2.default.PropTypes.bool,

  /**
   * Type of POI
   */
  type: _react2.default.PropTypes.string,

  /**
   * Neighborhood where the POI is located
   */
  neighborhood: _react2.default.PropTypes.string,

  /**
   * Where the POI is located, if neighborhood is null
   */
  place: _react2.default.PropTypes.string,

  /**
   * Function to run on button click
   */
  onClick: _react2.default.PropTypes.func
};

PoiPaginator.defaultProps = {
  title: "",

  slug: "",

  topChoice: false,

  type: "",

  neighborhood: "",

  place: "",

  onClick: null
};

PoiPaginator.styles = styles;

exports.default = (0, _radium2.default)(PoiPaginator);