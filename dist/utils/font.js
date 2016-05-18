"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.font = undefined;

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a font stack
 * @param  {String} family The name of the fony family stored in the settings
 * @return {String}        Font stack
 */
function font(family) {
  return _settings2.default.font.family[family.toLowerCase()].join(", ");
}

exports.font = font;