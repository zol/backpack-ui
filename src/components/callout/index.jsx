import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import { gutter } from "../../utils/grid";
import { rgb } from "../../utils/color";
import Heading from "../heading";
import Price from "../price";
import MoreLink from "../moreLink";

const styles = {
  container: {
    base: {
      backgroundColor: settings.color.white,
      boxShadow: `0 0 2rem rgba(${rgb(settings.color.black)}, .05)`,

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        display: "flex",
        padding: gutter("static"),
      },
    },
  },

  content: {
    base: {
      [`@media (max-width: ${settings.media.max["600"]})`]: {
        padding: "2.5rem",
      },
    },

    align: {
      center: {
        alignSelf: "center",
      },
    },
  },

  heading: {
    base: {
      fontSize: "2rem",
      lineHeight: (26 / 20),
    },
  },

  description: {
    base: {
      color: settings.color.text,
      fontSize: "1.4rem",
      lineHeight: 1.5,
      marginTop: "1.4rem",
      paddingRight: "4rem",
    },
  },

  image: {
    base: {
      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginRight: gutter("static"),
      },
    },

    img: {
      [`@media (max-width: ${settings.media.max["600"]})`]: {
        width: "100%",
      },
    },
  },

  category: {
    base: {
      color: settings.color.lightText,
      fontSize: "1.1rem",
      lineHeight: 1,
      marginBottom: ".4rem",
      textTransform: "uppercase",
    },
  },

  price: {
    base: {
      marginTop: "1.2rem",
    },
  },

  moreLink: {
    base: {
      marginTop: "1.6rem",
    },
  },

  type: {
    activity: {},

    book: {},
  },
};

function Callout({ type, heading, slug, image, price, description, category, align }) {
  const style = {
    container: [styles.container.base],
    content: [styles.content.base],
    description: [styles.description.base],
    image: [styles.image.base],
    category: [styles.category.base],
    price: [styles.price.base],
    moreLink: [styles.moreLink.base],
  };

  if (align) {
    style.content.push(styles.content.align[align]);
  }

  return (
    <div
      className="Callout"
      style={style.container}
      data-type={type}
    >
      <div
        className="Callout-image"
        style={style.image}
      >
        <img
          style={styles.image.img}
          src={image}
          alt=""
        />
      </div>

      <div
        className="Callout-content"
        style={style.content}
      >
        {category &&
          <div style={style.category}>
            {category} {type}
          </div>
        }

        <Heading
          size="medium"
          weight="thick"
          override={styles.heading.base}
        >
          {heading}
        </Heading>

        {price && price.amount &&
          <div
            className="Callout-price"
            style={style.price}
          >
            <Price
              amount={price.amount}
              currency={price.currency}
              thin
            />
          </div>
        }

        {description &&
          <p style={style.description}>
            {description}
          </p>
        }

        <div
          className="Callout-moreLink"
          style={style.moreLink}
        >
          <MoreLink
            href={slug}
            size="small"
          >
            Learn more
          </MoreLink>
        </div>
      </div>
    </div>
  );
}

Callout.propTypes = {
  type: React.PropTypes.oneOf([
    "activity",
    "book",
  ]).isRequired,

  heading: React.PropTypes.string.isRequired,

  slug: React.PropTypes.string.isRequired,

  image: React.PropTypes.string.isRequired,

  price: React.PropTypes.object,

  description: React.PropTypes.string,

  category: React.PropTypes.string,

  align: React.PropTypes.oneOf([
    "",
    "center",
  ]),
};

Callout.defaultProps = {
  type: "",

  heading: "",

  slug: "",

  image: "",

  price: {},

  description: "",

  category: "",

  align: "",
};

Callout.styles = styles;

export default radium(Callout);
