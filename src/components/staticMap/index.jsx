"use strict";

import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import { span, percentage } from "../../utils/grid";

const styles = {
  container: {
    base: {},

    sidebar: {
      marginTop: "1.4rem",
    },
  },

  image: {
    base: {
      display: "block",
    },

    sidebar: {
      height: "auto",
      maxHeight: "9rem",
      maxWidth: "27.8rem",
      width: percentage("27.8rem", `${span(3, "static")}`),
    },
  },

  attribution: {
    base: {
      color: color.lightText,
      display: "inline-block",
      fontSize: ".9rem",
      letterSpacing: ".1px",
      marginTop: ".4rem",
    },

    link: {
      color: "currentColor",
    },
  },
};

/**
 * Generate a static map
 */
function StaticMap({ token, location, size, sidebar }) {
  const baseUrl = "http://api.tiles.mapbox.com/v4/lonelyplanet.04cf7895";
  const customMarkerUrl = "https://assets.staticlp.com/assets/mapPin-primary-small.png";
  const customMarker = `url-${encodeURIComponent(customMarkerUrl)}(${location})`;
  const url = `${baseUrl}/${customMarker}/${location},14/${size}.jpg70?access_token=${token}`;

  const style = {
    container: [styles.container.base],
    image: [styles.image.base],
  };

  if (sidebar) {
    style.container.push(styles.container.sidebar);
    style.image.push(styles.image.sidebar);
  }

  return (
    <div
      className="StaticMap"
      style={style.container}
    >
      <img
        className="StaticMap-image"
        style={style.image}
        src={url}
      />
      <small
        className="StaticMap-attribution"
        style={styles.attribution.base}
      >
        &copy; <a style={styles.attribution.link} href="https://www.mapbox.com/map-feedback/">Mapbox</a> &copy; <a style={styles.attribution.link} href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
      </small>
    </div>
  );
}

StaticMap.propTypes = {
  /**
   * Mapbox API token
   */
  token: React.PropTypes.string.isRequired,

  /**
   * Location string as lontxlat
   */
  location: React.PropTypes.string.isRequired,

  /**
   * Size for the static image in width x height
   * Defaults to 640x480
   */
  size: React.PropTypes.string,

  /**
   * If the static map is located within the sidebar (POI)
   */
  sidebar: React.PropTypes.bool,
};

const token = "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6ImNpajYyZW1iMjAwO" +
              "G51bWx2YW50ejNmN2IifQ.neyeEEzBkaNKcKUzCe3s2Q";
StaticMap.defaultProps = {
  token,

  location: "",

  size: "640x480",

  sidebar: false,
};

StaticMap.styles = styles;

export default radium(StaticMap);
