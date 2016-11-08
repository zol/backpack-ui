import React, { PropTypes } from "react";
import radium from "radium";
import MoreLink from "../moreLink";

const styles = {
  container: {
    base: {
      fontSize: "28px",
      fontWeight: 300,
      lineHeight: (36 / 28),
    },
  },

  text: {
    base: {
      paddingBottom: `${14 / 28}em`,
    },
  },
};

function NoResults({ onReset, style }) {
  return (
    <div className="NoResults" style={[styles.container.base, style]}>
      <p style={styles.text.base}>
        We couldn’t find any matches.
      </p>

      <MoreLink onClick={onReset} caps>
        Reset filters
      </MoreLink>
    </div>
  );
}

NoResults.propTypes = {
  /**
   * Method to run when the reset button is clicked
   */
  onReset: PropTypes.func.isRequired,

  /**
   * Style object to add or override container styles
   */
  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),
};

NoResults.defaultProps = {
  onReset: null,

  style: {},
};

export default radium(NoResults);
