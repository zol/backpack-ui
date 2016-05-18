import React from "react";
import radium from "radium";
import truncate from "truncate";
import { color, media } from "rizzo-next/sass/settings.json";
import { Link } from "react-router";
import Price from "../price";
import Bookmark from "../bookmark";
import ReviewedBadge from "../reviewedBadge";
import Bullet from "../decoration/bullet";
import { add, subtract, gutter, span, percentage } from "../../utils/grid";

const gridOffset = "1.8rem"; // the image is off the grid by this amount
const containerWidth = span(8, "static");
const imageWidth = add([span(1, "static"), gutter("static"), gridOffset], "static");
const contentWidth = subtract([span(7, "static"), gutter("static"), gridOffset], "static");
const infoWidth = subtract([span(6, "static"), gutter("static"), "1.8rem"], "static");
const priceWidth = add([span(1, "static"), gutter("static")], "static");

const styles = {
  container: {
    base: {
      overflow: "hidden",
      position: "relative",
    },
  },

  image: {
    base: {
      float: "left",
      marginRight: percentage("15px", "335px"),
      position: "relative",
      width: percentage("78px", "335px"),

      [`@media (min-width: ${media.min["768"]})`]: {
        width: percentage(imageWidth, containerWidth),
        marginRight: gutter("fluid", 8),
      },
    },

    img: {
      display: "block",
      width: "100%",
    },
  },

  content: {
    base: {
      float: "left",
      width: percentage("242px", "335px"),

      [`@media (min-width: ${media.min["768"]})`]: {
        width: percentage(contentWidth, containerWidth),
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        display: "flex",
      },
    },
  },

  info: {
    base: {
      [`@media (min-width: ${media.min["1024"]})`]: {
        float: "left",
        paddingRight: percentage(span(1, "static"), contentWidth),
        width: percentage(infoWidth, contentWidth),
      },
    },

    noFlexbox: {
      [`@media (min-width: ${media.min["1024"]}) and (max-width: ${1365 * 0.0625}em)`]: {
        float: "none",
        paddingRight: 0,
        width: "100%",
      },
    },
  },

  header: {
    base: {
      overflow: "hidden",
    },
  },

  category: {
    base: {
      color: color.detailHeaderSmall,
      fontSize: "1rem",
      lineHeight: 1,
      marginBottom: ".5rem",
      textTransform: "uppercase",

      [`@media (max-width: ${media.max["768"]})`]: {
        letterSpacing: ".4px",
        marginTop: ".1rem",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.2rem",
        marginBottom: "1rem",
      },
    },

    sponsored: {
      color: color.orange,
    },

    topChoice: {
      color: color.red,
    },

    location: {
      [`@media (max-width: ${media.max["768"]})`]: {
        display: "none",
      },
    },
  },

  title: {
    base: {
      color: color.darkGray,
      float: "left",
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-1px",
      lineHeight: (24 / 20),
      margin: 0,
      maxWidth: "90%",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "2.8rem",
        lineHeight: (34 / 28),
      },
    },
  },

  bookmark: {
    base: {
      [`@media (max-width: ${media.max["768"]})`]: {
        bottom: "1.5rem",
        position: "absolute",
        right: 0,
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        display: "inline-block",
        marginLeft: ".5rem",
        marginTop: ".8rem",
      },
    },
  },

  location: {
    base: {
      fontSize: "1.4rem",
      lineHeight: 1,
      marginTop: ".9rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.8rem",
        lineHeight: 1,
        marginTop: "2.1rem",
      },
    },
  },

  features: {
    base: {
      [`@media (max-width: ${media.max["768"]})`]: {
        display: "none",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        color: color.titleGray,
        fontSize: "1.4rem",
        lineHeight: 1,
        listStyle: "none",
        marginTop: "2.5rem",
      },
    },

    item: {
      display: "inline",
    },
  },

  description: {
    base: {
      color: color.titleGray,
      fontSize: "1.4rem",
      lineHeight: (24 / 14),
      marginBottom: "2.7rem",
      marginTop: ".9rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        fontSize: "1.8rem",
        lineHeight: (32 / 18),
        marginTop: "1.4rem",
      },
    },
  },

  price: {
    base: {
      marginTop: "1.1rem",

      [`@media (max-width: ${media.max["768"]})`]: {
        display: "inline-block",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        marginTop: "2.5rem",
      },

      [`@media (min-width: ${media.min["1024"]})`]: {
        float: "left",
        textAlign: "right",
        width: priceWidth,
      },
    },

    noFlexbox: {
      [`@media (min-width: ${media.min["1024"]}) and (max-width: ${1365 * 0.0625}em)`]: {
        float: "none",
        textAlign: "left",
        width: "100%",
      },

      [`@media (min-width: ${1366 * 0.0625}em)`]: {
        textAlign: "right",
        width: percentage(priceWidth, contentWidth),
      },
    },

    callToBook: {
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: 1,
    },
  },
};

function ListItemBookable({
  title,
  slug,
  type,
  subtype,
  address,
  place,
  price,
  features,
  image,
  description,
  sponsored,
  topChoice,
  reviewed,
}) {
  const shortDescription = truncate(description.replace(/(<([^>]+)>)/ig, ""), 115);

  const imgixString = "?auto=enhance&w=128&h=160&fit=crop";

  let hasFlexbox;

  if (typeof document !== "undefined") {
    hasFlexbox = document && document.documentElement.classList ?
      document.documentElement.classList.contains("flexbox") :
      new RegExp("(^| )" + "flexbox" + "( |$)", "gi").test(document.documentElement.className);
  }

  return (
    <div className="ListItem" style={styles.container.base}>
      {image.path &&
        <div className="ListItem-image" style={styles.image.base}>
          <Link to={slug} style={styles.image.img}>
            <img src={`${image.path}${imgixString}`} alt="" style={styles.image.img} />

            {reviewed &&
              <ReviewedBadge parent="listItem" />
            }
          </Link>
        </div>
      }

      <div className="ListItem-content" style={image.path && styles.content.base}>
        <div
          className="ListItem-info"
          style={[styles.info.base, !hasFlexbox && styles.info.noFlexbox]}
        >
          <header className="ListItem-header" style={styles.header.base}>
            <div className="ListItem-category" style={styles.category.base}>
              {sponsored &&
                <span style={styles.category.sponsored}>
                  Sponsored
                </span>
              } {topChoice &&
                <span style={styles.category.topChoice}>
                  Top Choice
                </span>
              } {subtype} {place.name &&
                <span style={styles.category.location}> in {place.name}</span>
              }
            </div>

            <h2 className="ListItem-title" style={styles.title.base}>
              <Link to={slug} style={{ color: "currentColor" }}>
                {title}
              </Link>
            </h2>

            <div className="ListItem-bookmark" style={styles.bookmark.base}>
              <Bookmark
                onClick={null}
                size="small"
              />
            </div>
          </header>

          {description &&
            <div className="ListItem-description" style={styles.description.base}>
              {shortDescription}
            </div>
          }

          {address.street && place.name &&
            <div className="ListItem-location" style={styles.location.base}>
              {address.street}
              <Bullet space="both" color={color.detailHeaderSmall} />
              {place.name}
            </div>
          }

          {features.length > 0 &&
            <ul className="ListItem-features" style={styles.features.base}>
              {features.map((item, i) => (
                <li style={styles.features.item} key={i}>
                  {item}
                  {i !== features.length - 1 &&
                    <Bullet space="both" color={color.detailHeaderSmall} />
                  }
                </li>
              ))}
            </ul>
          }
        </div>

        <div
          className="ListItem-price"
          style={[styles.price.base, !hasFlexbox && styles.price.noFlexbox]}
        >
          {!price.amount &&
            <div style={styles.price.callToBook}>Call to book</div>
          }

          {price.amount &&
            <Price
              amount={price.amount}
              rate={price.rate}
              parent="listItem"
              emphasized
            />
          }
        </div>
      </div>
    </div>
  );
}

ListItemBookable.propTypes = {
  /**
   * The name of the POI
   */
  title: React.PropTypes.string.isRequired,

  /**
   * The URL slug of the POI
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * The type of POI; i.e. Sights
   */
  type: React.PropTypes.string.isRequired,

  /**
   * The subtype of POI; i.e. Museum
   */
  subtype: React.PropTypes.string.isRequired,

  /**
   * The address data for the POI
   */
  address: React.PropTypes.object.isRequired,

  /**
   * The place data for the POI; required keys are name and type
   */
  place: React.PropTypes.object.isRequired,

  /**
   * Price object for the POI; requires amount and rate keys
   */
  price: React.PropTypes.object,

  /**
   * A short list of features; limited to three
   */
  features: React.PropTypes.array,

  /**
   * Image src for the POI; required keys are path and orientation
   */
  image: React.PropTypes.object,

  /**
   * Description for POI
   */
  description: React.PropTypes.string,

  /**
   * Add a "sponsored" label
   */
  sponsored: React.PropTypes.bool,

  /**
   * Add a "top choice" label
   */
  topChoice: React.PropTypes.bool,

  /**
   * If the POI has been reviewed by Lonely Planet staff
   */
  reviewed: React.PropTypes.bool,
};

ListItemBookable.defaultProps = {
  title: "",

  slug: "",

  type: "",

  subtype: "",

  address: {},

  place: {},

  price: {},

  features: [],

  image: {},

  description: "",

  sponsored: false,

  topChoice: false,

  reviewed: false,
};

ListItemBookable.styles = styles;

export default radium(ListItemBookable);
