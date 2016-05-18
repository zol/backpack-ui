import React from "react";
import radium, { Style } from "radium";
import moment from "moment";
import Price from "../price";
import Button from "../button";
import Input from "../form/input";
import NumberInput from "../form/numberInput";
import Select from "../form/select";
import InputGroup from "../form/inputGroup";
import { color, media } from "rizzo-next/sass/settings.json";
import { add, subtract, gutter, span } from "../../utils/grid";

const styles = {
  price: {
    base: {
      marginBottom: "2.7rem",
    },
  },

  form: {
    base: {
      position: "relative",
      width: "100%",
    },
  },

  fieldset: {
    base: {
      marginTop: "2rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        marginTop: gutter("static", 12, 0.5),
      },
    },

    notFirst: {
      [`@media (min-width: ${media.min["768"]})`]: {
        marginLeft: gutter("fluid", 3, 0.5),
      },
    },

    size: {
      small: {
        [`@media (min-width: ${media.min["768"]})`]: {
          width: subtract([span("1 of 3"), gutter("fluid", 3)]),
        },
      },
      medium: {
        [`@media (min-width: ${media.min["768"]})`]: {
          width: add([span("1 of 3"), gutter("fluid", 3)]),
        },
      },
      large: {
        [`@media (min-width: ${media.min["768"]})`]: {
          width: add([span("2 of 3"), gutter("fluid", 3), gutter("fluid", 3, 0.5)]),
        },
      },
      full: {
        width: "100%",
      },
    },
  },

  button: {
    base: {
      marginTop: gutter("static"),
    },
  },
};

function Booking({ type, price, filter }) {
  const checkInValue = moment().add(7, "d").format("D MMM YYYY");
  const checkOutValue = moment().add(8, "d").format("D MMM YYYY");

  const timeOptions = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const FieldLayout = {
    activity: (
      <div className="Booking-fieldLayout clearfix">
        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="Travel on"
            id="activityDate"
          >
            <Input
              type="text"
              id="activityDate"
              defaultValue={checkInValue}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>

        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="People"
            id="activityPeople"
          >
            <NumberInput
              id="activityPeople"
              min={1}
              max={4}
              value={2}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>
      </div>
    ),

    hotel: (
      <div className="Booking-fieldLayout clearfix">
        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="Check in"
            id="hotelCheckInDate"
            size="half"
          >
            <Input
              type="text"
              id="hotelCheckInDate"
              defaultValue={checkInValue}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>

          <InputGroup
            label="Check out"
            id="hotelCheckOutDate"
            size="half"
            removeBorder
          >
            <Input
              type="text"
              id="hotelCheckOutDate"
              defaultValue={checkOutValue}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>

        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="Guests"
            id="hotelGuests"
          >
            <NumberInput
              id="hotelGuests"
              min={1}
              max={4}
              value={2}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>
      </div>
    ),

    restaurant: (
      <div className="Booking-fieldLayout clearfix">
        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="Day"
            id="restaurantDay"
            size="half"
          >
            <Input
              type="text"
              id="restaurantDay"
              defaultValue={checkInValue}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>

          <InputGroup
            label="Time"
            id="restaurantTime"
            size="half"
            removeBorder
          >
            <Select
              id="restaurantTime"
              defaultValue="7:00 PM"
              options={timeOptions}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>

        <fieldset
          className="Booking-fieldset"
          style={styles.fieldset.base}
        >
          <InputGroup
            label="People"
            id="restaurantPeople"
          >
            <NumberInput
              id="restaurantPeople"
              min={1}
              max={4}
              value={2}
              size="huge"
              theme="inputGroup"
              required
              fill
            />
          </InputGroup>
        </fieldset>
      </div>
    ),
  };

  const buttonClick = {
    activity: null,
    hotel: null,
    restaurant: null,
  };

  const buttonLabel = {
    activity: "Check prices",
    hotel: "Reserve",
    restaurant: "Find a table",
  };

  return (
    <div className="Booking">
      <Style
        scopeSelector=".Booking"
        rules={{
          ".Price": {
            position: "relative",
            width: "100%",
          },

          ".Price-amount": {},

          ".Price-rate": {},

          mediaQueries: {
            [`(max-width: ${media.max["768"]})`]: {
              ".Price": {
                textAlign: "center",
              },
            },

            [`(min-width: ${media.min["768"]})`]: {
              ".Price": {
                borderBottom: ".1rem solid",
                borderBottomColor: color.gray,
                paddingBottom: ".1rem",
              },

              ".Price-rate": {
                bottom: ".9rem",
                position: "absolute",
                right: 0,
              },
            },
          },
        }}
      />

      {price && price.amount &&
        <div
          className="Booking-price"
          style={styles.price.base}
        >
          <Price
            amount={price.amount}
            currency={price.currency}
            rate={price.rate}
            parent="booking"
            emphasized
          />
        </div>
      }

      <form
        className="Booking-form clearfix"
        style={[
          styles.form.base,
          !filter && {
            marginBottom: gutter("static"),
          },
        ]}
      >
        {FieldLayout[type]}

        {!filter &&
          <div
            className="Booking-button"
            style={styles.button.base}
          >
            <Button
              height="tall"
              rounded={false}
              full
              onClick={buttonClick[type]}
            >
              {buttonLabel[type]}
            </Button>
          </div>
        }
      </form>
    </div>
  );
}

Booking.propTypes = {
  /**
   * Type of thing to be booked
   */
  type: React.PropTypes.oneOf([
    "activity",
    "hotel",
    "restaurant",
  ]),

  /**
   * Price of thing to be booked
   */
  price: React.PropTypes.object,

  /**
   * Should the form be used on a list page to filter; no submit button
   */
  filter: React.PropTypes.bool,
};

Booking.defaultProps = {
  type: "",

  price: {},

  filter: false,
};

Booking.styles = styles;

export default radium(Booking);
