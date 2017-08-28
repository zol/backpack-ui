import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import color from "../../styles/colors";
import * as typography from "../../styles/typography";

const styles = {
  title: {
    paddingTop: "16px",
    display: "block",
    lineHeight: 1,
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
    <label htmlFor={htmlFor} style={styles.title}>
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
