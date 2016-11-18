import React, { PropTypes } from "react";
import { color, timing } from "../../../settings.json";
import font from "../../utils/font";
import { add, span, gutter } from "../../utils/grid";
import Icon from "../icon";
import Heading from "../heading";

const containerMaxWidth = add([span(2, "static"), gutter("static")], "static");

const styles = {
  container: {
    display: "flex",
    flexGrow: 1,
    fontFamily: font("benton"),
    justifyContent: "center",
    maxWidth: containerMaxWidth,
    textAlign: "center",
  },

  anchor: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },

  icon: {
    color: color.blue,
    fontSize: "96px",
    transition: `transform ${timing.default} ease-in-out`,
  },

  heading: {
    fontSize: "18px",
    marginTop: "35px",
    transition: `color ${timing.default} ease-in-out`,
  },

  copy: {
    color: color.lightText,
    fontSize: "16px",
    lineHeight: (24 / 16),
    marginBottom: "26px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "13px",
  },

  link: {
    color: color.blue,
    fontSize: "11px",
    marginTop: "auto",
    textTransform: "uppercase",
  },
};

function IconCallout({ iconName, title, copy, link }) {
  const IconElement = React.createElement(Icon[iconName], {
    style: styles.icon,
    ariaHidden: true,
  });

  return (
    <div className="IconCallout" style={styles.container}>
      <a href={link.href} style={styles.anchor}>
        {IconElement}

        <Heading level={3} override={styles.heading}>
          {title}
        </Heading>

        <p style={styles.copy}>
          {copy}
        </p>

        {link.label &&
          <span style={styles.link}>
            {link.label}
          </span>
        }
      </a>
    </div>
  );
}

IconCallout.propTypes = {
  iconName: PropTypes.oneOf(Object.keys(Icon)).isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  link: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};

export default IconCallout;
