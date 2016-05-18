import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";

const styles = {
  base: {
    display: "inline-block",
  },
  button: {
    position: "relative",
    border: 0,
    backgroundColor: "#fff",
    display: "inline-block",
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    color: "#8b8f94",
    fontSize: "75%",
    verticalAlign: "middle",
    marginBottom: "1rem",
  },
  span: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: color.gray,
    backgroundColor: "#fff",
    lineHeight: "2rem",
    textAlign: "center",
    backgroundSize: "75% 75%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    userSelect: "none",
  },
  checked: {
    backgroundColor: color.blue,
    backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=)", // eslint-disable-line max-len
  },
  checkboxHide: {
    display: "none",
  },
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked || false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { id, value } = this.props;

    return (
      <div style={styles.base}>
        <button
          id={id}
          ref={id}
          value={value}
          onClick={this.onClick}
          style={styles.button}
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
          />
        </button>
      </div>
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
};

Checkbox.defaultProps = {
  id: "",

  value: "",

  checked: false,

  onClick: null,
};

Checkbox.styles = styles;

export default radium(Checkbox);
