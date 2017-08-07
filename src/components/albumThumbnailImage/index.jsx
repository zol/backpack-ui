import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import { fontSizeHeading7 } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { lighten, rgba } from "../../utils/color";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: colors.bgPrimary,
    color: colors.accentGray,
    display: "flex",
    fontSize: `${fontSizeHeading7}px`,
    height: "48px",
    justifyContent: "center",
    position: "relative",
    width: "52px",
  },

  icon: {
    marginLeft: "-4px",
  },

  img: {
    display: "block",
    height: "auto",
    maxHeight: "100%",
    objectFit: "cover",
    width: "100%",
  },

  overlay: {
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    width: "4px",
    zIndex: zIndex.default,
  },
};

const AlbumThumbnailImage = ({ icon, src, alt, backgroundColor, style }) => (
  <div
    className="AlbumThumbnailImage"
    style={[
      styles.container,
      { backgroundColor },
      !src && { backgroundColor: lighten(colors.accentGray, 14) },
      style,
    ]}
  >
    {src &&
      <img
        style={styles.img}
        src={src}
        alt={alt}
      />
    }

    {!src && iconFromString(icon, {
      style: styles.icon,
    })}

    <svg
      viewBox="0 0 4 48"
      style={styles.overlay}
    >
      <rect fill={colors.bgPrimary} width="1" height="48" />
      <polygon fill={colors.bgPrimary} points="4,1 4,0 3,0 2,0 2,48 3,48 4,48 4,47 3,47 3,1" />
      {src && <rect fill={`${rgba(colors.bgOverlay, 0.4)}`} x="1" width="1" height="48" />}
      {src && <rect fill={`${rgba(colors.bgOverlay, 0.4)}`} x="3" y="1" width="1" height="46" />}
    </svg>
  </div>
);

AlbumThumbnailImage.propTypes = {
  icon: PropTypes.oneOf(["Plus", "List"]),
  src: PropTypes.string,
  alt: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: propTypes.style,
};

AlbumThumbnailImage.defaultProps = {
  icon: "List",
  src: null,
  alt: "",
  backgroundColor: colors.bgPrimary,
  style: null,
};

export default radium(AlbumThumbnailImage);
