import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import media from "../../styles/mq";
import VideoEmbed from "../videoEmbed";
import ThumbnailListItem from "../thumbnailListItem";

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
    marginRight: "370px",
    width: "100%",
    backgroundColor: "black",

    [`@media (max-width: ${media.max["840"]})`]: {
      marginRight: "300px",
    },
    [`@media (max-width: ${media.max["720"]})`]: {
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
  },

  thumbnailListItem: {
    default: {
      cursor: "pointer",
      transition: "background-color 500ms ease",
      paddingTop: "6px",
      paddingBottom: "6px",
      paddingLeft: "6px",
    },
    light: {
      ":hover": {
        backgroundColor: "#f3f3f3"
      },
    },
    dark: {
      ":hover": {
        backgroundColor: "#222222"
      },
    },
    active: {
      light: {
        backgroundColor: "#eaeaea",
        ":hover": {
          backgroundColor: "#eaeaea",
        },
      },
      dark: {
        backgroundColor: "#272727",
        ":hover": {
          backgroundColor: "#272727"
        },
      },
    },
  },
};

class VideoPlaylist extends Component {

  constructor(props) {
    super(props);

    const { video, videos } = props;
    this.state = { video: !video && videos && videos.length ? videos[0] : video };

    this.onEnded = this.onEnded.bind(this);
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

  loadVideo(newVideo) {
    if (this.props.onVideoWillChange) {
      this.props.onVideoWillChange(newVideo);
    }

    this.setState({ video: newVideo });
  }

  render () {
    const { videos, visibleVideos, theme, videoEmbed, style } = this.props;
    const { video } = this.state;

    const nextVideo = this.getNextVideo();

    return (
        <div className="VideoPlaylist" style={[
          styles.container.default,
          styles.container[theme],
          style,
        ]}>
        {video && videos && videos.length > 0 &&
          <div style={styles.embedContainer}>
            {video &&
              <VideoEmbed
                videoId={video.id}
                {...videoEmbed}
                onEnded={this.onEnded}
              />
            }
            <div style={[
              styles.playlistContainer.default,
              styles.playlistContainer[theme],
            ]}>
              {videos.slice(0, visibleVideos || videos.length).map((v, i) => (
                <ThumbnailListItem
                  key={v.id}
                  title={v.name}
                  href=""
                  onClick={() => this.loadVideo(videos[i])}
                  runtime={v.duration}
                  imagePath={v.image}
                  description={[video && v.id === video.id ? "Now playing" : nextVideo && v.id === nextVideo.id ? "Up next" : null]}
                  theme={theme}
                  style={[
                    styles.thumbnailListItem.default,
                    styles.thumbnailListItem[theme],
                    video && video.id === v.id ? styles.thumbnailListItem.active[theme] : {},
                  ]}
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
