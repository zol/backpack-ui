import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { rgb } from "../../utils/color";

const styles = {
  base: {
    color: `rgba(${rgb(settings.color.text)}, .7)`,
    backgroundColor: "transparent",
    display: "block",
  },

  size: {
    small: {
      fontSize: "2rem",
      height: "2rem",
    },

    large: {
      fontSize: "2rem",
      height: "2rem",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        fontSize: "2.4rem",
        height: "2.4rem",
      },
    },
  },

  center: {
    horizontal: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      position: "absolute",
      right: 0,
    },
    vertical: {
      bottom: 0,
      marginBottom: "auto",
      marginTop: "auto",
      position: "absolute",
      top: 0,
    },
  },

  align: {
    bottom: {
      bottom: 0,
    },
    left: {
      left: 0,
    },
    right: {
      right: 0,
    },
    top: {
      top: 0,
    },
  },
};

function Bookmark({ onClick, size, center, align, marked }) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (center) {
    style.push(styles.center[center]);
  }

  if (align) {
    style.push(styles.align[align]);
  }

  const BookmarkIcon = marked ? (
    <Icon
      name="bookmark"
      label="Bookmark"
    />
  ) : (
    <Icon
      name="bookmark-outline"
      label="Bookmark"
    />
  );

  return (
    <button
      className="Bookmark"
      style={style}
      onClick={onClick}
    >
      {BookmarkIcon}
    </button>
  );
}

Bookmark.propTypes = {
  onClick: React.PropTypes.func,

  size: React.PropTypes.oneOf([
    "small",
    "large",
  ]),

  center: React.PropTypes.oneOf([
    "",
    "horizontal",
    "vertical",
  ]),

  align: React.PropTypes.oneOf([
    "",
    "bottom",
    "left",
    "right",
    "top",
  ]),

  marked: React.PropTypes.bool,
};

Bookmark.defaultProps = {
  onClick: null,

  size: "small",

  center: "",

  align: "",

  marked: false,
};

Bookmark.styles = styles;

export default radium(Bookmark);
