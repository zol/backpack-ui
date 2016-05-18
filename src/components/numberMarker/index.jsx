import React from "react";
import radium from "radium";
import { color, zIndex } from "rizzo-next/sass/settings.json";
import { font } from "../../utils/font";
import { rgb } from "../../utils/color";

const { small, large } = {
  small: {
    size: "2.5rem",
    fontSize: "1.4rem",
  },

  large: {
    size: "3.6rem",
    fontSize: "2rem",
  },
};

const styles = {
  container: {
    base: {
      backfaceVisibility: "hidden",
      color: color.titleGray,
      display: "inline-block",
      fontFamily: font("miller"),
      position: "relative",
      textAlign: "center",
      zIndex: zIndex.default,
    },

    size: {
      small: {
        fontSize: small.fontSize,
        height: small.size,
        lineHeight: small.size,
        width: small.size,
      },

      large: {
        fontSize: large.fontSize,
        height: large.size,
        lineHeight: large.size,
        width: large.size,
      },
    },

    place: {
      left: "6.7rem",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },

  diamond: {
    base: {
      backgroundColor: color.white,
      boxShadow: `2px 2px 2px rgba(${rgb(color.black)}, .18)`,
      content: "",
      display: "block",
      height: "100%",
      position: "relative",
      transform: "rotate(45deg)",
      width: "100%",
      zIndex: zIndex.below,
    },

    size: {
      small: {
        borderRadius: "4px",
        marginTop: `-${small.size}`,
      },

      large: {
        borderRadius: "6px",
        marginTop: `-${large.size}`,
      },
    },
    outlined: {
      boxShadow: "0 0 0 1px #e1eaf0", // this color does not exist in settings
    },
  },

  circle: {
    base: {
      backgroundColor: color.white,
      boxShadow: `2px 2px 2px rgba(${rgb(color.black)}, .18)`,
      content: "",
      display: "block",
      height: "100%",
      position: "relative",
      width: "100%",
      zIndex: zIndex.below,
    },

    size: {
      small: {
        borderRadius: "50%",
        marginTop: `-${small.size}`,
        width: small.size,
        height: small.size,
      },

      large: {
        borderRadius: "50%",
        marginTop: `-${large.size}`,
        width: large.size,
        height: large.size,
      },
    },
    outlined: {
      boxShadow: "0 0 0 1px #e1eaf0", // this color does not exist in settings
    },
  },
};

function NumberMarker({ number, size, outlined, place, type }) {
  const style = {
    container: [styles.container.base],
  };

  if (styles[type]) {
    style[type] = [...styles[type]];
  }

  if (size) {
    style.container.push(styles.container.size[size]);
    style[type].push(styles[type].size[size]);
  }

  if (outlined) {
    style[type].push(styles[type].outlined);
  }

  if (place) {
    style.container.push(styles.container.place);
  }

  return (
    <div
      className="NumberMarker"
      style={style.container}
    >
      {number}

      <div
        className="NumberMarker-diamond"
        style={style[type]}
      />
    </div>
  );
}

NumberMarker.propTypes = {
  /**
   * Number to show
   */
  number: React.PropTypes.number.isRequired,

  /**
   * How big the marker should be
   */
  size: React.PropTypes.oneOf([
    "small",
    "large",
  ]),

  /**
   * Changes the box shadow style to look more like an outline
   */
  outlined: React.PropTypes.bool,

  /**
   * If the marker used within a place list;
   * positions the marker over an 80px wide photo
   */
  place: React.PropTypes.bool,
  type: React.PropTypes.oneOf([
    "diamond",
    "circle",
  ])
};

NumberMarker.defaultProps = {
  type: "diamond",

  number: "",

  size: "small",

  outlined: false,

  place: false,
};

NumberMarker.styles = styles;

export default radium(NumberMarker);
