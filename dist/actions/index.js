"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _infinite_scroll = require("./infinite_scroll");

var scrollActions = _interopRequireWildcard(_infinite_scroll);

var _nearbyPlaces = require("./nearbyPlaces");

var nearbyPlacesActions = _interopRequireWildcard(_nearbyPlaces);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = (0, _objectAssign2.default)({}, scrollActions, nearbyPlacesActions);

exports.default = actions;