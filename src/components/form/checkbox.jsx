import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";

const icons = {
  checkmark: {
    light: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.white}"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path></svg>`),
  },
};

const styles = {
  button: {
    position: "relative",
    border: 0,
    backgroundColor: color.white,
    display: "inline-block",
    paddingLeft: `${28 / 13}em`,
    paddingTop: `${3 / 13}em`,
    color: color.darkGray,
    fontSize: "13px",
    verticalAlign: "middle",
    lineHeight: 1,
    textAlign: "left",

    ":focus": {
      outline: "1px gray dotted",
      outlineOffset: "4px",
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
  span: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: `${16 / 13}em`,
    height: `${16 / 13}em`,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: color.gray,
    backgroundColor: color.white,
    textAlign: "center",
    backgroundSize: `${8 / 13}em`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transition: "background-color 200ms, border-color 200ms",
    userSelect: "none",
  },
  checked: {
    backgroundColor: color.blue,
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.checkmark.light}")`,
    borderColor: color.blue,
  },
  checkboxHide: {
    display: "none",
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

  onClick(event, value) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick(value, !this.state.checked);
    }
  }

  render() {
    const { id, value, size } = this.props;

    return (

      <button
        className="Checkbox"
        id={id}
        ref={id}
        value={value}
        onClick={this.onClick}
        style={[styles.button, styles.button.size[size]]}
      >
        <span
          style={[
            styles.span,
            this.state.checked && styles.checked,
          ]}
        >
        </span>
        {value}
        <input
          type="checkbox"
          style={styles.checkboxHide}
          checked={this.state.checked}
          readOnly
        />
      </button>
    );
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

};

Checkbox.defaultProps = {
  id: "",

  value: "",

  checked: false,

  onClick: null,

  size: "full",
};

Checkbox.styles = styles;

export default radium(Checkbox);
