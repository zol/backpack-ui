import React from "react";
import radium from "radium";
import Icon from "../icon";
import ProviderLogo from "../providerLogo";
import schema from "../../utils/schema";

function Rating({ amount, max, description, provider, icon }) {
  const ratingMap = {
    0: "0_0",
    0.5: "0_5",
    1: "1_0",
    1.5: "1_5",
    2: "2_0",
    2.5: "2_5",
    3: "3_0",
    3.5: "3_5",
    4: "4_0",
    4.5: "4_5",
    5: "5_0",
  };

  const label = amount ? `${amount} rating` : "";

  const iconDimensions = {
    height: "12px",
    width: "100px",
  };

  const schemaProps = schema({
    itemProp: "aggregateRating",
    itemType: "AggregateRating",
  });

  return (
    <div
      className="Rating"
      title={label}
      {...schemaProps}
    >
      {amount && icon && ratingMap[amount] &&
        <meta itemProp="ratingValue" content={amount} />
      }

      {amount && icon && ratingMap[amount] &&
        <Icon
          name={`rating-${ratingMap[amount]}`}
          label={label}
          dimensions={iconDimensions}
        />
      }

      {((amount && icon && !ratingMap[amount]) || (amount && !icon)) &&
        <div style={{ display: "inline-block" }}>
          {description && `${description} `}
          <span itemProp="ratingValue">{amount}</span>
          {max && ` out of ${max}`}
        </div>
      }

      {provider &&
        <ProviderLogo
          provider={provider}
          style={{
            float: "right",
            height: "21px",
            marginTop: "-4px",
          }}
        />
      }
    </div>
  );
}

Rating.propTypes = {
  /**
   * A numeric value, 0-5
   */
  amount: React.PropTypes.number,

  /**
   * A number that defines the maximum rating value
   */
  max: React.PropTypes.number,

  /**
   * A word that describes the rating, i.e., excellent, great, poor, etc.
   */
  description: React.PropTypes.string,

  /**
   * If the rating comes from a third-party
   */
  provider: React.PropTypes.oneOf([
    "",
    "bdc",
    "hostelworld",
    "opentable",
    "gadventures",
    "viator",
  ]),

  /**
   * Should the rating use an icon instead of text to describe the rating
   */
  icon: React.PropTypes.bool,
};

Rating.defaultProps = {
  amount: "",

  max: 5,

  text: "",

  provider: "",

  icon: false,
};

export default radium(Rating);
