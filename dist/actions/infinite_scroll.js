"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImagesDone = exports.fetchImages = exports.fetchPoi = exports.fetchNextDone = exports.fetchNext = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchNextDone(pois) {
  return {
    type: "FETCH_NEXT_DONE",
    data: pois
  };
}

function fetchNext(id) {
  return function (dispatch) {
    _jquery2.default.ajax({
      url: "/place/" + id + "/pois",
      contentType: "application/json"
    }).done(function (pois) {
      dispatch(fetchNextDone(pois.data));
    });

    dispatch({
      type: "FETCH_NEXT"
    });
  };
}

function fetchPoiDone(poi) {
  return {
    type: "FETCH_POI_DONE",
    data: poi
  };
}

function fetchPoi(id) {
  return function (dispatch) {
    _jquery2.default.ajax({
      url: "/pois/" + id,
      contentType: "application/json"
    }).done(function (poi) {
      dispatch(fetchPoiDone(poi.data));
    });

    dispatch({
      type: "FETCH_NEXT"
    });
  };
}

function fetchImages(id) {
  return function (dispatch) {
    _jquery2.default.ajax({
      url: "/pois/" + id + "/images",
      contentType: "application/json"
    }).done(function (images) {
      dispatch(fetchImagesDone(images.data, id));
    });

    dispatch({
      type: "FETCH_IMAGES"
    });
  };
}

function fetchImagesDone(images, id) {
  return {
    type: "FETCH_IMAGES_DONE",
    data: {
      id: id,
      images: images
    }
  };
}

exports.fetchNext = fetchNext;
exports.fetchNextDone = fetchNextDone;
exports.fetchPoi = fetchPoi;
exports.fetchImages = fetchImages;
exports.fetchImagesDone = fetchImagesDone;