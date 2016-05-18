import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Bookmark from "../bookmark";
import Bullet from "../decoration/bullet";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    base: {
      width: "100%",
    },
  },

  anchor: {
    base: {
      display: "flex",
      position: "relative",
    },
  },

  image: {
    base: {
      display: "block",
      height: "auto",
      float: "left",
      marginRight: settings.layout.gutter,
      width: "8rem",
    },
  },

  content: {
    base: {
      alignSelf: "center",
      float: "left",
    },
  },

  details: {
    base: {
      color: `rgba(${rgb(settings.color.text)}, .5)`,
      fontSize: "1.1rem",
      lineHeight: 1,
      marginTop: ".7rem",
      textTransform: "uppercase",
    },

    item: {
      display: "inline-block",
    },
  },

  heading: {
    base: {
      color: settings.color.darkGray,
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
};

/**
 * Nearby map content module
 */
function Place({ title, slug, type, category, image, bookmark, coords, distanceToNearby }) {
  const measurement = "metric";

  const showDistance = distanceToNearby && distanceToNearby[measurement];

  return (
    <div
      className="Place clearfix"
      style={styles.container.base}
      data-type={type}
      data-lat={coords.lat}
      data-long={coords.long}
    >
      <a
        style={styles.anchor.base}
        href={slug}
      >
        <img
          className="Place-image"
          style={styles.image.base}
          src={image}
          alt=""
        />

        <div
          className="Place-content"
          style={styles.content.base}
        >
          <h3
            className="Place-heading"
            style={styles.heading.base}
          >
            {title}
          </h3>

          <ul
            className="Place-details"
            style={styles.details.base}
          >
            <li style={styles.details.item}>
              {category}
            </li>

            {showDistance &&
              <li style={styles.details.item}>
                <Bullet space="both" />
                {distanceToNearby[measurement].amount} {distanceToNearby[measurement].unit}
              </li>
            }
          </ul>
        </div>
      </a>

      {bookmark &&
        <Bookmark
          size="small"
          center="vertical"
          align="right"
          onClick={null}
        />
      }
    </div>
  );
}

Place.propTypes = {
  title: React.PropTypes.string.isRequired,

  slug: React.PropTypes.string.isRequired,

  type: React.PropTypes.oneOf([
    "",
    "nearby",
    "top",
    "sight",
    "mapSidebar",
    "mapMarker",
  ]),

  category: React.PropTypes.string,

  image: React.PropTypes.string,

  bookmark: React.PropTypes.bool,

  coords: React.PropTypes.array,

  distanceToNearby: React.PropTypes.object,
};

Place.defaultProps = {
  type: "",

  title: "",

  slug: "",

  category: "",

  image: "",

  bookmark: false,

  coords: [],

  distanceToNearby: {},
};

Place.styles = styles;

export default radium(Place);
