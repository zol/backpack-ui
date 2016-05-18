import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";

const styles = {
  base: {
    display: "inline-block",
    fill: "currentColor",
    height: "1em",
    verticalAlign: "middle",
    width: "1em",
  },

  position: {
    inline: {
      base: {
        lineHeight: 1,
        position: "relative",
        verticalAlign: "initial",
      },
      before: {
        marginRight: ".5em",
      },
      after: {
        marginLeft: ".5em",
      },
    },
  },

  size: {
    fit: {
      height: "100%",
      width: "100%",
    },
    medium: {
      height: "1.6rem",
      width: "1.6rem",
    },
    small: {
      height: "1rem",
      width: "1rem",
    },
    tiny: {
      height: ".6rem",
      width: ".6rem",
    },
    half: {
      height: ".5em",
      width: ".5em",
    },
  },

  color: {
    blue: {
      fill: settings.color.blue,
    },
    gray: {
      fill: settings.color.footerCopyright,
    },
  },

  animation: {
    spin: {
      animation: "spin 500ms linear infinite",
    },
  },
};

/**
 * Icon component
 *
 * The icon component renders an inline SVG element.
 *
 * @usage
 * <Icon name="heart" size="small" />
 */
function Icon({ name, size, inline, color, label, dimensions, animation }) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  if (inline) {
    style.push(styles.position.inline.base, styles.position.inline[inline]);
  }

  if (color) {
    style.push(styles.color[color]);
  }

  if (animation) {
    style.push(styles.animation[animation]);
  }

  if (dimensions && dimensions.width) {
    style.push({
      width: dimensions.width,
    });
  }

  if (dimensions && dimensions.height) {
    style.push({
      height: dimensions.height,
    });
  }

  if (label) {
    return (
      <svg
        className="Icon"
        style={style}
        aria-label={label}
      >
        <use
          xlinkHref={`#lp-icon-${name}`}
        />
      </svg>
    );
  }

  return (
    <svg
      className="Icon"
      style={style}
      aria-hidden="true"
    >
      <use
        xlinkHref={`#lp-icon-${name}`}
      />
    </svg>
  );
}

Icon.propTypes = {
  /**
   * The icon name is the part after `#lp-icon-` found on the ID of each of the
   * symbols within the SVG sprite.
   */
  name: React.PropTypes.string.isRequired,

  /**
   * The style definition for each size can be found in icons.scss.
   */
  size: React.PropTypes.oneOf([
    "",
    "fit",
    "medium",
    "small",
    "tiny",
    "half",
  ]),

  /**
   * Describes how to align the icon
   */
  inline: React.PropTypes.oneOf([
    "",
    "before",
    "after",
  ]),

  /**
   * A text label to describe the icon
   */
  label: React.PropTypes.string,

  /**
   * Override the icon color
   */
  color: React.PropTypes.string,

  /**
   * Override width and height
   */
  dimensions: React.PropTypes.object,

  /**
   * Name of CSS animation to apply
   */
  animation: React.PropTypes.string,
};

Icon.defaultProps = {
  name: "",

  size: "",

  inline: "",

  label: "",

  color: "",

  dimensions: {},

  animation: "",
};

Icon.styles = styles;

export default radium(Icon);
