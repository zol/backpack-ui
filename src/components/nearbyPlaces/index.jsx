import React from "react";
import radium from "radium";
import shallowCompare from "react-addons-shallow-compare";
import { connect } from "react-redux";
import { color, media, zIndex } from "rizzo-next/sass/settings.json";
import Place from "../place";
import ExpandButton from "../expandButton";
import Bookmark from "../bookmark";
import { add, gutter, span } from "../../utils/grid";
import { rgb } from "../../utils/color";
// import actions from "../../actions";

let InteractiveMap;

if (typeof window !== "undefined") {
  InteractiveMap = require("../interactiveMap").default;
}

const mapHeight = "38rem";

const placeHover = {
  backgroundColor: `rgba(${rgb(color.gray)}, .3)`,
};

const styles = {
  container: {
    base: {
      [`@media (min-width: ${media.min["1080"]})`]: {
        height: mapHeight,
        maxHeight: mapHeight,
      },
    },
  },

  column: {
    base: {
      [`@media (max-width: ${media.max["768"]}) and (orientation: landscape)`]: {
        float: "left",
        height: "100vh",
        width: "50vw",
      },

      [`@media (min-width: ${media.min["1080"]})`]: {
        float: "left",
        height: "100%",
        width: add([span("3 of 6"), gutter()]),
      },
    },
  },

  map: {
    container: {
      backgroundColor: `rgba(${rgb(color.lightSlate)}, .5)`,
      maxHeight: mapHeight,
      overflow: "hidden",
      position: "relative",

      [`@media (max-width: ${media.max["1080"]}) and (orientation: portrait)`]: {
        height: "31vh",
      },
    },

    base: {},
  },

  expandButton: {
    base: {
      bottom: "2.4rem",
      position: "absolute",
      right: ".8rem",
      zIndex: zIndex.top,
    },
  },

  list: {
    base: {
      [`@media (max-width: ${media.max["1080"]}) and (orientation: portrait)`]: {
        borderBottom: `.1rem solid ${color.gray}`,
      },
    },
  },

  place: {
    base: {
      cursor: "pointer",
      position: "relative",

      [`@media (max-width: ${media.max["768"]}) and (orientation: landscape)`]: {
        height: "25vh",
        paddingLeft: gutter("static", 12, 0.5),
        paddingRight: gutter("static", 12, 0.5),
      },

      [`@media (max-width: ${media.max["1080"]})`]: {
        display: "flex",
        alignItems: "center",
        padding: "2.5rem",

        ":hover": placeHover,
        ":active": placeHover,
        ":focus": placeHover,
      },

      [`@media (min-width: ${media.min["1080"]})`]: {
        marginLeft: gutter("static"),
        paddingBottom: "2rem",
        paddingTop: "2rem",
      },
    },

    notFirst: {
      borderTop: `.1rem solid ${color.gray}`,
    },

    first: {
      [`@media (min-width: ${media.min["1080"]})`]: {
        paddingTop: "2.1rem",
      },
    },

    background: {
      base: {
        [`@media (max-width: ${media.max["1080"]})`]: {
          display: "none",
        },

        [`@media (min-width: ${media.min["1080"]})`]: {
          height: "calc(100% + .1rem)",
          left: `-${gutter("static")}`,
          position: "absolute",
          top: 0,
          width: `calc(100% + ${gutter("static")} + ${gutter("static")})`,
          zIndex: zIndex.below,
        },
      },

      hover: placeHover,

      last: {
        height: "100%",
      },
    },

    bookmark: {
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,

      [`@media (max-width: ${media.max["1080"]})`]: {
        right: "2.1rem",
      },
    },
  },
};

/**
 * Nearby places map
 */
class NearbyPlaces extends React.Component {
  constructor() {
    super();

    this.state = {
      renderMap: false,
    };
  }

  componentDidMount() {
    this.setState({
      renderMap: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const style = {
      mapContainer: [styles.map.container, styles.column.base],
      list: [styles.column.base, styles.list.base],
    };

    const places = this.props.places.map((place, index) => {
      const placeStyle = [styles.place.base];
      const backgroundStyle = [styles.place.background.base];
      const id = parseInt(place.id, 10);

      if (index !== 0) {
        placeStyle.push(styles.place.notFirst);
      } else {
        placeStyle.push(styles.place.first);
      }

      if (this.props.activePlace === id) {
        backgroundStyle.push(styles.place.background.hover);
      }

      if (index === this.props.places.length - 1) {
        backgroundStyle.push(styles.place.background.last);
      }

      return (
        <div
          className="NearbyPlaces-place"
          style={placeStyle}
          key={index}
          onMouseEnter={() => this.props.dispatch(actions.hoverPlace(id)) }
          onMouseLeave={() => this.props.dispatch(actions.hoverPlace(-1)) }
        >
          <Place
            key={`place-${index}`}
            type="nearby"
            title={place.name}
            slug={`/poi/${place.id}`}
            category={place.poi_type}
            image="http://dummyimage.com/80x54/4d494d/686a82.jpg"
            coords={place.location.coordinates}
          />

          <div
            className="NearbyPlaces-placeBookmark"
            style={styles.place.bookmark}
          >
            <Bookmark
              size="small"
              center="vertical"
              align="right"
              onClick={null}
            />
          </div>

          <div
            className="NearbyPlaces-placeBackground"
            style={backgroundStyle}
            key={`background-${index}`}
          >
          </div>
        </div>
      );
    });

    return (
      <div
        className="NearbyPlaces clearfix"
        style={styles.container.base}
      >
        <div
          className="NearbyPlaces-mapContainer"
          style={style.mapContainer}
        >
          <div
            className="NearbyPlaces-map"
            style={styles.map.base}
          >
            {this.state.renderMap &&
              <InteractiveMap
                center={this.props.currentPlace.location.coordinates.slice(0).reverse()}
                centerName={this.props.currentPlace.name}
                places={this.props.places}
                poiId={this.props.activePlace}
                fill
              />
            }
          </div>

          <div
            className="NearbyPlaces-expandButton"
            style={styles.expandButton.base}
          >
            <ExpandButton
              onClick={null}
            />
          </div>
        </div>

        <div
          className="NearbyPlaces-list"
          style={style.list}
        >
          {places}
        </div>
      </div>
    );
  }
}

NearbyPlaces.propTypes = {
  /**
   * Data for the current place
   */
  currentPlace: React.PropTypes.object.isRequired,

  /**
   * Array of nearby POIs to plot on the map
   */
  places: React.PropTypes.array.isRequired,

  /**
   * Dispatch from the store
   */
  dispatch: React.PropTypes.func,

  /**
   * The currently hovered place's atlas id
   */
  activePlace: React.PropTypes.number,
};

NearbyPlaces.defaultProps = {
  currentPlace: {},

  places: [],
};

const mapStateToProps = (state) => ({
  activePlace: state.activePlace,
});

NearbyPlaces = connect(mapStateToProps)(radium(NearbyPlaces));

NearbyPlaces.styles = styles;

export default NearbyPlaces;
