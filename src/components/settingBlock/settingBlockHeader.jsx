import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import color from "../../styles/colors";
import * as typography from "../../styles/typography";

const styles = {
  label: {
    display: "block",
    fontSize: `${typography.fontSizeHeading7}px`,
    fontWeight: typography.fontWeightMedium,
    lineHeight: typography.lineHeightReset,
    paddingTop: "16px",
  },
  subtitle: {
    color: color.textSecondary,
    fontWeight: typography.fontWeightLight,
    marginTop: "4px",
    fontSize: typography.fontSizeUppercase,
    lineHeight: 1,
  },
};

const SettingBlockHeader = ({ children, htmlFor, subtitle }) => (
  <div className="SettingBlockHeader">
    <label htmlFor={htmlFor} style={styles.label}>
      {children}
    </label>

    { subtitle && <p style={styles.subtitle}>{subtitle}</p>}
  </div>
);

SettingBlockHeader.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  subtitle: PropTypes.string,
};

export default radium(SettingBlockHeader);
