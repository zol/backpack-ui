import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Link from "../link";
import CoverPhoto from "../coverPhoto";
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import media from "../../styles/mq";

const _ = { get, uniqueId };

// TODO:
// 1. where should nextVideo go when lower thirds appear?
// 2. Verify nothing is wrong with shouldRender when new videoId is passed in.
// 3. Storybook

const icons = {

  theaterMode: '<svg style="width:66px;height:38px;position:relative;top:8px;left:0px;" viewBox="0 0 32 32"><image width="12" height="12"  xlink:href="data:img/png;base64,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"/></svg>',

  watchLater: '<svg style="width:14px;position:relative;top:1px;left:0px;fill:white;" viewBox="0 0 32 32"><path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 27.7c-6.5 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7c0 6.5-5.2 11.7-11.7 11.7z" /><path d="M17.1 7.5h-2.2v9l5.5 5.5 1.6-1.6-4.9-4.9z" /></svg>',
};

const videoOverlayBackgroundColor = "rgba(0, 0, 0, 0.45)";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: `${(9 / 16) * 100}%`,
    position: "relative",
    overflow: "hidden",

    /*
     * Any shorter than 228px and Brightcove's
     * share controls won't fit
     */
    minHeight: "228px",
  },

  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  nextVideoLink: {
    maxWidth: "100%",
    width: "300px",
    textAlign: "left",
    backgroundColor: videoOverlayBackgroundColor,
    borderWidth: "1px 0px 1px 1px",
    borderStyle: "solid",
    borderColor: videoOverlayBackgroundColor,
    opacity: 0,
    transition: `opacity ${timing.fast} linear`,
    position: "absolute",
    right: 0,
    bottom: "60px",
    color: colors.textOverlay,
  },

  nextVideoImageContainer: {
    width: "100px",
    height: "56px",
    overflow: "hidden",
    marginRight: "6px",
    float: "left",
  },

  nextVideoImage: {
    width: "100px",
    height: "56px",
    transition: `transform ${timing.slow} ease-in-out`,
  },

  nextVideoLabel: {
    color: colors.accentGray,
    fontSize: "11px",
    marginTop: "2px",
    marginRight: "6px",
  },

  nextVideoName: {
    lineHeight: "17px",
    fontSize: "14px",
    height: "34px",
    overflow: "hidden",
    marginTop: "1px",
    marginRight: "6px",
  },
};

const scopedStyles = {
  ".video-js": {
    overflow: "visible",
  },
  ".vjs-button:hover": {
    textShadow: "none !important",
    backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
  },
  ".vjs-overlay-right": {
    maxWidth: "none !important",
    right: "0px",
  },
  ".vjs-overlay-bottom": {
    left: "0px",
    width: "100%",
    marginLeft: "0px",
    maxWidth: "none !important",
  },
  ".vjs-overlay-top-left": {
    top: "0px",
    left: "0px",
  },
  ".vjs-overlay-top-right": {
    maxWidth: "100% !important",
    width: "100%",
    textAlign: "right",
  },
  ".VideoEmbed-ad-overlay": {
    marginTop: "8px",
    lineHeight: "21px",
    fontWeight: "normal",
    verticalAlign: "middle",
    backgroundColor: videoOverlayBackgroundColor,
    color: "#e6e6e6",
    fontSize: "11px",
    fontFamily: "arial,sans-serif",
    padding: "6px 24px",
  },
  ".VideoEmbed-lowerthird-overlay": {
    position: "relative",
    paddingBottom: "56.25%", /* 16:9 */
    height: 0,
  },
  ".VideoEmbed-lowerthird-overlay>div": {
    width: "100% !important",
    height: "100% !important",
  },
  ".VideoEmbed-lowerthird-overlay iframe": {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  ".vjs-error .vjs-error-display": {
    display: "none",
  },
  mediaQueries: {
    [`(max-width: ${media.max["480"]})`]: {
      ".vjs-big-play-button": {
        transform: "scale(.7)",
      },
    },
  },
};

const nextVideoScopedStyles = {
  ".CoverPhoto": {
    transform: "scale(1.03) !important",
  },
};

class VideoEmbed extends Component {
  constructor(props) {
    super(props);

    this.id = _.uniqueId();
    this.accountId = "5104226627001";
    this.playerId = "default";
    this.embedId = "default";

    this.container = null;
    this.player = null;

    this.state = {
      hover: false,
      nextVideoEnabled: false,
      showNextVideo: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    this.setupPlayer();
  }

  componentWillReceiveProps(nextProps) {
    const nextVideoId = _.get(nextProps, "videoId", this.props.videoId);

    if (nextVideoId !== this.props.videoId && !this.isAdRunning()) {
      this.loadVideo(nextVideoId);
    }
  }

  componentWillUnmount() {
    this.tearDownPlayer();
  }

  onLoadSetupScript() {
    const videoElement = document.getElementsByClassName(this.getPlayerVideoClassName())[0];
    this.player = window.videojs(videoElement);

    // We don't show the controls until the player is instantiated
    // or else the controls show briefly without the brightcove theme applied.
    this.player.controls(true);

    this.player.ready(this.onPlayerReady.bind(this));
    this.player.on("loadstart", this.onPlayerLoadStart.bind(this));
    this.player.on("error", this.onPlayerError.bind(this));
    this.player.on("playing", this.onPlayerPlaying.bind(this));
    this.player.on("ended", this.onPlayerEnded.bind(this));
    this.player.on("ads-ad-started", this.onAdStarted.bind(this));
    this.player.on("ads-ad-ended", this.onAdEnded.bind(this));

    this.createPlayerButton("watchLater", "Watch Later", this.props.onClickWatchLater);
    this.createPlayerButton("theaterMode", "Theater Mode", this.props.onClickTheaterMode);
  }

  createPlayerButton(iconName, title, onClick) {
    if (!this.player || !onClick) {
      return;
    }

    const buttonClass = videojs.getComponent("Button");
    const newButtonClass = videojs.extend(buttonClass, {
      handleClick: onClick,
    });

    const newButton = new newButtonClass();
    newButton.addClass("vjs-button");
    newButton.el().setAttribute("title", title);
    newButton.el().innerHTML = icons[iconName];

    const fullscreenButton = this.player.controlBar.el().getElementsByClassName("vjs-fullscreen-control")[0];
    this.player.controlBar.el().insertBefore(newButton.el(), fullscreenButton);
  }

  onPlayerReady() {
    // We load our video as soon as the player is instantiated and ready
    this.loadVideo(this.props.videoId);
  }

  onPlayerLoadStart() {
    const tt = this.player.textTracks()[0];
    if (tt) {
      tt.oncuechange = this.onPlayerCueChange.bind(this);
    }

    this.configureOverlays();

    if (this.props.autoplay) {
      this.play();
    }
  }

  onPlayerError() {
    // If the current video errors (ex. a timeout), we can recover by just attempting
    // to load/play the video again.
    this.loadVideo(this.props.videoId);
  }

  onPlayerPlaying() {
    // When an ad ends, the "playing" event or the "ads-ad-ended" event may be fired.
    // so we make sure to disable the "ad overlay" when any of these events fire.
    this.disableAdOverlay();

    this.setState({ nextVideoEnabled: true });

    // If videoId was set while an ad was playing, and the user skips the ad,
    // the onAdEnded() handler will not be run.  This makes sure we load the new video.
    this.loadVideo(this.props.videoId);

    if (this.props.onStarted) {
      this.props.onStarted();
    }
  }

  onAdStarted() {
    this.enableAdOverlay();
    this.setState({ nextVideoEnabled: false });

    if (this.props.onStarted) {
      this.props.onStarted();
    }
  }

  onAdEnded() {
    // When an ad ends, the "playing" event or the "ads-ad-ended" event may be fired.
    // so we make sure to disable the "ad overlay" when any of these events fire.
    this.disableAdOverlay();

    // If videoId was set while an ad was playing, and the
    // ad ends (without being skipped), make sure to load the new video.
    this.loadVideo(this.props.videoId);
  }

  onPlayerEnded() {
    if (this.props.onEnded) {
      this.props.onEnded();
    }
  }

  onPlayerCueChange() {
    const tt = this.player.textTracks()[0];
    const activeCue = tt.activeCues[0];
    if (!activeCue || activeCue.text !== "CODE") {
      return;
    }

    const cue = activeCue.originalCuePoint;

    const overlayElementId = `ad-lowerthird-${this.id}-${cue.id}`;
    const element = document.getElementById(overlayElementId);

    if (!element) {
      return;
    }

    let cueIndex = null;

    this.getCues().forEach((c, i) => {
      if (c.originalCuePoint.id === cue.id) {
        cueIndex = i;
      }
    });

    if (cueIndex === null) {
      return;
    }

    if (this.props.onCueChange) {
      this.props.onCueChange(cue, cueIndex, overlayElementId);
    }
  }

  onMouseEnter() {
    this.setState({
      hover: true,
      showNextVideo: this.state.nextVideoEnabled && this.container && this.container.clientWidth >= 450,
    });
  }

  onMouseLeave() {
    this.setState({ hover: false, showNextVideo: false });
  }

  getCues() {
    if (!this.player) {
      return [];
    }

    const tt = this.player.textTracks()[0];
    if (!tt) {
      return [];
    }

    let index = 0;
    const cues = [];
    while (index < tt.cues.length) {
      const cue = tt.cues[index];
      if (cue.text === "CODE") {
        cues.push(cue);
      }
      index += 1;
    }

    return cues;
  }

  getPlayerVideoClassName() {
    return `VideoEmbed-video-${this.id}`;
  }

  getPlayerScriptId() {
    return `VideoEmbed-initialize-${this.id}`;
  }

  getAdOverlayId() {
    return `ad-overlay-${this.id}`;
  }

  setupPlayer() {
    const scriptId = this.getPlayerScriptId();
    const scriptSrc = `https://players.brightcove.net/${this.accountId}/${this.playerId}_${this.embedId}/index.min.js`;
    const script = document.createElement("script");

    script.id = scriptId;
    script.src = scriptSrc;
    script.onload = this.onLoadSetupScript.bind(this);

    document.body.appendChild(script);
  }

  enableAdOverlay() {
    const adOverlay = document.getElementById(this.getAdOverlayId());
    if (adOverlay) {
      adOverlay.style.display = "inline-block";
    }
  }

  disableAdOverlay() {
    const adOverlay = document.getElementById(this.getAdOverlayId());
    if (adOverlay) {
      adOverlay.style.display = "none";
    }
  }

  isVideoLoaded(videoId) {
    return this.player && this.player.mediainfo && this.player.mediainfo.id === videoId;
  }

  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }

    if (this.isVideoLoaded(videoId)) {
      if (this.props.autoplay) {
        this.play();
      }
    } else {

      // Hide the "next video" preview whenever we
      // tell the player to load a new video
      this.setState({ nextVideoEnabled: false });

      this.player.catalog.getVideo(videoId, (error, video) => {
        if (!error) {
          this.player.catalog.load(video);
          // wait for 'loadstart' event
        }
      });
    }
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  isAdRunning() {
    return this.player && this.player.ads.state === "ad-playback";
  }

  play() {
    if (!this.player) {
      return;
    }

    const promise = this.player.play();

    // Catch any errors thrown within play promise (only applicable on some browsers)
    if (promise) {
      promise.catch(reason => console.log("VIDEOJS:", reason)).then(() => {});
    }
  }

  tearDownPlayer() {
    const scriptId = this.getPlayerScriptId();
    const script = document.getElementById(scriptId);

    if (script) {
      script.remove();
    }

    if (this.player) {
      this.player.dispose();
      this.player = null;
    }
  }

  configureOverlays() {
    const overlays = this.getCues().map((c) => {
      const cue = c.originalCuePoint;

      const defaultEnd = cue.startTime + 15;
      const end = defaultEnd < cue.endTime ? defaultEnd : cue.endTime;

      return {
        content: `<div id="ad-lowerthird-${this.id}-${cue.id}" class="VideoEmbed-lowerthird-overlay" />`,
        align: "bottom",
        start: cue.startTime,
        end,
      };
    });

    overlays.push({
      content: `<div id="${this.getAdOverlayId()}" class="VideoEmbed-ad-overlay">Advertisement</div>`,
      align: "top-left",
      start: "ads-ad-started",
      end: "playing",
    });

    this.player.overlay({
      content: "",
      overlays,
      showBackground: false,
      attachToControlBar: true,
      debug: false,
    });
  }

  render() {
    const { override, nextVideo } = this.props;
    const { showNextVideo } = this.state;

    return (
      <div
        className="VideoEmbed"
        ref={(container) => { this.container = container; }}
        style={[styles.container, override]}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Style
          scopeSelector=".VideoEmbed"
          rules={scopedStyles}
        />

        <Style
          scopeSelector=".VideoEmbed-nextvideo:hover"
          rules={nextVideoScopedStyles}
        />

        <video
          style={styles.video}
          data-account={this.accountId}
          data-player={this.playerId}
          data-embed={this.embedId}
          className={`video-js ${this.getPlayerVideoClassName()}`}
        />

        {nextVideo &&
          <Link
            to={nextVideo.href}
            className="VideoEmbed-nextvideo"
            style={{
              ...styles.nextVideoLink,
              opacity: showNextVideo ? 1 : 0,
              // display: showNextVideo ? "block" : "none",
            }}
            >
            <div style={styles.nextVideoImageContainer}>
              <CoverPhoto
                src={nextVideo.image}
                alt={nextVideo.name}
                style={styles.nextVideoImage}
              />
            </div>

            <div>
              <div style={styles.nextVideoLabel}>UP NEXT</div>
              <div style={styles.nextVideoName}>{nextVideo.name}</div>
            </div>
          </Link>
        }

      </div>
    );
  }
}

VideoEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  nextVideo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    href: PropTypes.string,
  }),
  hideNextVideoOnCueChange: PropTypes.bool,
  autoplay: PropTypes.bool,
  onStarted: PropTypes.func,
  onEnded: PropTypes.func,
  onCueChange: PropTypes.func,
  onClickTheaterMode: PropTypes.func,
  onClickWatchLater: PropTypes.func,
  override: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

VideoEmbed.defaultProps = {
  hideNextVideoOnCueChange: true,
};

export default radium(VideoEmbed);
