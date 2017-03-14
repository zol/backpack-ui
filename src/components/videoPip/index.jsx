import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import settings from "../../../settings.json";
import GradientOverlay from "../gradientOverlay";
import Icon from "../icon";
import VideoEmbed from "../videoEmbed";

const styles = {
  container: {
    position: "fixed",
    height: "182px",
    width: "329px",
    bottom: "30px",
    right: "-360px",
    transition: `right ${settings.timing.default} ease`,
  },
  visible: {
    right: "30px",
  },
  overlay: {
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0,
    textAlign: "right",
    width: "100%",
    height: "50%",
    transition: `opacity ${settings.timing.fast} linear`,
  },
  closeButton: {
    backgroundColor: "transparent",
  },
  closeIcon: {
    margin: "12px",
    position: "relative",
    zIndex: settings.zIndex.default,
  },
}

const scopedStyles = {
  ".VideoPip-container:hover .VideoPip-overlay": {
    opacity: "1 !important",
  }
};

class VideoPip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible
    };

    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose() {
    this.setState({visible: false});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible });
  }

  render() {
    const { visible } = this.state;
    const { videoId } = this.props;

    const visibleStyle = visible ? styles.visible : {};
    const paused = !visible;

    return (
      <div
        className="VideoPip"
        style={[styles.container, visibleStyle]}
        >
        <Style
          scopeSelector=".VideoPip"
          rules={scopedStyles}
        />
        <div className="VideoPip-container">
          <VideoEmbed videoId={videoId} paused={paused} autoplay={true} />
          <div className="VideoPip-overlay" style={styles.overlay}>
            <GradientOverlay gradientType="inverted" />
            <button style={styles.closeButton} onClick={this.onClickClose} >
              <Icon.Close width={24} height={24} fill="white" style={styles.closeIcon} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPip.propTypes = {
  videoId: PropTypes.string,
  visible: React.PropTypes.bool.isRequired,
};

VideoPip.defaultProps = {
  videoId: "",
  visible: false,
};

export default radium(VideoPip);