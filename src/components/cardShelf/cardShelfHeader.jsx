import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Link from "../link";
import Heading from "../heading";
import MoreLink from "../moreLink";
import propTypes from "../../utils/propTypes";
import colors from "../../styles/colors";
import timing from "../../styles/timing";

const styles = {
  container: {
    marginBottom: "19px",
    position: "relative",
  },

  containerCompact: {
    marginBottom: "10px",
  },

  heading: {
    display: "inline-block",
    fontSize: "26px",
  },

  headingDark: {
    color: colors.textOverlay,
  },

  headingLink: {
    transition: `color ${timing.fast} ease-in-out`,
    ":hover": { color: "inherit", },
  },

  moreLink: {
    bottom: "15px",
    fontWeight: 400,
    position: "absolute",
    right: 0,
  },
};

class CardShelfHeader extends React.Component {

  render() {
    const { heading, headingHref, headingStyle, href, adSlot, theme, spacing, style } = this.props;

    let headingOverride = styles.heading;
    if (theme === "dark") {
      headingOverride = {...headingOverride, ...styles.headingDark};
    }
    if (headingHref) {
      headingOverride = {...headingOverride, ...styles.headingLink};
    }
    headingOverride = {...headingOverride, ...headingStyle};

    return (
      <header
        className="CardShelf-header"
        style={[
          styles.container,
          spacing === "compact" && styles.containerCompact,
          style
        ]}
      >
        {headingHref &&
          <Link to={headingHref}>
          <Heading
            level={2}
            weight="thin"
            override={headingOverride}
          >
            {heading}
          </Heading>
          </Link>
        }

        {!headingHref &&
          <Heading
            level={2}
            weight="thin"
            override={headingOverride}
          >
            {heading}
          </Heading>
        }

        {adSlot}

        {href &&
          <Link to={href}>
            <MoreLink
              style={styles.moreLink}
              size="small"
              caps
            >
              View more
            </MoreLink>
          </Link>
        }
      </header>
    );
  }
};

CardShelfHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  headingHref: PropTypes.string,
  href: PropTypes.string,
  adSlot: PropTypes.element,
  theme: PropTypes.oneOf([
    "light",
    "dark",
  ]),
  spacing: PropTypes.oneOf([
    "normal",
    "compact",
  ]),
  headingStyle: propTypes.style,
  style: propTypes.style,
};

CardShelfHeader.defaultProps = {
  theme: "light",
  spacing: "normal",
}

export default radium(CardShelfHeader);
