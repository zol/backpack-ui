import React from "react";
import radium from "radium";
import { gutter, span } from "../../utils/grid";

const styles = {
  container: {
    base: {
      fontSize: "1.3rem",
      lineHeight: (24 / 13),
    },
  },

  list: {
    base: {
      marginTop: "-.5rem", // bring top of text 30px from header
    },

    single: {
      listStyle: "none",
    },

    grouped: {},
  },

  item: {
    base: {},

    single: {},

    grouped: {
      base: {
        WebkitColumnBreakInside: "avoid",
        pageBreakInside: "avoid",
        breakInside: "avoid",
      },

      notFirst: {
        marginTop: "2.3rem",
      },
    },
  },

  heading: {
    base: {},

    single: {},

    grouped: {
      fontSize: "1.4rem",
      lineHeight: (24 / 14),
      fontWeight: 600,
    },
  },
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const getListItems = (items) => {
  const ListItems = items.map((item, index) => (
    <li
      key={index}
      dangerouslySetInnerHTML={markup(item)}
    >
    </li>
  ));

  return ListItems;
};

const getGroupedItems = (items) => {
  const GroupedItems = items.map((group, index) => {
    const groupedItemStyle = [styles.item.grouped.base];

    if (index !== 0) {
      groupedItemStyle.push(styles.item.grouped.notFirst);
    }

    return (
      <div
        style={groupedItemStyle}
        key={index}
      >
        <h5 style={styles.heading.grouped}>
          {group.title}
        </h5>

        <ul style={styles.list.single}>
          {getListItems(group.items, "grouped")}
        </ul>
      </div>
    );
  });

  return GroupedItems;
};

/**
 * Amenities list component
 */
function Amenities({ columns, items, listType }) {
  const columnWidth = span(`${(6 / columns)} of 6`, "static");

  const style = {
    list: {
      single: [styles.list.base, styles.list.single],
      grouped: [styles.list.base, styles.list.grouped],
    },
  };

  if (columns !== 1) {
    style.list[listType].push({
      columns: `${columns} ${columnWidth}`,
      columnGap: gutter("static"),
    });
  }

  const ListComponent = listType === "single" ? (
    <ul
      className="Amenities-list"
      style={style.list.single}
    >
      {getListItems(items)}
    </ul>
  ) : (
    <div
      className="Amenities-list"
      style={style.list.grouped}
    >
      {getGroupedItems(items)}
    </div>
  );

  return (
    <div
      className="Amenities"
      style={styles.container.base}
    >
      {ListComponent}
    </div>
  );
}

Amenities.propTypes = {
  /**
   * Data
   */
  items: React.PropTypes.array.isRequired,

  /**
   * Number of columns to span
   */
  columns: React.PropTypes.oneOf([
    1,
    2,
    3,
  ]),

  /**
   * Type of list
   */
  listType: React.PropTypes.oneOf([
    "single",
    "grouped",
  ]),
};

Amenities.defaultProps = {
  items: [],

  columns: 1,

  listType: "single",
};

Amenities.styles = styles;

export default radium(Amenities);
