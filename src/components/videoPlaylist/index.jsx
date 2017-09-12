import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import media from "../../styles/mq";
import timing from "../../styles/timing";
import colors from "../../styles/colors";
import VideoEmbed from "../videoEmbed";
import ThumbnailListItem from "../thumbnailListItem";
import VideoPip from "../videoPip";

const styles = {
  container: {
    default: {
      display: "flex",
      position: "relative",
    },
    light: {
      backgroundColor: colors.bgPrimary,
    },
    dark: {
      backgroundColor: "#1b1b1b",
    }
  },

  videoPip: {
    paddingBottom: "0px",
    transition: `width ${timing.fast} linear, height ${timing.fast} linear`,
  },

  videoEmbed: {
    paddingBottom: "0px",
  },

  playlistContainer: {
    default: {
      height: "100%",
      overflowY: "auto",
      marginLeft: "0px",
      width: "370px",
      position: "absolute",
      right: 0,
      top: 0,
      transition: `width ${timing.fast} linear`,

      [`@media (max-width: ${media.max["840"]})`]: {
        width: "300px",
      },
      [`@media (max-width: ${media.max["720"]})`]: {
        width: "0px",
      },
    },
    light: {
      borderLeft: "1px solid #f4f4f4",
      backgroundColor: colors.bgPrimary,
    },
    dark: {
      borderLeft: "1px solid #2b2b2b",
      backgroundColor: "rgb(27, 27, 27)",
    },
    theaterMode: {
      width: "0px",

      [`@media (max-width: ${media.max["840"]})`]: {
        width: "0px",
      },
    },
  },

  thumbnailListItem: {
    cursor: "pointer",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "6px",
  },
};

class VideoPlaylist extends Component {

  constructor(props) {
    super(props);

    const { video, videos } = props;
    this.state = {
      theaterMode: false,
      video: !video && videos && videos.length ? videos[0] : video,
      windowHeight: null,
      windowWidth: null,
    };

    this.container = null;

    this.onEnded = this.onEnded.bind(this);
    this.onClickTheaterMode = this.onClickTheaterMode.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onWindowResize);
    }
  }

  componentDidMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize(e) {
    this.updateDimensions();
  }

  updateDimensions() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  }

  getNextVideo() {
    const { videos } = this.props;
    const { video } = this.state;

    const videoIndex = videos.findIndex(v => video && v.id === video.id);

    let nextVideo = videos && videos.length ? videos[0] : null;
    nextVideo = videos && videoIndex + 1 < videos.length ? videos[videoIndex + 1] : nextVideo;

    return nextVideo;
  }

  onEnded() {
    const { videoEmbed } = this.props;
    if (videoEmbed && videoEmbed.onEnded) {
      videoEmbed.onEnded();
    }

    this.loadVideo(this.getNextVideo());
  }

  onClickTheaterMode() {
    const { videoEmbed } = this.props;
    if (videoEmbed && videoEmbed.onClickTheaterMode) {
      videoEmbed.onClickTheaterMode();
    }

    this.setState({ theaterMode: !this.state.theaterMode });
  }

  loadVideo(newVideo) {
    if (this.props.onVideoWillChange) {
      this.props.onVideoWillChange(newVideo);
    }

    this.setState({ video: newVideo });
  }

  render () {
    const { videos, visibleVideos, theme, videoEmbed, style } = this.props;
    const { video, theaterMode, windowHeight, windowWidth } = this.state;

    let embedWidth = "100%";
    let embedHeight = "100%";

    if (this.container) {
      /* We size the container element so that the video embed remains at 16:9
       * if possible, but without the container being larger than the viewport
       * and without being smaller than some threshold (currently 228px in height)
       */
      const aspectRatio = 1.777777; // 16:9
      const containerWidth = this.container.clientWidth;
      if ( theaterMode || windowWidth < 720) {
        embedWidth = containerWidth;
      }
      else {
        embedWidth = containerWidth - (windowWidth < 840 ? 300 : 370);
      }
      embedHeight = Math.max(Math.min(embedWidth / aspectRatio, windowHeight * 0.85), 228);
    }

    const nextVideo = this.getNextVideo();

    return (
        <div className="VideoPlaylist"
          ref={(container) => { this.container = container; }}
          style={[
            styles.container.default,
            styles.container[theme],
            style,
          ]}
        >
        {video && videos && videos.length > 0 &&
          <div>
            {video &&
              <VideoPip
                style={[
                  styles.videoPip,
                  {width: embedWidth, height: embedHeight},
                ]}
                videoEmbed={{
                  videoId: video.id,
                  ...videoEmbed,
                  onEnded: this.onEnded,
                  onClickTheaterMode: this.onClickTheaterMode,
                  override: styles.videoEmbed,
                }}
              />
            }
            <div style={[
              styles.playlistContainer.default,
              styles.playlistContainer[theme],
              theaterMode ? styles.playlistContainer.theaterMode : {},
            ]}>
              {videos.slice(0, visibleVideos || videos.length).map((v, i) => (
                <ThumbnailListItem
                  key={v.id}
                  title={v.name}
                  onClick={video && v.id !== video.id ? () => this.loadVideo(videos[i]) : () => {}}
                  runtime={v.duration}
                  imagePath={v.image}
                  description={[video && v.id === video.id ? "Now playing" : nextVideo && v.id === nextVideo.id ? "Up next" : null]}
                  theme={theme}
                  style={styles.thumbnailListItem}
                />
              ))}
            </div>
          </div>
        }
      </div>
    );
  }
};

const videoShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  duration: PropTypes.number,
};

VideoPlaylist.propTypes = {
  video: PropTypes.shape(videoShape),
  videos: PropTypes.arrayOf(PropTypes.shape(videoShape)),
  visibleVideos: PropTypes.number,
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  theme: PropTypes.oneOf(["light", "dark"]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
  onVideoWillChange: PropTypes.func,
};

VideoPlaylist.defaultProps = {
  theme: "light",
  videoEmbed: {},
};

export default radium(VideoPlaylist);
