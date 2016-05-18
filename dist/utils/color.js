"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lighten = exports.darken = exports.rgb = undefined;

var _color = require("color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a hex value into RGB
 * @param  {String} hex    Hexidecimal color value to change
 * @return {String}        RGB values
 */
function rgb(hex) {
  return (0, _color2.default)(hex).rgbArray().join(",");
}

/**
 * Replicate Sass's darken function
 * @param  {String} hex    Hexidecimal color value to modify
 * @param  {Number} amount Amount to lighten, between 1 and 100
 * @return {String}        New hexidecimal color value
 */
function darken(hex, amount) {
  return (0, _color2.default)(hex).darken(amount / 100).hexString();
}

/**
 * Replicate Sass's lighten function
 * @param  {String} hex    Hexidecimal color value to modify
 * @param  {Number} amount Amount to lighten, between 1 and 100
 * @return {String}        New hexidecimal color value
 */
function lighten(hex, amount) {
  return (0, _color2.default)(hex).lighten(amount / 100).hexString();
}

exports.rgb = rgb;
exports.darken = darken;
exports.lighten = lighten;