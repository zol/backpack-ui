import React from "react";
import radium from "radium";
import Heading from "../heading";
import settings from "../../../settings.json";

const styles = {
  container: {
    textAlign: "center",
  },

  heading: {
    marginBottom: "13px",
    lineHeight: 1.3,
    fontSize: "28px",

    [`@media (min-width: ${settings.media.min["720"]})`]: {
      fontSize: "45px",
    },
  },

  divider: {
    borderColor: settings.color.red,
    width: "30px",
    borderStyle: "solid",
    borderWidth: "1px",
    marginBottom: "31px",
  },

};

const SectionHeader = ({ children, heading }) => {
  heading = heading || {};
  heading.size = heading.size || "large";
  heading.weight = heading.weight || "extraThin";

  return (
    <div style={styles.container}>
      <Heading {...heading} override={styles.heading}>
        {children}
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
  children: React.PropTypes.node.isRequired,
  heading: {}
};

SectionHeader.styles = styles;

export default radium(SectionHeader);
