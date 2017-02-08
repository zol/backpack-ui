import React from "react";
import radium from "radium";
import Heading from "../heading";
import settings from "../../../settings.json";

const styles = {
  container: {
    textAlign: "center"
  },

  heading: {
    marginBottom: "1.3rem",
    lineHeight: 1.3,
    fontSize: "2.8rem",

    [`@media (min-width: ${settings.media.min["720"]})`]: {
      fontSize: "4.5rem"
    },
  },

  divider: {
    borderColor: settings.color.red,
    width: "3rem",
    borderStyle: "solid",
    borderWidth: "1px",
    marginBottom: "3.1rem"
  }
};

const SectionHeader = ({ title, heading }) => {
  heading = heading || {};
  heading.size = heading.size || "large";
  heading.weight = heading.weight || "extraThin";

  return (
    <div style={styles.container}>
      <Heading {...heading} override={styles.heading}>
        {title}
      </Heading>
      <hr style={styles.divider} />
    </div>
  );
}

SectionHeader.propTypes = {
  title: React.PropTypes.node.isRequired,
  heading: React.PropTypes.shape(Heading.propTypes).isRequired,
};

SectionHeader.defaultProps = {
  title: "",
  heading: {}
};

SectionHeader.styles = styles;

export default radium(SectionHeader);