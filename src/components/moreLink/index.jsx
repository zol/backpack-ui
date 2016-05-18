import React from "react";
import radium from "radium";
import color from "color";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";

const styles = {
  base: {
    fontSize: "1.3rem",
    fontWeight: 600,
    lineHeight: 1,
    textTransform: "uppercase",

    ":hover": {
      color: color(settings.color.blue).blacken(0.5),
    },

    ":active": {
      color: color(settings.color.blue).blacken(0.5),
    },

    ":focus": {
      color: color(settings.color.blue).blacken(0.5),
    },
  },

  size: {
    small: {
      fontSize: "1.1rem",
    },
  },
};

/**
 * MoreLink component
 *
 * @usage
 * <MoreLink href="/foo">View all tours</MoreLink>
 */
function MoreLink({ href, size, children }) {
  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  return (
    <a
      className="MoreLink"
      style={style}
      href={href}
    >
        {children}
        <Icon
          name="chevron-right"
          size="tiny"
          inline="after"
        />
    </a>
  );
}

MoreLink.propTypes = {
  /**
   * Content for the link
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Where the link should point to
   */
  href: React.PropTypes.string.isRequired,

  /**
   * Adjusts the font size
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
  ]),
};

MoreLink.defaultProps = {
  href: "",

  size: "",
};

MoreLink.styles = styles;

export default radium(MoreLink);
