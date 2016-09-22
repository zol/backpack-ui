"use strict";

/**
 * Adds outline styles
 * @param  {Number} offset Outline offset amount
 * @return {Object}        CSS styles
 */
function outline(offset = 2) {
  return {
    outline: "1px lightgray dotted",
    outlineOffset: `${offset}px`,
  };
}

export default outline;
