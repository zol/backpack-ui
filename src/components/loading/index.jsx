import React from "react"; // eslint-disable-line no-unused-vars
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { gutter } from "../../utils/grid";

const styles = {
  base: {
    color: settings.color.footerCopyright,
    fontSize: "4rem",
    opacity: 1,
    paddingBottom: gutter(),
    paddingTop: gutter(),
    textAlign: "center",
    transition: "opacity 400ms ease",
  },
};

/**
 * Loading component
 */
function Loading() {
  return (
    <div
      className="Loading"
      style={styles.base}
    >
      <Icon
        name="loading"
        animation="spin"
      />
    </div>
  );
}

Loading.styles = styles;

export default radium(Loading);
