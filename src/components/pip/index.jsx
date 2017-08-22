import React, { Component, PropTypes } from "react";
import radium from "radium";
import timing from "../../styles/timing";

const styles = {
  outerContainer: {
    border: "3px solid red",
    height: "100%",
    position: "relative",
  },

  innerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    transition: `top ${timing.fast} ease, right ${timing.fast} ease`,
  }
};

class Pip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outOfView: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.setState({ outOfView: !this.state.outOfView });
  }

  render() {
    const { children } = this.props;
    const { outOfView } = this.state;

    return (
      <div
        className="Pip"
        style={styles.outerContainer}
        onClick={this.onClick}
      >
        <div
          style={{
            ...styles.innerContainer,
            right: outOfView ? "-100px" : "0px",
            top: outOfView ? "100px" : "0px",
          }}>
          { children }
        </div>
      </div>
    );
  }
};

export default radium(Pip);
