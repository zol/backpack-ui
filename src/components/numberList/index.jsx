import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import NumberMarker from "../numberMarker";

const styles = {
  container: {
    base: {
      color: color.darkGray,
      fontSize: "1.4rem",
      lineHeight: (22 / 14),
    },
  },

  list: {
    base: {
      listStyle: "none",
    },
  },

  item: {
    base: {
      borderBottom: `1px solid ${color.gray}`,
      display: "flex",
      padding: "13px 12px 13px 6px",
    },

    notFirst: {
      marginTop: "3px",
    },
  },

  marker: {
    base: {
      marginTop: "3px",
      padding: "5px",
    },
  },

  link: {
    base: {
      marginLeft: "26px",
    },
  },

  anchor: {
    base: {
      color: "currentColor",
      transition: "color 400ms",

      ":hover": {
        color: color.blue,
      },
      ":active": {
        color: color.blue,
      },
      ":focus": {
        color: color.blue,
      },
    },
  },
};

function NumberList({ list, itemType, itemSize }) {
  return (
    <div
      className="NumberList"
      style={styles.container.base}
    >
      <ul style={styles.list.base}>
        {list.map(({ title, subtitle, url }, i) => (
          <li
            className="NumberList-item"
            style={[styles.item.base, i !== 0 && styles.item.notFirst]}
            key={i + 1}
          >
            <div
              className="NumberList-marker"
              style={styles.marker.base}
            >
              <NumberMarker
                number={i + 1}
                size={itemSize}
                type={itemType}
                outlined
              />
            </div>

            <div
              className="NumberList-link"
              style={styles.link.base}
            >
              <a
                style={styles.anchor.base}
                href={url}
                key={i + 1}
              >
                {title}
              </a>

              {subtitle &&
                <span>{subtitle}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

NumberList.propTypes = {
  /**
   * An array of items to list
   */
  list: React.PropTypes.array.isRequired,

  itemStyle: React.PropTypes.oneOf([
    "diamond",
    "circle",
  ])
};

NumberList.defaultProps = {
  list: [],
  itemStyle: "diamond",
};

NumberList.styles = styles;

export default radium(NumberList);
