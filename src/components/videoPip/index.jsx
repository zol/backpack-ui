import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import VideoEmbed from "../videoEmbed";
import { Close } from "../icon";

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
      overflow: "hidden",
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
      width: "60%",
      maxWidth: "406px",
      height: "initial",
      boxShadow: `0px 1px 8px 0px ${rgba(colors.black, 0.4)}`,
    },
    poppedOut: {
      opacity: 1,
    },
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: zIndex.default,
    width: "100%",
    display: "inline-block",
    opacity: 0,
    transition: `opacity ${timing.fast} linear`,
    textAlign: "right",
  },

  closeButton: {
    padding: "2px 6px",
    color: colors.textOverlay,
    backgroundColor: `${rgba(colors.black, 0.55)}`,
  },
};

class VideoPip extends Component {
  constructor(props) {
    super(props);

    this.enabled = false;
    this.outOfViewTimeoutId = null;
    this.inViewTimeoutId = null;

    this.container = null;
    this.videoEmbed = null;

    this.state = {
      outOfView: false,
      fixedToWindow: false,
      poppedOut: false,
      hover: false,
      adIsPlaying: false,
    };

    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onVideoEmbedPlaying = this.onVideoEmbedPlaying.bind(this);
    this.onVideoEmbedAdStarted = this.onVideoEmbedAdStarted.bind(this);
    this.onVideoEmbedAdPlay = this.onVideoEmbedAdPlay.bind(this);
    this.onVideoEmbedAdPause = this.onVideoEmbedAdPause.bind(this);
    this.onClickCloseButton = this.onClickCloseButton.bind(this);
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

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover : false });
  }

  update() {
    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = this.container.clientHeight / 2;
    const windowHeight = window.innerHeight;

    if (this.enabled && ((bounds.top < -(halfContainerHeight)) || bounds.top > (windowHeight - halfContainerHeight))) {
      clearInterval(this.inViewTimeoutId);
      this.inViewTimeoutId = null;
      if (!this.outOfViewTimeoutId) {
        this.setState({ outOfView: true });
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
        this.setState({ poppedOut: false} );
        this.inViewTimeoutId = setTimeout(() => {
          this.setState({ fixedToWindow: false, outOfView: false });
          this.inViewTimeoutId = null;
        }, 200);
      }
    }
  }

  onVideoEmbedAdPlay() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdPlay) {
      videoEmbed.onAdPlay();
    }

    this.setState({ adIsPlaying: true });
  }

  onVideoEmbedAdPause() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdPause) {
      videoEmbed.onAdPause();
    }

    this.setState({ adIsPlaying: false });
  }

  onVideoEmbedPlaying() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onPlaying) {
      videoEmbed.onPlaying();
    }

    this.enabled = true;
    this.setState({ adIsPlaying: false });
    this.update();
  }

  onVideoEmbedAdStarted() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdStarted) {
      videoEmbed.onAdStarted();
    }

    this.enabled = true;
    this.setState({ adIsPlaying: true });
    this.update();
  }

  onClickCloseButton() {
    this.videoEmbed.pause();
    this.enabled = false;
    this.update();
  }

  render() {
    const { videoEmbed, style } = this.props;
    const { outOfView, fixedToWindow, poppedOut, hover, adIsPlaying } = this.state;

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
          ]}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >

          <div style={[
            styles.overlay,
            poppedOut && hover && !adIsPlaying ? { opacity: 1 } : {},
          ]}>
            <button style={styles.closeButton} onClick={this.onClickCloseButton}>
              <Close width={16} height={16} />
            </button>
          </div>

          <VideoEmbed
            ref={(videoEmbed) => { this.videoEmbed = videoEmbed; }}
            {...videoEmbed}
            onPlaying={this.onVideoEmbedPlaying}
            onAdStarted={this.onVideoEmbedAdStarted}
            onAdPlay={this.onVideoEmbedAdPlay}
            onAdPause={this.onVideoEmbedAdPause}
            override={[
              videoEmbed.override,
              poppedOut ? { paddingBottom: `${(9 / 16) * 100}%`, minHeight: "unset" }: {},
            ]}
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
