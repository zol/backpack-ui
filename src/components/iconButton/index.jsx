import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { darken } from "../../utils/color";

const hoverState = {
  backgroundColor: darken(settings.color.white, 9),
  textDecoration: "none",
};

const styles = {
  base: {
    appearance: "none",
    backgroundColor: darken(settings.color.white, 6),
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: "100%",
    color: settings.color.darkGray,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    lineHeight: 1,
    outline: 0,
    padding: 0,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 400ms",
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverState,
    ":focus": hoverState,
    ":active": hoverState,
  },

  size: {
    small: {
      fontSize: "1.2rem",
      height: "2rem",
      width: "2rem",
    },
    medium: {
      fontSize: "1.6rem",
      height: "3rem",
      width: "3rem",
    },
    large: {
      fontSize: "2rem",
      height: "4rem",
      width: "4rem",
    },
  },
};

function IconButton({ icon, label, className, href, onClick, size, owns }) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";

  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  return (
    <Element
      className={`${className ? `${className} ` : ""}IconButton`}
      style={style}
      href={href}
      onClick={onClick}
      role={role}
      title={label}
      aria-label={label}
      aria-owns={owns}
    >
      <Icon
        name={icon}
      />
    </Element>
  );
}

IconButton.propTypes = {
  /**
   * Name of the icon to display inside of the button
   */
  icon: React.PropTypes.string.isRequired,

  /**
   * A descriptive label of the button's purpose
   */
  label: React.PropTypes.string.isRequired,

  /**
   * A custom classname to append to the default IconButton classname
   */
  className: React.PropTypes.string,

  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: React.PropTypes.string,

  /**
   * Function to run when the button is clicked
   */
  onClick: React.PropTypes.func,

  /**
   * Size of the button
   */
  size: React.PropTypes.oneOf([
    "small",
    "medium",
    "large",
  ]),

  /**
   * The ID of the sibling element that the button owns, e.g., if the button has
   * a menu with an ID of "share-menu", then `owns="share-menu"`.
   */
  owns: React.PropTypes.string,
};

IconButton.defaultProps = {
  icon: "",

  label: "",

  className: "",

  href: "",

  onClick: null,

  size: "medium",

  owns: "",
};

IconButton.styles = styles;

export default radium(IconButton);
