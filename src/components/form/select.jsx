import React from "react";
import radium from "radium";
import styles from "./styles";

function Select({
  id,
  options,
  label,
  name,
  defaultValue,
  required,
  size,
  theme,
  noBorder,
  style,
  onChange,
}) {
  const componentStyles = [styles.base, style];

  componentStyles.push(styles.element.select.base);

  if (size) {
    componentStyles.push(styles.size[size]);
    componentStyles.push(styles.element.select.size[size]);
  }

  if (theme) {
    componentStyles.push(styles.theme[theme]);
    componentStyles.push(styles.element.select.theme[theme]);
  }

  if (noBorder) {
    componentStyles.push(styles.noBorder);
  }

  return (
    <select
      style={componentStyles}
      id={id}
      name={name || id}
      defaultValue={defaultValue}
      required={required}
      aria-label={label}
      title={label}
      onChange={onChange}
    >
      {options.map((value, index) => (
        <option
          value={value}
          key={index}
        >
          {value}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: React.PropTypes.string.isRequired,

  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,

  label: React.PropTypes.string.isRequired,

  name: React.PropTypes.string,

  defaultValue: React.PropTypes.string,

  required: React.PropTypes.bool,

  size: React.PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  theme: React.PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "inputGroup",
  ]),

  /**
   * Remove border
   */
  noBorder: React.PropTypes.bool,

  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),

  /**
   * onChange function for the select element
   */
  onChange: React.PropTypes.func,
};

Select.defaultProps = {
  id: "",

  options: [],

  label: "",

  name: "",

  defaultValue: "",

  required: false,

  size: "medium",

  theme: "base",

  noBorder: false,

  style: {},
};

Select.styles = styles;

export default radium(Select);
