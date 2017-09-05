import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import media from "../../styles/mq";
import timing from "../../styles/timing";
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
      backgroundColor: "white",
    },
    dark: {
      backgroundColor: "#1b1b1b",
    }
  },

  embedContainer: {
    default: {
      marginRight: "370px",
      width: "100%",
      backgroundColor: "black",
      transition: `margin-right ${timing.default} ease`,

      [`@media (max-width: ${media.max["840"]})`]: {
        marginRight: "300px",
      },
      [`@media (max-width: ${media.max["720"]})`]: {
        marginRight: "0px",
      },
    },
    theaterMode: {
      marginRight: "0px",
    },
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
      transition: `width ${timing.default} ease`,

      [`@media (max-width: ${media.max["840"]})`]: {
        width: "300px",
      },
      [`@media (max-width: ${media.max["720"]})`]: {
        width: "0px",
      },
    },
    light: {
      borderLeft: "1px solid #f4f4f4",
    },
    dark: {
      borderLeft: "1px solid #2b2b2b",
    },
    theaterMode: {
      width: "0px",
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
    };

    this.onEnded = this.onEnded.bind(this);
    this.onClickTheaterMode = this.onClickTheaterMode.bind(this);
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
    const { video, theaterMode } = this.state;

    const nextVideo = this.getNextVideo();

    return (
        <div className="VideoPlaylist" style={[
          styles.container.default,
          styles.container[theme],
          style,
        ]}>
        {video && videos && videos.length > 0 &&
          <div style={[
            styles.embedContainer.default,
            theaterMode ? styles.embedContainer.theaterMode : {},
          ]}>
            {video &&
              <VideoPip
                videoEmbed={{
                  videoId: video.id,
                  ...videoEmbed,
                  onEnded: this.onEnded,
                  onClickTheaterMode: this.onClickTheaterMode,
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
