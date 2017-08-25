import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import media from "../../styles/mq";
import VideoEmbed from "../videoEmbed";
import ThumbnailListItem from "../thumbnailListItem";

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#1b1b1b",
    position: "relative",
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
    height: "100%",
    overflowY: "auto",
    marginLeft: "0px",
    width: "370px",
    position: "absolute",
    right: 0,
    top: 0,
    border: "1px solid #2b2b2b",

    [`@media (max-width: 758px`]: {
      width: "300px",
    },
    [`@media (max-width: 758px`]: {
      width: "0px",
    },
  },

  thumbnailListItem: {
    default: {
      cursor: "pointer",
      transition: "background-color 500ms ease",
      paddingTop: "6px",
      paddingBottom: "6px",
      paddingLeft: "6px",
      ":hover": {
        backgroundColor: "#222222"
      },
    },
    active: {
      backgroundColor: "#272727",
      ":hover": {
        backgroundColor: "#272727"
      }
    },
  },

};

class VideoPlaylist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      video: props.video,
    };

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
    const { videos, visibleVideos, theme, videoEmbed } = this.props;
    const { video } = this.state;

    const nextVideo = this.getNextVideo();

    return (
        <div className="VideoPlaylist" style={styles.container}>
          {video && videos && videos.length > 0 &&
          <div style={styles.embedContainer}>
            {video &&
              <VideoEmbed
                videoId={video.id}
                {...videoEmbed}
                onEnded={this.onEnded}
              />
            }
            <div style={styles.playlistContainer}>
              {videos.slice(0, visibleVideos || videos.length).map((v, i) => (
                <ThumbnailListItem
                  title={v.name}
                  onClick={() => this.loadVideo(videos[i])}
                  runtime={v.duration}
                  imagePath={v.image}
                  description={[video && v.id === video.id ? "Now playing" : nextVideo && v.id === nextVideo.id ? "Up next" : null]}
                  theme={theme}
                  style={[
                    styles.thumbnailListItem.default,
                    video && video.id === v.id ? styles.thumbnailListItem.active : {},
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
  videoEmbed: PropTypes.shape(VideoEmbed.propTypes),
  theme: PropTypes.oneOf(["light", "dark"]),
  onVideoWillChange: PropTypes.func,
};

VideoPlaylist.defaultProps = {
  theme: "light",
  videoEmbed: {},
};

export default radium(VideoPlaylist);
