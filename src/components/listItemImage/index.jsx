import React from "react";
import ImageLoader from "react-imageloader";
import Placeholder from "../placeholder";

function ListItemImage({ image, title }) {
  const renderPlaceholder = () => (
    <Placeholder
      title={title}
      fontSize={50}
      aspectRatio={5 / 4}
    />
  );

  return (
    <ImageLoader
      src={image.path}
      preloader={() => renderPlaceholder(title)}
    >
      {renderPlaceholder(title)}
    </ImageLoader>
  );
}

ListItemImage.propTypes = {
  /**
   * The name of the POI
   * key: name
   */
  title: React.PropTypes.string.isRequired,

  /**
   * Image src for the POI; required keys are path and orientation
   * partner-activities key: links.image
   */
  image: React.PropTypes.shape({
    path: React.PropTypes.string,
    orientation: React.PropTypes.oneOf([
      "",
      "portrait",
      "landscape",
    ]),
  }),
};

export default ListItemImage;
