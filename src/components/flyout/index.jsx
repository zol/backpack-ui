import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  base: {
    backgroundColor: settings.color.white,
    borderRadius: ".4rem",
    boxShadow: `0 .2rem 1.3rem rgba(${rgb(settings.color.black)}, .2)`,
    display: "inline-block",
    lineHeight: 1,
    position: "relative",
  },

  size: {
    small: {
      fontSize: "1.3rem",
      padding: "1rem 1.6rem .8rem",
    },
  },

  arrow: {
    base: {
      color: settings.color.white,
      position: "absolute",
    },

    direction: {
      up: {
        height: ".6rem",
        top: "-.6rem",
        width: "100%",
      },
      down: {
        bottom: "-.6rem",
        height: ".6rem",
        width: "100%",
      },
      left: {
        height: "100%",
        left: "-.6rem",
        width: ".6rem",
      },
      right: {
        height: "100%",
        right: "-.6rem",
        width: ".6rem",
      },
    },

    text: {
      base: {
        display: "block",
        fontSize: "9px",
        lineHeight: 1,
        position: "absolute",
      },

      direction: {
        up: {
          bottom: "-.2rem",
          left: "50%",
          marginLeft: "-.45rem",
          textShadow: `0 -.1rem .1rem rgba(${rgb(settings.color.black)}, .05)`,
          transform: "scaleX(2)",
        },
        down: {
          left: "50%",
          marginLeft: "-.45rem",
          textShadow: `0 .1rem .1rem rgba(${rgb(settings.color.black)}, .05)`,
          top: "-.1rem",
          transform: "scaleX(2)",
        },
        left: {
          left: "-.1rem",
          marginTop: "-.4rem",
          top: "50%",
          textShadow: `-.1rem 0 .1rem rgba(${rgb(settings.color.black)}, .05)`,
          transform: "scaleY(2)",
        },
        right: {
          marginTop: "-.4rem",
          right: "-.1rem",
          top: "50%",
          textShadow: `.1rem 0 .1rem rgba(${rgb(settings.color.black)}, .05)`,
          transform: "scaleY(2)",
        },
      },
    },

    center: {
      horizontal: {
        left: 0,
        marginLeft: "auto",
        marginRight: "auto",
        right: 0,
      },
      vertical: {
        bottom: 0,
        marginBottom: "auto",
        marginTop: "auto",
        top: 0,
      },
    },
  },

  fill: {
    display: "block",
    width: "100%",
  },
};

/**
 * Flyout component
 */
function Flyout({ size, arrow, fill, children }) {
  const arrows = {
    up: "&#9650;",
    down: "&#9660;",
    left: "&#9668;",
    right: "&#9658;",
  };

  const style = {
    container: [styles.base],
    arrow: [styles.arrow.base],
    arrowText: [styles.arrow.text.base],
  };

  if (size) {
    style.container.push(styles.size[size]);
  }

  if (arrow) {
    style.arrow.push(styles.arrow.direction[arrow]);
    style.arrowText.push(styles.arrow.text.direction[arrow]);
  }

  if (arrow === "up" || arrow === "down") {
    style.arrow.push(styles.arrow.center.horizontal);
  }

  if (arrow === "left" || arrow === "right") {
    style.arrow.push(styles.arrow.center.vertical);
  }

  if (fill) {
    style.container.push(styles.fill);
  }

  function markup() {
    return {
      __html: arrows[arrow],
    };
  }

  return (
    <div
      className="Flyout"
      style={style.container}
    >
      <div className="Flyout-content">
        {children}
      </div>

      <div
        className="Flyout-arrow"
        style={style.arrow}
      >
        <span
          style={style.arrowText}
          dangerouslySetInnerHTML={markup()}
        >
        </span>
      </div>
    </div>
  );
}

Flyout.propTypes = {
  /**
   * Content for the flyout
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Size of the flyout
   */
  size: React.PropTypes.oneOf([
    "small",
  ]),

  /**
   * Position of the flyout arrow
   */
  arrow: React.PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Whether or not the flyout should fill its parent's width
   */
  fill: React.PropTypes.bool,
};

Flyout.defaultProps = {
  size: "small",

  arrow: "down",

  fill: false,
};

Flyout.styles = styles;

export default radium(Flyout);
