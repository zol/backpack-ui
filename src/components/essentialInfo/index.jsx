"use strict";

import React from "react";
import SidebarSection from "../sidebarSection";
import Rating from "../rating";
import StaticMap from "../staticMap";

function EssentialInfo({ poi, place, mobile }) {
  const showContact = (poi.url || poi.email || poi.telephone);
  const showMap = poi.address.street || place.attributes.name || poi.location.coordinates;

  const headings = {
    rating: {
      title: "Rating",
      icon: "star",
    },
    duration: {
      title: "Duration",
      icon: "clock",
    },
    price: {
      title: "Price",
      icon: "price",
    },
    hours: {
      title: "Hours",
      icon: "clock",
    },
    contact: {
      title: "Contact",
      icon: "globe",
    },
    address: {
      title: "Address",
      icon: "pin",
    },
    convenience: {
      title: "Convenience",
      icon: "guest-services",
    },
  };

  return (
    <div className="EssentialInfo">
      {poi.rating &&
        <SidebarSection {...headings.rating}>
          <Rating
            amount={poi.rating}
          />
        </SidebarSection>
      }

      {poi.duration &&
        <SidebarSection {...headings.duration}>
          {poi.duration}
        </SidebarSection>
      }

      {poi.price_string &&
        <SidebarSection {...headings.price}>
          {poi.price_string}
        </SidebarSection>
      }

      {poi.hours_string &&
        <SidebarSection  {...headings.hours}>
          {poi.hours_string}
        </SidebarSection>
      }

      {!mobile && showContact &&
        <SidebarSection {...headings.contact} scopedStyles>
          <ul>
            {poi.url && <li><a href={`${poi.url}`}>{poi.url}</a></li>}
            {poi.email && <li><a href={`mailto:${poi.email}`}>{poi.email}</a></li>}
            {typeof poi.telephone === "string" &&
              <li><a href={`tel:${poi.telephone}`}>{poi.telephone}</a></li>}
            {typeof poi.telephone === "object" && Object.keys(poi.telephone).map((t) => (
              <li><a href={`tel:${poi.telephone[t]}`}>{poi.telephone[t]}</a></li>))}
          </ul>
        </SidebarSection>
      }

      {showMap &&
        <SidebarSection {...headings.address}>
          {poi.address.street && <div>{poi.address.street}</div>}
          {place.attributes.name && <div>{place.attributes.name}</div>}
          {!mobile && poi.location.coordinates &&
            <StaticMap
              location={poi.location.coordinates.join(",")}
              size="278x90"
              sidebar
            />
          }
        </SidebarSection>
      }
    </div>
  );
}

EssentialInfo.propTypes = {
  /**
   * POI data
   */
  poi: React.PropTypes.object.isRequired,

  /**
   * Place data for POI
   */
  place: React.PropTypes.object.isRequired,

  /**
   * Whether or not the layout should be formatted for mobile screen sizes
   */
  mobile: React.PropTypes.bool.isRequired,
};

EssentialInfo.defaultProps = {
  poi: {},

  place: {},

  mobile: true,
};

export default EssentialInfo;
