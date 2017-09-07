import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import VideoEmbed from "../videoEmbed";

const styles = {
  outerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    paddingBottom: `${(9 / 16) * 100}%`,
    backgroundColor: colors.black,
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

    this.enabled = false;
    this.outOfViewTimeoutId = null;
    this.inViewTimeoutId = null;
    this.container = null;

    this.state = {
      outOfView: false,
      fixedToWindow: false,
      poppedOut: false,
    };

    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onVideoEmbedStarted = this.onVideoEmbedStarted.bind(this);
    this.onVideoEmbedEnded = this.onVideoEmbedEnded.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onWindowScroll);
      window.addEventListener("resize", this.onWindowResize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize() {
    this.update();
  }

  onWindowScroll() {
    this.update();
  }

  update() {
    if (!this.enabled) {
      return;
    }

    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = this.container.clientHeight / 2;
    const windowHeight = window.innerHeight;

    if ((bounds.top < -(halfContainerHeight)) || bounds.top > (windowHeight - halfContainerHeight)) {
      clearInterval(this.inViewTimeoutId);
      this.inViewTimeoutId = null;
      if (!this.outOfViewTimeoutId) {
        this.setState({outOfView: true});
        this.outOfViewTimeoutId = setTimeout(() => {
          this.setState({ fixedToWindow: true, poppedOut: true });
          this.outOfViewTimeoutId = null;
        }, 200);
      }
    }
    else {
      clearInterval(this.outOfViewTimeoutId);
      this.outOfViewTimeoutId = null;
      if (!this.inViewTimeoutId) {
        this.setState({poppedOut: false});
        this.inViewTimeoutId = setTimeout(() => {
          this.setState({ fixedToWindow: false, outOfView: false });
          this.inViewTimeoutId = null;
        }, 200);
      }
    }
  }

  onVideoEmbedStarted() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onStarted) {
      videoEmbed.onStarted();
    }

    this.enabled = true;
    this.update();
  }

  onVideoEmbedEnded() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onEnded) {
      videoEmbed.onEnded();
    }

    this.enabled = false;
  }

  render() {
    const { videoEmbed, style } = this.props;
    const { outOfView, fixedToWindow, poppedOut } = this.state;

    return (
      <div
        className="VideoPip"
        ref={(container) => { this.container = container; }}
        style={[styles.outerContainer, style]}
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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

VideoPip.defaultProps = {
  videoEmbed: {},
};

export default radium(VideoPip);
