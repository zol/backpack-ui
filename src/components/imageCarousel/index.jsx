import React from "react";
import PaginatorButton from "../paginatorButton";
import ExpandButton from "../expandButton";

function imgix(url) {
  return url.replace(/media.lonelyplanet.com/, "lonelyplanetimages.imgix.net")
}

const styles = {
  container: {
    base: {
      maxHeight: "430px",
      position: "relative",
    },
  },

  images: {
    base: {
      position: "relative",
    },
  },

  image: {
    base: {
      display: "block",
      width: "100%",
    },

    hidden: {
      opacity: 0,
    },
  },

  expandButton: {
    base: {
      bottom: "12px",
      position: "absolute",
      right: "12px",
    },
  },
};

/**
 * ImageCarousel component
 */
class ImageCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };

    this._goToPreviousImage = this._goToPreviousImage.bind(this);
    this._goToNextImage = this._goToNextImage.bind(this);
  }

  _goToNextImage() {
    if ((this.state.index + 1) !== this.props.images.length) {
      this.setState({
        index: (this.state.index + 1),
      });
    }
  }

  _goToPreviousImage() {
    if (this.state.index !== 0) {
      this.setState({
        index: (this.state.index - 1),
      });
    }
  }

  render() {
    const buttonLabel = this.props.images.length > 1 ? (
      `${this.state.index + 1} of ${this.props.images.length}`
    ) : "";

    return (
      <div
        className="ImageCarousel"
        style={styles.container.base}
      >
        <div
          className="ImageCarousel-images"
          style={styles.images.base}
        >
          <img
            style={styles.image.base}
            src={imgix(this.props.images[this.state.index])}
            alt= ""
          />
        </div>

        <div
          className="ImageCarousel-expandButton"
          style={styles.expandButton.base}
        >
          <ExpandButton
            label={buttonLabel}
          />
        </div>

        {this.state.index !== 0 &&
          <PaginatorButton
            direction="left"
            align="vertical"
            offset
            onClick={this._goToPreviousImage}
          />
        }

        {(this.state.index + 1) !== this.props.images.length &&
          <PaginatorButton
            direction="right"
            align="vertical"
            offset
            onClick={this._goToNextImage}
          />
        }
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  /**
   * Array of image paths
   */
  images: React.PropTypes.array.isRequired,
};

ImageCarousel.defaultProps = {
  images: [],
};

ImageCarousel.displayName = "ImageCarousel";
ImageCarousel.styles = styles;

export default ImageCarousel;
