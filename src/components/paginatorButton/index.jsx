import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { rgb } from "../../utils/color";

const hoverState = {
  base: {
    color: settings.color.blue,
  },
  blue: {
    color: settings.color.blue,
  },
};

const styles = {
  base: {
    appearance: "none",
    backgroundColor: settings.color.white,
    border: 0,
    borderRadius: "50%",
    cursor: "pointer",
    display: "inline-block",
    fontSize: ".9rem",
    lineHeight: 1,
    outline: "none",
    transition: "color 400ms, box-shadow 400ms",

    ":hover": hoverState.base,
    ":focus": hoverState.base,
    ":active": hoverState.base,
  },

  size: {
    small: {
      height: "3rem",
      width: "3rem",
    },
    medium: {
      height: "4rem",
      width: "4rem",
    },
  },

  shadow: {
    loose: {
      boxShadow: `0 .2rem .8rem rgba(${rgb(settings.color.black)}, .1)`,
    },
    tight: {
      boxShadow: `0 0 .4rem rgba(${rgb(settings.color.black)}, .16)`,
    },
  },

  color: {
    blue: {
      color: settings.color.blue,

      ":hover": hoverState.blue,
      ":focus": hoverState.blue,
      ":active": hoverState.blue,
    },
  },

  align: {
    base: {
      position: "absolute",
    },
    vertical: {
      bottom: 0,
      marginBottom: "auto",
      marginTop: "auto",
      top: 0,
    },
    horizontal: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      right: 0,
    },
  },

  direction: {
    up: {
      base: {
        top: 0,
      },

      offset: {
        small: {
          top: "-1.5rem",
        },
        medium: {
          top: "-2rem",
        },
      },
    },
    down: {
      base: {
        bottom: 0,
      },

      offset: {
        small: {
          bottom: "-1.5rem",
        },
        medium: {
          bottom: "-2rem",
        },
      },
    },
    left: {
      base: {
        left: 0,
      },

      offset: {
        small: {
          left: "-1.5rem",
        },
        medium: {
          left: "-2rem",
        },
      },
    },
    right: {
      base: {
        right: 0,
      },

      offset: {
        small: {
          right: "-1.5rem",
        },
        medium: {
          right: "-2rem",
        },
      },
    },
  },
};

function PaginatorButton({
  direction,
  size,
  shadow,
  arrow,
  color,
  align,
  offset,
  onClick,
}) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (shadow) {
    style.push(styles.shadow[shadow]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (align) {
    style.push(
      styles.align.base,
      styles.align[align],
      offset ?
        styles.direction[direction].offset[size] :
        styles.direction[direction].base
    );
  }

  const iconName = `${arrow}-${direction}`;

  const label = (direction === "up" || direction === "left") ?
    "Previous" :
    "Next";

  return (
    <button
      className="PaginatorButton"
      style={style}
      title={label}
      onClick={onClick}
    >
        <Icon
          name={iconName}
          label={label}
        />
    </button>
  );
}

PaginatorButton.propTypes = {
  /**
   * Change the direction the arrow points
   */
  direction: React.PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]).isRequired,

  /**
   * Set the size of the button
   */
  size: React.PropTypes.oneOf([
    "small",
    "medium",
  ]),

  /**
   * Change the shadow
   */
  shadow: React.PropTypes.oneOf([
    "loose",
    "tight",
  ]),

  /**
   * Change the arrow icon type
   */
  arrow: React.PropTypes.oneOf([
    "chevron",
    "triangle",
  ]),

  /**
   * Change the color of the icon
   */
  color: React.PropTypes.oneOf([
    "",
    "blue",
  ]),

  /**
   * Position the button absolutely and align it
   */
  align: React.PropTypes.oneOf([
    "",
    "horizontal",
    "vertical",
  ]),

  /**
   * Offset the button when positioned absolutely; must be used with align
   */
  offset: React.PropTypes.bool,

  /**
   * Function to run when the button is clicked
   */
  onClick: React.PropTypes.func,
};

PaginatorButton.defaultProps = {
  direction: "up",

  size: "medium",

  shadow: "loose",

  arrow: "chevron",

  color: "",

  align: "",

  offset: false,

  onClick: null,
};

PaginatorButton.styles = styles;

export default radium(PaginatorButton);
