import React from "react";
import radium from "radium";
import assign from "object-assign";
import Icon from "../icon";
import { blueLink } from "../../utils/mixins";

const styles = {
  container: {
    base: assign({}, blueLink(), {
      backgroundColor: "transparent",
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: 1,
    }),

    caps: {
      fontWeight: 600,
      textTransform: "uppercase",
    },

    size: {
      small: {
        fontSize: "11px",
      },
    },
  },

  icon: {
    base: {
      verticalAlign: "baseline",
      top: `${-2 / 13}em`,
    },

    size: {
      small: {
        top: `${-1 / 11}em`,
      },
    },
  },
};

/**
 * MoreLink component
 *
 * @usage
 * <MoreLink href="/foo">View all tours</MoreLink>
 */
function MoreLink({ href, size, children, onClick, caps, style }) {
  const Element = href ? "a" : "button";

  return (
    <Element
      className="MoreLink"
      style={[
        styles.container.base,
        caps && styles.container.caps,
        size && styles.container.size[size],
        style,
      ]}
      href={href}
      onClick={onClick}
    >
      {children}
      <Icon
        name="chevron-right"
        size="tiny"
        inline="after"
        style={[
          styles.icon.base,
          size && styles.icon.size[size],
        ]}
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

  /**
   * Applies textTransform and fontWeight CSS properties
   */
  caps: React.PropTypes.bool,

  /**
   * Object to add override or positioning styles
   */
  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),
};

MoreLink.defaultProps = {
  href: "",

  size: "",

  onClick: null,

  caps: false,

  style: {},
};

MoreLink.styles = styles;

export default radium(MoreLink);
