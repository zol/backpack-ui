import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { rgb } from "../../utils/color";

const styles = {
  base: {
    backgroundColor: `rgba(${rgb(settings.color.black)}, .6)`,
    borderRadius: settings.layout.borderRadius,
    color: settings.color.white,
    display: "block",
    height: "2.4rem",
    fontSize: "1.4rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    transition: "background-color 400ms linear",
    width: "auto",

    ":hover": {
      backgroundColor: `rgba(${rgb(settings.color.black)}, .9)`,
    },
    ":active": {
      backgroundColor: `rgba(${rgb(settings.color.black)}, .9)`,
    },
    ":focus": {
      backgroundColor: `rgba(${rgb(settings.color.black)}, .9)`,
    },
  },

  element: {
    label: {
      fontSize: "1rem",
      marginRight: ".7rem",
    },
  },
};

/**
 * ExpandButton component
 *
 * @usage
 * <ExpandButton />
 */
function ExpandButton({ label, onClick }) {
  const style = {
    container: [styles.base],
    label: [styles.element.label],
  };

  return (
    <button
      className="ExpandButton"
      style={style.container}
      aria-label="Expand"
      onClick={onClick}
    >
      {label &&
        <small
          className="ExpandButton-label"
          style={style.label}
        >
          {label}
        </small>
      }

      <Icon
        name="pop-out"
      />
    </button>
  );
}

ExpandButton.propTypes = {
  /**
   * Text to be placed to the right of the icon
   */
  label: React.PropTypes.string,

  /**
   * Perform an action when the button is clicked
   */
  onClick: React.PropTypes.func,
};

ExpandButton.defaultProps = {
  label: "",

  onClick: null,
};

ExpandButton.styles = styles;

export default radium(ExpandButton);
