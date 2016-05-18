import React from "react";
import radium from "radium";
import Icon from "../icon";

function Rating({ amount, text, provider }) {
  const ratingMap = {
    [0]: "0_0",
    [0.5]: "0_5",
    [1]: "1_0",
    [1.5]: "1_5",
    [2]: "2_0",
    [2.5]: "2_5",
    [3]: "3_0",
    [3.5]: "3_5",
    [4]: "4_0",
    [4.5]: "4_5",
    [5]: "5_0",
  };

  const label = amount ? `${amount} rating` : "";

  const iconDimensions = {
    height: "1.2rem",
    width: "10rem",
  };

  const providers = {
    bookingcom: "booking.com",
    opentable: "OpenTable",
    gadventures: "G Adventures",
    viator: "Viator",
  };

  return (
    <div
      className="Rating"
      title={label}
    >
      {amount &&
        <Icon
          name={`rating-${ratingMap[amount]}`}
          label={label}
          dimensions={iconDimensions}
        />
      }

      {text &&
        <div>{text}</div>
      }

      {provider &&
        <div>{providers[provider]}</div>
      }
    </div>
  );
}

Rating.propTypes = {
  /**
   * A numeric value, 0-5
   */
  amount: React.PropTypes.oneOf([
    0,
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
  ]),

  /**
   * A string representation of a rating
   */
  text: React.PropTypes.string,

  /**
   * If the rating comes from a third-party
   */
  provider: React.PropTypes.oneOf([
    "",
    "bookingcom",
    "opentable",
    "gadventures",
    "viator",
  ]),
};

Rating.defaultProps = {
  amount: "",

  text: "",

  provider: "",
};

export default radium(Rating);
