import React from "react";
import radium from "radium";
import { color, media } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    base: {
      lineHeight: 1,
      fontSize: "18px",
    },

    emphasized: {
      base: {
        fontSize: "36px",
      },

      parent: {
        listItem: {
          [`@media (max-width: ${media.max["768"]})`]: {
            fontSize: "20px",
          },
        },
      },
    },

    tag: {
      backgroundColor: color.red,
      color: color.white,
      display: "inline-block",
      fontSize: "12px",
      padding: `${6 / 12}em ${8 / 12}em ${4 / 12}em`,
      textAlign: "center",
      verticalAlign: "middle",
    },

    thin: {
      fontSize: "20px",
    },
  },

  amount: {
    base: {
      display: "inline-block",
      fontSize: "1em",
      lineHeight: 1,
    },

    emphasized: {
      color: color.red,
      fontWeight: 300,
    },

    tag: {
      fontWeight: 600,
    },

    thin: {
      fontWeight: 300,
    },
  },

  rate: {
    base: {
      color: `rgba(${rgb(color.darkGray)}, .4)`,
      fontSize: `${(11 / 36)}em`,
      fontWeight: 600,
      letterSpacing: ".6px",
      lineHeight: 1,
      textTransform: "uppercase",
    },

    parent: {
      listItem: {
        [`@media (max-width: ${media.max["768"]})`]: {
          display: "inline-block",
          fontSize: `${(9 / 20)}em`,
          paddingLeft: `${(2 / 9)}em`,
          paddingTop: `${(1 / 9)}em`,
          verticalAlign: "top",
        },

        [`@media (min-width: ${media.min["768"]})`]: {
          marginTop: `${(9 / 11)}em`,
        },
      },

      booking: {
        [`@media (max-width: ${media.max["768"]})`]: {
          marginTop: `${(3 / 11)}em`,
        },

        [`@media (min-width: ${media.min["768"]})`]: {
          display: "inline-block",
        },
      },
    },
  },

  currencySymbol: {
    base: {},

    emphasized: {
      fontSize: `${(18 / 36) * 100}%`,
      position: "relative",
      top: "-.65em",
    },
  },
};

/**
 * A standalone price for an item
 */
const Price = ({ amount, rate, currency, emphasized, thin, tag, parent }) => {
  const style = {
    container: [styles.container.base],
    amount: [styles.amount.base],
    rate: [styles.rate.base],
    currencySymbol: [styles.currencySymbol.base],
  };

  if (emphasized) {
    style.container.push(styles.container.emphasized.base);
    style.amount.push(styles.amount.emphasized);
    style.currencySymbol.push(styles.currencySymbol.emphasized);
  }

  if (thin) {
    style.amount.push(styles.amount.thin);
  }

  if (tag) {
    style.container.push(styles.container.tag);
    style.amount.push(styles.amount.tag);
  }

  if (parent) {
    style.container.push(styles.container.emphasized.parent[parent]);
    style.rate.push(styles.rate.parent[parent]);
  }

  const currencySymbol = {
    USD: "$",
  };

  return (
    <div
      className="Price clearfix"
      style={style.container}
    >
      <div
        className="Price-amount"
        style={style.amount}
      >
        {emphasized &&
          <span
            className="Price-symbol"
            style={style.currencySymbol}
          >
            {currencySymbol[currency]}
          </span>
        }

        {!emphasized &&
          `${currencySymbol[currency]}`
        }

        {amount}
      </div>

      {rate &&
        <div
          className="Price-rate"
          style={style.rate}
        >
          {rate}
        </div>
      }
    </div>
  );
};

Price.propTypes = {
  /**
   * The price amount
   */
  amount: React.PropTypes.number.isRequired,

  /**
   * The rate for the price, i.e., "per night"
   */
  rate: React.PropTypes.string,

  /**
   * The currency in which the price is displayed in
   */
  currency: React.PropTypes.string,

  /**
   * Change the color to show emphasis
   */
  emphasized: React.PropTypes.bool,

  /**
   * Render the price with a thinner font weight and slightly larger size
   */
  thin: React.PropTypes.bool,

  /**
   * Render the price with a tag-like style
   */
  tag: React.PropTypes.bool,

  /**
   * Name of parent component in which Price renders in
   */
  parent: React.PropTypes.oneOf([
    "",
    "booking",
    "listItem",
  ]),
};

Price.defaultProps = {
  amount: 0,

  rate: "",

  currency: "USD",

  emphasized: false,

  thin: false,

  tag: false,

  parent: "",
};

Price.styles = styles;

export default radium(Price);
