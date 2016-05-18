"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hoverPlace(id) {
  return {
    type: "HOVER_PLACE",
    data: id
  };
}

exports.hoverPlace = hoverPlace;