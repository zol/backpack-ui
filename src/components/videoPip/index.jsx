import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import VideoEmbed from "../videoEmbed";

// TODO:  Hide theater mode button on popout
// TODO:  Hide nextVideo on popout
// TODO:  Add close dialog control

const styles = {
  outerContainer: {
    height: "fit-content",
    position: "relative",
    top: "0px",
    left: "0px",
    paddingBottom: `${(9 / 16) * 100}%`,
  },

  innerContainer: {
    default: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      transition: `opacity ${timing.fast} ease`,
    },
    outOfView: {
      opacity: 0,
    },
    fixedToWindow: {
      position: "fixed",
      zIndex: zIndex.popup,
      right: "20px",
      bottom: "20px",
      width: "406px",
      height: "initial",
      boxShadow: `0px 1px 8px 0px ${rgba(colors.black, 0.4)}`,
    },
    poppedOut: {
      opacity: 1,
    },
  },
};

class VideoPip extends Component {
  constructor(props) {
    super(props);

    this.container = null;

    this.state = {
      outOfView: false,
      fixedToWindow: false,
      poppedOut: false,
      enabled: false,
    };

    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onContainerTransitionEnd = this.onContainerTransitionEnd.bind(this);
    this.onVideoEmbedStarted = this.onVideoEmbedStarted.bind(this);
    this.onVideoEmbedEnded = this.onVideoEmbedEnded.bind(this);
  }

  componentDidMount() {
    this.container.addEventListener("transitionend", this.onContainerTransitionEnd);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onWindowScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }

  onContainerTransitionEnd () {
    if (!this.state.enabled) {
      return;
    }
    console.log('transition ended');

    const { enabled, outOfView, fixedToWindow, poppedOut } = this.state;
    console.log("outOfView:", outOfView, "fixedToWindow:", fixedToWindow, "poppedOut:", poppedOut);

    if (outOfView && !fixedToWindow) {
      this.setState({fixedToWindow: true, poppedOut: true});
    }
    else if (outOfView && fixedToWindow && !poppedOut) {
      this.setState({fixedToWindow: false, outOfView: false});
    }
    else if (!outOfView && fixedToWindow && poppedOut) {
      this.setState({poppedOut: false});
    }
    else if (!outOfView && fixedToWindow && !poppedOut) {
      this.setState({fixedToWindow: false});
    }
  }

  onWindowScroll() {
    if (!this.state.enabled) {
      return;
    }

    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = this.container.clientHeight / 2;
    const windowHeight = window.innerHeight;

    if ((bounds.top < -(halfContainerHeight)) || bounds.top > (windowHeight + halfContainerHeight)) {
      this.setState({outOfView: true});
    }
    else {
      if (this.state.poppedOut) {
        this.setState({poppedOut: false});
      }
      else {
        this.setState({outOfView: false});
      }
    }
  }

  onVideoEmbedStarted() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onStarted) {
      videoEmbed.onStarted();
    }

    this.setState({ enabled: true });
  }

  onVideoEmbedEnded() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onEnded) {
      videoEmbed.onEnded();
    }

    this.setState({ enabled: false });
  }

  render() {
    const { videoEmbed } = this.props;
    const { enabled, outOfView, fixedToWindow, poppedOut } = this.state;

    return (
      <div
        className="VideoPip"
        ref={(container) => { this.container = container; }}
        style={styles.outerContainer}
      >
        <div
          style={[
            styles.innerContainer.default,
            outOfView && styles.innerContainer.outOfView,
            fixedToWindow && styles.innerContainer.fixedToWindow,
            poppedOut && styles.innerContainer.poppedOut,
          ]}>
          <VideoEmbed
            {...videoEmbed}
            onStarted={this.onVideoEmbedStarted}
            onEnded={this.onVideoEmbedEnded}
          />
        </div>
      </div>
    );
  }
};

VideoPip.propTypes = {
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
};

VideoPip.defaultProps = {
  videoEmbed: {},
};

export default radium(VideoPip);
