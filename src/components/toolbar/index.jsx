import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import Icon from "../icon";

const hover = {
  color: color.blue,
};

const styles = {
  container: {
    base: {
      alignItems: "center",
      borderBottom: `.1rem solid ${color.gray}`,
      borderTop: `.1rem solid ${color.gray}`,
      color: color.darkGray,
      display: "flex",
      fontSize: "1.1rem",
      fontWeight: 600,
      lineHeight: 1,
      paddingBottom: "3.8rem",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem",
      paddingTop: "4rem",
    },
  },

  link: {
    base: {
      color: "currentColor",
      display: "block",
      flexGrow: 1,
      textAlign: "center",
      transition: "color 400ms",

      ":hover": hover,
      ":active": hover,
      ":focus": hover,
    },
  },

  icon: {
    base: {
      fontSize: "2.1rem",
      marginBottom: "1.1rem",
    },
  },
};

/**
 * Toolbar component
 */
function Toolbar({ phone, website, directions }) {
  return (
    <div
      className="Toolbar"
      style={styles.container.base}
    >
      {phone &&
        <a
          href="tel:"
          style={styles.link.base}
          key="phone"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="mobile" />
          </div>
          Call
        </a>
      }

      {website &&
        <a
          href={website}
          style={styles.link.base}
          key="website"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="globe" />
          </div>
          Visit
        </a>
      }

      {directions &&
        <a
          href={website}
          style={styles.link.base}
          key="directions"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="compass" />
          </div>
          Map
        </a>
      }
    </div>
  );
}

Toolbar.propTypes = {
  /**
   * Phone number for POI
   */
  phone: React.PropTypes.string,

  /**
   * Website URL for POI
   */
  website: React.PropTypes.string,

  /**
   * Address or coordinates for POI
   */
  directions: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
};

Toolbar.defaultProps = {
  phone: "",

  website: "",

  directions: "",
};

Toolbar.styles = styles;

export default radium(Toolbar);
