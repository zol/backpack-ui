"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = require("rizzo-next/sass/settings.json");

var _settings2 = _interopRequireDefault(_settings);

var _color = require("../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {
    appearance: "none",
    borderRadius: ".2rem",
    borderStyle: "solid",
    borderWidth: ".1rem",
    height: "auto",
    outline: 0,
    transition: "border-color 200ms",
    width: "100%"
  },

  size: {
    tiny: {
      fontSize: "1.1rem",
      padding: ".7rem .7rem .3rem"
    },
    small: {
      fontSize: "1.1rem",
      padding: "1.1rem 1.1rem .7rem"
    },
    medium: {
      fontSize: "1.3rem",
      padding: "1.5rem 1.5rem 1.1rem"
    },
    large: {
      fontSize: "1.5rem",
      padding: "1.9rem 1.9rem 1.5rem"
    },
    huge: _defineProperty({
      fontSize: "2rem",
      padding: "2.3rem 2.3rem 1.9rem"

    }, "@media (min-width: " + _settings2.default.media.min["768"] + ")", {
      fontSize: "1.6rem"
    })
  },

  theme: {
    base: {
      backgroundColor: _settings2.default.color.white,
      borderColor: (0, _color.darken)(_settings2.default.color.white, 17),
      color: "rgba(" + (0, _color.rgb)(_settings2.default.color.titleGray) + ", .72)",

      ":focus": {
        borderColor: (0, _color.darken)(_settings2.default.color.gray, 20)
      }
    },
    light: {
      backgroundColor: "transparent",
      borderColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.white) + ", .44)",
      color: _settings2.default.color.white,

      ":focus": {
        borderColor: "rgba(" + (0, _color.rgb)(_settings2.default.color.white) + ", .66)"
      }
    },
    dark: {
      backgroundColor: _settings2.default.color.white,
      borderColor: (0, _color.darken)(_settings2.default.color.white, 17),
      color: "rgba(" + (0, _color.rgb)(_settings2.default.color.titleGray) + ", .72)",

      ":focus": {
        borderColor: (0, _color.darken)(_settings2.default.color.gray, 20)
      }
    },
    inputGroup: {
      backgroundColor: _settings2.default.color.white,
      borderColor: "transparent",
      borderRadius: 0,
      borderWidth: 0,
      color: _settings2.default.color.darkGray,

      ":focus": {
        borderColor: _settings2.default.color.white
      }
    }
  },

  element: {
    input: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {}
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: _defineProperty({
          padding: "4rem 2rem 1.3rem"

        }, "@media (min-width: " + _settings2.default.media.min["768"] + ")", {
          padding: "3.5rem 1.5rem 1rem"
        })
      }
    },
    select: {
      base: {
        backgroundRepeat: "no-repeat",
        cursor: "pointer"
      },
      size: {
        tiny: {
          backgroundPosition: "calc(100% - .7rem) center",
          backgroundSize: ".6rem"
        },
        small: {
          backgroundPosition: "calc(100% - 1.1rem) center",
          backgroundSize: ".8rem"
        },
        medium: {
          backgroundPosition: "calc(100% - 1.5rem) center",
          backgroundSize: ".8rem"
        },
        large: {
          backgroundPosition: "calc(100% - 1.9rem) center",
          backgroundSize: "1rem"
        },
        huge: {
          backgroundPosition: "calc(100% - 2.3rem) center",
          backgroundSize: "1.2rem"
        }
      },
      theme: {
        base: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')" },
        // eslint-disable-line max-len
        light: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')" },
        // eslint-disable-line max-len
        dark: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')" },
        // eslint-disable-line max-len
        inputGroup: _defineProperty({
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')", // eslint-disable-line max-len
          backgroundPosition: "calc(100% - 2rem) 4.5rem",
          padding: "4rem 2rem 1.3rem"

        }, "@media (min-width: " + _settings2.default.media.min["768"] + ")", {
          backgroundPosition: "calc(100% - 2rem) 3.5rem",
          padding: "3.5rem 1.5rem 1rem"
        })
      }
    },
    textarea: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {}
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: {}
      }
    },
    numberInput: {
      container: {
        base: {
          position: "relative"
        }
      },

      button: {
        base: {
          backgroundColor: _settings2.default.color.white,
          borderLeft: ".1rem solid",
          borderLeftColor: (0, _color.darken)(_settings2.default.color.white, 17),
          color: _settings2.default.color.blue,
          display: "block",
          height: "calc(100% - .2rem)",
          position: "absolute",
          top: ".1rem",
          transition: "color 400ms",

          ":hover": {
            color: (0, _color.lighten)(_settings2.default.color.blue, 7)
          },
          ":focus": {
            color: (0, _color.lighten)(_settings2.default.color.blue, 7)
          },
          ":active": {
            color: (0, _color.lighten)(_settings2.default.color.blue, 7)
          }
        },

        size: {
          tiny: {
            fontSize: "1.1rem",
            width: "2.5rem"
          },
          small: {
            fontSize: "1.3rem",
            width: "3.3rem"
          },
          medium: {
            fontSize: "1.5rem",
            width: "4.4rem"
          },
          large: {
            fontSize: "2.2rem",
            width: "5.4rem"
          },
          huge: {
            fontSize: "2.2rem",
            width: "6.2rem"
          }
        },

        plus: {
          size: {
            tiny: {
              right: "2.6rem"
            },
            small: {
              right: "3.4rem"
            },
            medium: {
              right: "4.5rem"
            },
            large: {
              right: "5.5rem"
            },
            huge: {
              right: "6.3rem"
            }
          }
        },

        minus: {
          right: ".1rem"
        }
      }
    }
  },

  state: {
    alert: {},
    error: {},
    info: {},
    success: {}
  },

  fill: {
    display: "block",
    width: "100%"
  }
};

exports.default = styles;