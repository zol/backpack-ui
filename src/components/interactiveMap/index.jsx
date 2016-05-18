import React from "react";
import radium from "radium";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
// import actions from "../../actions";

const styles = {
  container: {
    base: {},

    fill: {
      height: "100%",
      width: "100%",
    },
  },

  map: {
    base: {
      height: "100%",
      width: "100%",
    },
  },
};

class InteractiveMap extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    const { center, centerName, places, fill, poiId } = this.props;

    const accessToken = "pk.eyJ1IjoibG9uZWx5cGxhbmV0IiwiYSI6ImNpajYyZW1iMjAwO" +
                        "G51bWx2YW50ejNmN2IifQ.neyeEEzBkaNKcKUzCe3s2Q";

    const style = {
      container: [styles.container.base],
    };

    if (fill) {
      style.container.push(styles.container.fill);
    }

    const Markers = places.map((place) => {
      const id = parseInt(place.id, 10);
      const markerOpacity = id === poiId ? 1 : 0.4;

      return (
        <Marker
          opacity={markerOpacity}
          position={place.location.coordinates.slice(0).reverse()}
          icon={leaflet.icon({
            iconUrl: "//assets.staticlp.com/assets/mapPin-secondary.png",
            iconSize: [30, 30],
          })}
          key={place.id}
          zIndexOffset={1}
          onMouseover={() => this.props.dispatch(actions.hoverPlace(id))}
        >
          <Popup>
            <strong>{place.name}</strong>
          </Popup>
        </Marker>
      );
    });

    return (
      <div
        className="InteractiveMap"
        style={style.container}
      >
        <Map
          scrollWheelZoom={false}
          center={center}
          zoom={14}
          style={styles.map.base}
        >
          <TileLayer
            id="lonelyplanet.04cf7895"
            accessToken={accessToken}
            attribution="&copy; <a href=`http://osm.org/copyright`>OpenStreetMap</a> contributors"
            url="http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
          />
          <Marker
            opacity={1}
            position={center}
            icon={leaflet.icon({
              iconUrl: "//assets.staticlp.com/assets/mapPin-primary.png",
              iconSize: [40, 40],
            })}
          >
            <Popup>
              <strong>{centerName}</strong>
            </Popup>
          </Marker>

          {Markers}
        </Map>
      </div>
    );
  }
}

InteractiveMap.propTypes = {
  /**
   * Coordinates for the map center point
   */
  center: React.PropTypes.array.isRequired,

  /**
   * Name of the POI at the center point
   */
  centerName: React.PropTypes.string,

  /**
   * An array of places to plot on the map
   */
  places: React.PropTypes.array.isRequired,

  /**
   * Allow the map to fill its parent's dimentions
   */
  fill: React.PropTypes.bool,

  /**
   * ID of POI that's selected
   */
  poiId: React.PropTypes.number,

  /**
   * Dispatch from the store
   */
  dispatch: React.PropTypes.func,
};

InteractiveMap.defaultProps = {
  center: [],

  centerName: "",

  places: [],

  fill: false,
};

InteractiveMap.styles = styles;

export default connect()(radium(InteractiveMap));
