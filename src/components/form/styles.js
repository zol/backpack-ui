import settings from "rizzo-next/sass/settings.json";
import { lighten, darken, rgb } from "../../utils/color";

const styles = {
  base: {
    appearance: "none",
    borderRadius: ".2rem",
    borderStyle: "solid",
    borderWidth: ".1rem",
    height: "auto",
    outline: 0,
    transition: "border-color 200ms",
    width: "100%",
  },

  size: {
    tiny: {
      fontSize: "1.1rem",
      padding: ".7rem .7rem .3rem",
    },
    small: {
      fontSize: "1.1rem",
      padding: "1.1rem 1.1rem .7rem",
    },
    medium: {
      fontSize: "1.3rem",
      padding: "1.5rem 1.5rem 1.1rem",
    },
    large: {
      fontSize: "1.5rem",
      padding: "1.9rem 1.9rem 1.5rem",
    },
    huge: {
      fontSize: "2rem",
      padding: "2.3rem 2.3rem 1.9rem",

      [`@media (min-width: ${settings.media.min["768"]})`]: {
        fontSize: "1.6rem",
      },
    },
  },

  theme: {
    base: {
      backgroundColor: settings.color.white,
      borderColor: darken(settings.color.white, 17),
      color: `rgba(${rgb(settings.color.titleGray)}, .72)`,

      ":focus": {
        borderColor: darken(settings.color.gray, 20),
      },
    },
    light: {
      backgroundColor: "transparent",
      borderColor: `rgba(${rgb(settings.color.white)}, .44)`,
      color: settings.color.white,

      ":focus": {
        borderColor: `rgba(${rgb(settings.color.white)}, .66)`,
      },
    },
    dark: {
      backgroundColor: settings.color.white,
      borderColor: darken(settings.color.white, 17),
      color: `rgba(${rgb(settings.color.titleGray)}, .72)`,

      ":focus": {
        borderColor: darken(settings.color.gray, 20),
      },
    },
    inputGroup: {
      backgroundColor: settings.color.white,
      borderColor: "transparent",
      borderRadius: 0,
      borderWidth: 0,
      color: settings.color.darkGray,

      ":focus": {
        borderColor: settings.color.white,
      },
    },
  },

  element: {
    input: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {},
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: {
          padding: "4rem 2rem 1.3rem",

          [`@media (min-width: ${settings.media.min["768"]})`]: {
            padding: "3.5rem 1.5rem 1rem",
          },
        },
      },
    },
    select: {
      base: {
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
      },
      size: {
        tiny: {
          backgroundPosition: "calc(100% - .7rem) center",
          backgroundSize: ".6rem",
        },
        small: {
          backgroundPosition: "calc(100% - 1.1rem) center",
          backgroundSize: ".8rem",
        },
        medium: {
          backgroundPosition: "calc(100% - 1.5rem) center",
          backgroundSize: ".8rem",
        },
        large: {
          backgroundPosition: "calc(100% - 1.9rem) center",
          backgroundSize: "1rem",
        },
        huge: {
          backgroundPosition: "calc(100% - 2.3rem) center",
          backgroundSize: "1.2rem",
        },
      },
      theme: {
        base: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')", // eslint-disable-line max-len
        },
        light: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')", // eslint-disable-line max-len
        },
        dark: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')", // eslint-disable-line max-len
        },
        inputGroup: {
          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23727880%22%3E%3Cpath%20d%3D%22M32%206.857h-32l16%2018.286z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')", // eslint-disable-line max-len
          backgroundPosition: "calc(100% - 2rem) 4.5rem",
          padding: "4rem 2rem 1.3rem",

          [`@media (min-width: ${settings.media.min["768"]})`]: {
            backgroundPosition: "calc(100% - 2rem) 3.5rem",
            padding: "3.5rem 1.5rem 1rem",
          },
        },
      },
    },
    textarea: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {},
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: {},
      },
    },
    numberInput: {
      container: {
        base: {
          position: "relative",
        },
      },

      button: {
        base: {
          backgroundColor: settings.color.white,
          borderLeft: ".1rem solid",
          borderLeftColor: darken(settings.color.white, 17),
          color: settings.color.blue,
          display: "block",
          height: "calc(100% - .2rem)",
          position: "absolute",
          top: ".1rem",
          transition: "color 400ms",

          ":hover": {
            color: lighten(settings.color.blue, 7),
          },
          ":focus": {
            color: lighten(settings.color.blue, 7),
          },
          ":active": {
            color: lighten(settings.color.blue, 7),
          },
        },

        size: {
          tiny: {
            fontSize: "1.1rem",
            width: "2.5rem",
          },
          small: {
            fontSize: "1.3rem",
            width: "3.3rem",
          },
          medium: {
            fontSize: "1.5rem",
            width: "4.4rem",
          },
          large: {
            fontSize: "2.2rem",
            width: "5.4rem",
          },
          huge: {
            fontSize: "2.2rem",
            width: "6.2rem",
          },
        },

        plus: {
          size: {
            tiny: {
              right: "2.6rem",
            },
            small: {
              right: "3.4rem",
            },
            medium: {
              right: "4.5rem",
            },
            large: {
              right: "5.5rem",
            },
            huge: {
              right: "6.3rem",
            },
          },
        },

        minus: {
          right: ".1rem",
        },
      },
    },
  },

  state: {
    alert: {},
    error: {},
    info: {},
    success: {},
  },

  fill: {
    display: "block",
    width: "100%",
  },
};

export default styles;
