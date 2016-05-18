import React from "react";
import radium from "radium";
import Heading from "../heading";
import Strapline from "../strapline";
import PaginatorButton from "../paginatorButton";
import { add, gutter, span } from "../../utils/grid";

const styles = {
  container: {
    base: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: add([
        gutter("static"),
        gutter("static"),
        span(4, "static")], "static"),
      textAlign: "center",
    },
  },

  strapline: {
    base: {
      marginTop: "2.1rem",
    },
  },

  button: {
    base: {
      marginTop: "2.7rem",
    },
  },
};

/**
 * PoiPaginator component
 */
function PoiPaginator({
  title,
  slug,
  topChoice,
  type,
  neighborhood,
  place,
  onClick,
}) {
  let TopChoiceText;
  let PlaceText;

  if (topChoice) {
    TopChoiceText = (
      <em style={styles.topChoice}>
        Top choice {type.toLowerCase()}
      </em>
    );
  } else {
    TopChoiceText = `${type.toLowerCase()}`;
  }

  if (neighborhood) {
    PlaceText = `located in the ${neighborhood} neighbourhood`;
  } else if (place) {
    PlaceText = `located in ${place}`;
  }

  const headingText = slug ? (
    <span>
      You might also like <a href={slug}>{title}</a>
    </span>
  ) : (
    <span>
      You might also like {title}
    </span>
  );

  return (
    <div
      className="PoiPaginator"
      style={styles.container.base}
    >
      <Heading
        level={4}
        size="medium"
        weight="thin"
        importance="high"
        override={{
          lineHeight: 1,
        }}
      >
        {headingText}
      </Heading>

      {type &&
        <div
          className="PoiPaginator-strapline"
          style={styles.strapline.base}
        >
          <Strapline
            size="tiny"
            color="gray"
          >
            {TopChoiceText} {PlaceText}
          </Strapline>
        </div>
      }

      <div
        className="PoiPaginator-button"
        style={styles.button.base}
      >
        <PaginatorButton
          direction="down"
          color="blue"
          shadow="tight"
          size="small"
          arrow="triangle"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

PoiPaginator.propTypes = {
  /**
   * Name of the POI
   */
  title: React.PropTypes.string.isRequired,

  /**
   * URL slug of the POI
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * Show the top choice text
   */
  topChoice: React.PropTypes.bool,

  /**
   * Type of POI
   */
  type: React.PropTypes.string,

  /**
   * Neighborhood where the POI is located
   */
  neighborhood: React.PropTypes.string,

  /**
   * Where the POI is located, if neighborhood is null
   */
  place: React.PropTypes.string,

  /**
   * Function to run on button click
   */
  onClick: React.PropTypes.func,
};

PoiPaginator.defaultProps = {
  title: "",

  slug: "",

  topChoice: false,

  type: "",

  neighborhood: "",

  place: "",

  onClick: null,
};

PoiPaginator.styles = styles;

export default radium(PoiPaginator);
