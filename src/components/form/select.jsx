import React from "react";
import radium from "radium";
import styles from "./styles";

function Select({ id, options, name, defaultValue, required, size, theme }) {
  const style = [styles.base];

  style.push(styles.element.select.base);

  if (size) {
    style.push(styles.size[size]);
    style.push(styles.element.select.size[size]);
  }

  if (theme) {
    style.push(styles.theme[theme]);
    style.push(styles.element.select.theme[theme]);
  }

  return (
    <select
      style={style}
      id={id}
      name={name || id}
      defaultValue={defaultValue}
      required={required}
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

  options: React.PropTypes.array.isRequired,

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
};

Select.defaultProps = {
  id: "",

  options: [],

  name: "",

  defaultValue: "",

  required: false,

  size: "medium",

  theme: "base",

};

Select.styles = styles;

export default radium(Select);
