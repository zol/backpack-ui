import React from "react";
import radium, { Style } from "radium";
import { color, grid } from "../../../settings.json";
import { add, span, gutter } from "../../utils/grid";
import IconCallout from "../iconCallout";

const containerPadding = add([gutter(), span(1)]);

const styles = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    maxWidth: grid.container,
    paddingLeft: containerPadding,
    paddingRight: containerPadding,
  },
};

const scopedStyles = {
  marginLeft: `calc(${gutter("static")} / 2)`,
  marginRight: `calc(${gutter("static")} / 2)`,

  // Ideally, the anchor styles would exist within IconCallout, but we don't
  // want to repeat the <Style> block for each IconCallout

  "a:hover .IconCallout-icon": {
    transform: "translateY(-5px)",
  },

  "a:hover .Heading": {
    color: `${color.blue} !important`,
  },
};

function IconCalloutGroup({ children }) {
  return (
    <div className="IconCalloutGroup" style={styles.container}>
      <Style
        scopeSelector=".IconCallout"
        rules={scopedStyles}
      />

      {children}
    </div>
  );
}

IconCalloutGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== IconCallout) {
        error = new Error(`${componentName} children should be of type "IconCallout".`);
      }

      if (child.type === IconCallout && React.Children.count.length > 4) {
        error = new Error(`${componentName} should have no more than 4 children.`);
      }
    });

    return error;
  },
};

export default radium(IconCalloutGroup);
