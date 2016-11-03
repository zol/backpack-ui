import React from "react";
import radium from "radium";
import styles from "./styles";
import Icon from "../icon";

function ShareMenuItem({ network, href, label, onClick }) {
  const NetworkIcon = React.createElement(Icon[network], {
    height: "16px",
    width: "16px",
  });

  return (
    <a
      className="ShareMenu-item"
      style={styles.item.base}
      data-network={network}
      onClick={onClick}
      href={href}
    >
      {NetworkIcon}

      <span style={styles.item.label}>
        {label}
      </span>
    </a>
  );
}

ShareMenuItem.propTypes = {
  /**
   * Slugified name of the sharable network
   */
  network: React.PropTypes.oneOf([
    "twitter",
    "facebook",
    "email",
  ]).isRequired,

  /**
   * URL of network's share method
   */
  href: React.PropTypes.string.isRequired,

  /**
   * Text label to show next to icon
   */
  label: React.PropTypes.string.isRequired,

  /**
   * Function to run when button is clicked
   */
  onClick: React.PropTypes.func,
};

ShareMenuItem.defaultProps = {
  network: "",

  href: "",

  label: "",

  onClick: null,
};

export default radium(ShareMenuItem);
