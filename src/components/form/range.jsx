import React from "react";
import radium, { Style } from "radium";
import { color } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";
import Slider from "rc-slider";

const scopedStyles = {
  ".rc-slider-handle": {
    border: 0,
    boxShadow: `0 1px 3px rgba(${rgb(color.black)}, .36)`,
    height: "22px",
    marginLeft: "-11px",
    marginTop: "-9px",
    width: "22px",
  },

  ".rc-slider-step": {
    height: "3px",
  },

  ".rc-slider-track": {
    backgroundColor: color.blue,
    height: "3px",
  },

  ".rc-slider-mark": {
    fontSize: "1.3rem",
    top: "2.4rem",
  },

  ".rc-slider-mark-text": {
    color: color.darkGray,
    lineHeight: 1,
  },

  ".rc-slider-dot": {
    display: "none",
  },
};

function label(value, unit) {
  return value === 1 ? unit : `${unit}s`;
}

function hoursToDays(hours) {
  const days = Math.ceil(hours / 24);
  return `${days} ${label(days, "day")}`;
}

function Range({ onChange, defaultValue, min, max, price, time }) {
  const value = defaultValue.length
    ? defaultValue
    : [min, max];

  let marks;

  if (price) {
    marks = {
      [min]: `$${min}`,
      [max]: `$${max}`,
    };
  }

  if (time) {
    marks = {
      [min]: min >= 24 ? hoursToDays(min) : `${min} ${label(min, "hour")}`,
      [max]: max >= 24 ? hoursToDays(max) : `${max} ${label(max, "hour")}`,
    };
  }

  if (!price && !time) {
    marks = {
      [min]: min,
      [max]: max,
    };
  }

  return (
    <div className="Range">
      <Style
        scopeSelector=".Range"
        rules={scopedStyles}
      />

      <Slider
        className="Range-slider"
        allowCross={false}
        defaultValue={value}
        onChange={onChange}
        min={min}
        max={max}
        marks={marks}
        tipFormatter={null}
        range
      />
    </div>
  );
}

Range.propTypes = {
  /**
   * Method to run when slide values change
   */
  onChange: React.PropTypes.func.isRequired,

  /**
   * Initial values for the slider
   */
  defaultValue: React.PropTypes.array,

  /**
   * Minimum value for slider
   */
  min: React.PropTypes.number,

  /**
   * Maximum value for slider
   */
  max: React.PropTypes.number,

  /**
   * Is this a price slider? Format the marks with $
   */
  price: React.PropTypes.bool,

  /**
   * Is this a time slider? Format the marks with hours/days
   */
  time: React.PropTypes.bool,
};

Range.defaultProps = {
  onChange: null,

  defaultValue: [],

  min: 0,

  max: 100,

  price: false,

  time: false,
};

export default radium(Range);
