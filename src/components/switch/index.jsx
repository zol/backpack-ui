import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import SwitchComponent from "./switch";

class Switch extends Component {
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

  onClick() {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick && typeof this.props.onClick === "function") {
      this.props.onClick();
    }
  }

  render() {
    return (
      <SwitchComponent
        {...this.props}
        checked={this.state.checked}
        onClick={this.onClick}
      />
    );
  }
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default radium(Switch);
