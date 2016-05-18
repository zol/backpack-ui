import React from "react";
import radium from "radium";
import { color, media } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    base: {
      lineHeight: 1,
    },

    tag: {
      backgroundColor: color.red,
      display: "inline-block",
      padding: ".6rem .8rem .4rem",
      textAlign: "center",
      verticalAlign: "middle",
    },
  },

  amount: {
    base: {
      display: "inline-block",
      lineHeight: 1,
    },

    size: {
      small: {
        fontSize: "1.1rem",
      },
      medium: {
        fontSize: "2rem",
      },
      large: {
        fontSize: "3.6rem",
      },
    },

    weight: {
      thin: {
        fontWeight: 300,
      },
      normal: {
        fontSize: 400,
      },
      thick: {
        fontSize: 600,
      },
    },

    emphasized: {
      color: color.red,
      fontSize: "3.6rem",
      fontWeight: 300,
    },

    tag: {
      color: color.white,
      fontSize: "1.2rem",
      fontWeight: 600,
    },

    thin: {
      fontSize: "2rem",
      fontWeight: 300,
    },
  },

  rate: {
    base: {
      color: `rgba(${rgb(color.darkGray)}, .4)`,
      fontSize: "1.1rem",
      fontWeight: 600,
      letterSpacing: ".06rem",
      lineHeight: 1,
      textTransform: "uppercase",

      [`@media (max-width: ${media.max["768"]})`]: {
        marginTop: ".3rem",
      },

      [`@media (min-width: ${media.min["768"]})`]: {
        display: "inline-block",
      },
    },
  },

  currencySymbol: {
    base: {},

    emphasized: {
      fontSize: "1.8rem",
      top: "-1.2rem",
    },
  },
};

/**
 * A standalone price for an item
 */
const Price = ({ amount, rate, currency, emphasized, thin, tag }) => {
  const style = {
    container: [styles.container.base],
    amount: [styles.amount.base],
    rate: [styles.rate.base],
    currencySymbol: [styles.currencySymbol.base],
  };

  if (emphasized) {
    style.container.push(styles.container.emphasized);
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

  const currencySymbol = {
    USD: "$",
  };

  let Rate;

  if (rate) {
    Rate = (
      <div
        className="Price-rate"
        style={style.rate}
      >
        {rate}
      </div>
    );
  }

  const CurrencySymbolComponent = (emphasized) ? (
    <sup
      className="Price-symbol"
      style={style.currencySymbol}
    >
      {currencySymbol[currency]}
    </sup>
  ) : (
    `${currencySymbol[currency]}`
  );

  return (
    <div
      className="Price clearfix"
      style={style.container}
    >
      <div
        className="Price-amount"
        style={style.amount}
      >
        {CurrencySymbolComponent}{amount}
      </div>

      {Rate}
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
};

Price.defaultProps = {
  amount: 0,

  rate: "",

  currency: "USD",

  emphasized: false,

  thin: false,

  tag: false,
};

Price.styles = styles;

export default radium(Price);
