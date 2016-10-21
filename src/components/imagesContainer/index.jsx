import React, { Component, PropTypes } from "react";
import Portal from "react-portal";
import uniq from "lodash/uniqBy";
import ImageCarousel from "../imageCarousel";
import ImageGallery from "../imageGallery";
import ImageHero from "../imageHero";

const _ = { uniq };

const propTypes = {
  /**
   * Array of images
   */
  images: PropTypes.array.isRequired,

  /**
   * Array of width, height
   */
  carouselSize: PropTypes.array.isRequired,

  /**
   * Whether or not the layout is mobile
   */
  mobile: PropTypes.bool,
};

const defaultProps = {
  images: [],

  carouselSize: [770, 430],

  mobile: false,
};

class ImagesContainer extends Component {
  static parseImages(images) {
    const carouselImages = [];
    const galleryImages = [];

    const gallerySizes = {
      viator: [674, 446],
      gadventures: [770, 385],
      bdc: [500, 333],
      hostelworld: [800, 422],
      media: [1024, 768],
    };

    _.uniq(images).forEach((image) => {
      carouselImages.push(image.src ? image.src : image);

      galleryImages.push(image.src ? {
        src: image.src,
        thumbnail: image.src,
        w: gallerySizes[image.provider] ? gallerySizes[image.provider][0] : "",
        h: gallerySizes[image.provider] ? gallerySizes[image.provider][1] : "",
        title: "",
      } : image);
    });

    return { carouselImages, galleryImages };
  }

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isOpen: false,
    };

    [
      "toggleGallery",
      "afterChange",
      "returnImageHero",
      "returnImageGallery",
      "returnImageCarousel",
    ].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
  }

  toggleGallery() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  afterChange(newIndex) {
    this.setState({
      index: newIndex,
    });
  }

  returnImageHero(images) {
    return (
      <ImageHero
        image={images[0]}
        imageSize={this.props.carouselSize}
      />
    );
  }

  returnImageGallery() {
    return (
      <Portal
        className="ImageGallery-portal"
        key="ImageGallery"
        style={{ height: 0, width: 0 }}
        isOpened
      >
        <ImageGallery
          isOpen={this.state.isOpen}
          images={ImagesContainer.parseImages(this.props.images).galleryImages}
          options={{
            index: this.state.index,
            history: false,
            counterEl: false,
          }}
          onClose={this.toggleGallery}
        />
      </Portal>
    );
  }

  returnImageCarousel(images) {
    const { carouselSize, mobile } = this.props;

    return (
      <div className="ImageCarousel-container" style={mobile ? { overflow: "hidden" } : {}}>
        <ImageCarousel
          images={images}
          index={this.state.index}
          onExpand={!mobile ? this.toggleGallery : null}
          afterChange={this.afterChange}
          imageSize={carouselSize}
          hideNavigation={mobile}
          lazyLoad
        />

        {!mobile && this.returnImageGallery()}
      </div>
    );
  }

  render() {
    const parsedImages = ImagesContainer.parseImages(this.props.images).carouselImages;

    const component = parsedImages.length > 1 ?
      this.returnImageCarousel(parsedImages) :
      this.returnImageHero(parsedImages);

    return (
      <div className="ImagesContainer">
        {component}
      </div>
    );
  }
}

ImagesContainer.propTypes = propTypes;
ImagesContainer.defaultProps = defaultProps;

export default ImagesContainer;
