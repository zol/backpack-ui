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
      marginLeft: ".5em",
      position: "relative",
      top: `${-2 / 13}em`,
      verticalAlign: "baseline",
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
function MoreLink({ href, size, children, onClick, caps, hideIcon, style }) {
  const Element = href ? "a" : "button";
  const iconStyle = assign({}, styles.icon.base, size && styles.icon.size[size]);

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
      {!hideIcon &&
        <Icon.ChevronRight
          height="6px"
          width="6px"
          style={iconStyle}
        />
      }
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
   * If the arrow icon should be hidden
   */
  hideIcon: React.PropTypes.bool,

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

  hideIcon: false,

  style: {},
};

MoreLink.styles = styles;

export default radium(MoreLink);
