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
    backgroundColor: settings.color.white,
    color: settings.color.blue,

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
function MoreLink({ href, size, children, onClick }) {
  const style = [styles.base];
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";
  if (size) {
    style.push(styles.size[size]);
  }

  return (
    <Element
      className="MoreLink"
      style={style}
      href={href}
      onClick={onClick}
      role={role}
    >
        {children}
        <Icon
          name="chevron-right"
          size="tiny"
          inline="after"
        />
    </Element>
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

  /**
  * Fires onclick function
  */
  onClick: React.PropTypes.func,
};

MoreLink.defaultProps = {
  href: "",

  size: "",

  onClick: null,
};

MoreLink.styles = styles;

export default radium(MoreLink);
