import React from "react";
import radium from "radium";
import kebabCase from "lodash/kebabCase";
import { color, timing, zIndex } from "../../../settings.json";
import { darken } from "../../utils/color";
import Icon from "../icon";

const _ = { kebabCase };

const baseFontSize = 13;

const styles = {
  container: {
    base: {
      display: "inline-block",
      fontSize: `${baseFontSize}px`,
    },

    size: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
      third: {
        width: "33%",
      },
    },
  },

  button: {
    base: {
      backgroundColor: color.white,
      border: 0,
      color: color.darkGray,
      cursor: "pointer",
      display: "inline-block",
      fontSize: "1em",
      lineHeight: `${16 / baseFontSize}em`,
      paddingLeft: `${28 / baseFontSize}em`,
      paddingRight: `${12 / baseFontSize}em`,
      paddingTop: `${3 / baseFontSize}em`,
      position: "relative",
      textAlign: "left",
      verticalAlign: "text-top",
    },
  },

  span: {
    base: {
      borderColor: color.gray,
      borderStyle: "solid",
      borderWidth: "1px",
      color: color.white,
      display: "block",
      fontSize: "8px",
      height: `${16 / 8}em`,
      left: 0,
      padding: `${3 / 8}em ${2 / 8}em ${1 / 8}em`,
      position: "absolute",
      textAlign: "center",
      top: 0,
      transition: `background-color ${timing.fast},
        border-color ${timing.fast}`,
      userSelect: "none",
      width: `${16 / 8}em`,
      zIndex: zIndex.default,
    },

    checked: {
      backgroundColor: color.blue,
      borderColor: color.blue,
    },
  },

  checkbox: {
    hide: {
      backgroundColor: color.white,
      border: 0,
      height: `${16 / baseFontSize}em`,
      left: 0,
      outlineColor: darken(color.gray, 7),
      position: "absolute",
      top: 0,
      WebkitAppearance: "none",
      width: `${16 / baseFontSize}em`,
    },
  },
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked,
    });
  }

  onClick(event, value, name) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick({ value, name, checked: !this.state.checked });
    }
  }

  render() {
    const {
      id,
      value,
      size,
      name,
      style,
    } = this.props;

    /* eslint-disable */
    return (
      <span
        className="Checkbox"
        id={_.kebabCase(id)}
        ref={_.kebabCase(id)}
        style={[
          styles.container.base,
          styles.container.size[size],
          style,
        ]}
      >
        <label style={styles.button.base}>
          <span
            style={[
              styles.span.base,
              this.state.checked && styles.span.checked,
            ]}
          >
            <Icon.Checkmark
              style={this.state.checked ? { opacity: 1 } : { opacity: 0 }}
            />
          </span>

          {name}

          <input
            type="checkbox"
            style={styles.checkbox.hide}
            value={value}
            name={name}
            onClick={(e) => this.onClick(e, value, name)}
          />
        </label>
      </span>
    );
    /* eslint-enable */
  }
}

Checkbox.propTypes = {
  /**
   * ID for the checkbox
   */
  id: React.PropTypes.string.isRequired,

  /**
   * Value of the checkbox
   */
  value: React.PropTypes.string,

  /**
   * Name of the checkbox
   */
  name: React.PropTypes.string,

  /**
   * Whether or not the checkbox is checked
   */
  checked: React.PropTypes.bool,

  /**
   * Click handler for checkbox
   */
  onClick: React.PropTypes.func,

  /**
   * Set the checkbox size
   */
  size: React.PropTypes.string,

  /**
   * CSS styles to append to component's styles
   */
  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),
};

Checkbox.defaultProps = {
  id: "",

  value: "",

  checked: false,

  onClick: null,

  size: "",

  style: {},
};

Checkbox.styles = styles;

export default radium(Checkbox);
