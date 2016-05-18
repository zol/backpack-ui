"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _grid = require("../../utils/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      fontSize: "1.3rem",
      lineHeight: 24 / 13
    }
  },

  list: {
    base: {
      marginTop: "-.5rem" },

    // bring top of text 30px from header
    single: {
      listStyle: "none"
    },

    grouped: {}
  },

  item: {
    base: {},

    single: {},

    grouped: {
      base: {
        WebkitColumnBreakInside: "avoid",
        pageBreakInside: "avoid",
        breakInside: "avoid"
      },

      notFirst: {
        marginTop: "2.3rem"
      }
    }
  },

  heading: {
    base: {},

    single: {},

    grouped: {
      fontSize: "1.4rem",
      lineHeight: 24 / 14,
      fontWeight: 600
    }
  }
};

function markup(htmlContent) {
  return {
    __html: htmlContent
  };
}

var getListItems = function getListItems(items) {
  var ListItems = items.map(function (item, index) {
    return _react2.default.createElement("li", {
      key: index,
      dangerouslySetInnerHTML: markup(item)
    });
  });

  return ListItems;
};

var getGroupedItems = function getGroupedItems(items) {
  var GroupedItems = items.map(function (group, index) {
    var groupedItemStyle = [styles.item.grouped.base];

    if (index !== 0) {
      groupedItemStyle.push(styles.item.grouped.notFirst);
    }

    return _react2.default.createElement(
      "div",
      {
        style: groupedItemStyle,
        key: index
      },
      _react2.default.createElement(
        "h5",
        { style: styles.heading.grouped },
        group.title
      ),
      _react2.default.createElement(
        "ul",
        { style: styles.list.single },
        getListItems(group.items, "grouped")
      )
    );
  });

  return GroupedItems;
};

/**
 * Amenities list component
 */
function Amenities(_ref) {
  var columns = _ref.columns;
  var items = _ref.items;
  var listType = _ref.listType;

  var columnWidth = (0, _grid.span)(6 / columns + " of 6", "static");

  var style = {
    list: {
      single: [styles.list.base, styles.list.single],
      grouped: [styles.list.base, styles.list.grouped]
    }
  };

  if (columns !== 1) {
    style.list[listType].push({
      columns: columns + " " + columnWidth,
      columnGap: (0, _grid.gutter)("static")
    });
  }

  var ListComponent = listType === "single" ? _react2.default.createElement(
    "ul",
    {
      className: "Amenities-list",
      style: style.list.single
    },
    getListItems(items)
  ) : _react2.default.createElement(
    "div",
    {
      className: "Amenities-list",
      style: style.list.grouped
    },
    getGroupedItems(items)
  );

  return _react2.default.createElement(
    "div",
    {
      className: "Amenities",
      style: styles.container.base
    },
    ListComponent
  );
}

Amenities.propTypes = {
  /**
   * Data
   */
  items: _react2.default.PropTypes.array.isRequired,

  /**
   * Number of columns to span
   */
  columns: _react2.default.PropTypes.oneOf([1, 2, 3]),

  /**
   * Type of list
   */
  listType: _react2.default.PropTypes.oneOf(["single", "grouped"])
};

Amenities.defaultProps = {
  items: [],

  columns: 1,

  listType: "single"
};

Amenities.styles = styles;

exports.default = (0, _radium2.default)(Amenities);