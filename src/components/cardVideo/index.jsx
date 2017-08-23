import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";
import {
  Card,
  CardActionIcon,
  CardAnchor,
  CardBullets,
  CardHeading,
  CardImage,
  CardText,
} from "../card";
import TextBubble from "../textBubble";
import { Play as PlayIcon } from "../icon";
import { color, media } from "../../../settings.json";
import iconFromString from "../../utils/icon";
import duration from "../../utils/time";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  playIcon: {
    bottom: "17px",
    color: color.white,
    fontSize: "20px",
    left: "24px",
    position: "absolute",

    [mq]: {
      bottom: "12px",
      fontSize: "12px",
      left: "11px",
    },
  },

  icon: {
    verticalAlign: "bottom",
  },

  textBubble: {
    bottom: "9px",
    minWidth: "76px",
    position: "absolute",
    right: "10px",

    [mq]: {
      bottom: "6px",
      fontSize: "9px",
      minWidth: "53px",
      paddingBottom: "5px",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "7px",
      right: "5px",
    },
  },

  action: {
    default: {
      position: "absolute",
      top: "25px",
      right: "22px",

      [mq]: {
        fontSize: "12px",
        right: "9px",
        top: "12px",
      },
    },

    compact: {
      top: "0px",
      fontSize: "16px",

      [mq]: {
        top: "3px",
      },
    },
  },

  anchorPadding: {
    paddingRight: "60px",

    [mq]: {
      paddingRight: "40px",
    },
  }
};

const CardVideo = ({
  href,
  imageSrc,
  aspectRatio,
  actionIcon,
  runtime,
  heading,
  bullets,
  onClick,
  layout,
  theme,
  spacing,
  className,
  style,
}) => (
  <Card
    className={cn("Card--video", className)}
    layout={layout}
    style={style}
  >
    <CardImage
      href={href}
      src={imageSrc}
      aspectRatio={aspectRatio}
      opacity={1}
    >
      <div
        className="PlayIcon"
        style={styles.playIcon}
      >
        <PlayIcon style={styles.icon} />
      </div>

      {typeof runtime === "number" &&
        <TextBubble style={styles.textBubble}>
          {duration(runtime)}
        </TextBubble>
      }
    </CardImage>

    <CardText>
      <CardAnchor
        href={href}
        layout={layout}
        spacing={spacing}
        style={onClick && styles.anchorPadding}
      >
        {bullets && bullets.length > 0 &&
          <CardBullets bullets={bullets} spacing={spacing}/>
        }

        <CardHeading theme={theme} spacing={spacing}>
          {heading}
        </CardHeading>
      </CardAnchor>

      {onClick &&
        <CardActionIcon
          style={[
            styles.action.default,
            spacing === "compact" && styles.action.compact,
            layout === "tile" && { right: "3px" },
          ]}
          onClick={onClick}
        >
          {iconFromString(actionIcon)}
        </CardActionIcon>
      }
    </CardText>
  </Card>
);

CardVideo.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf([
    "video",
    "poster",
  ]),
  runtime: PropTypes.number,
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  layout: PropTypes.oneOf([
    "card",
    "tile",
  ]),
  theme: PropTypes.oneOf([
    "light",
    "dark",
  ]),
  spacing: PropTypes.oneOf([
    "normal",
    "compact",
  ]),
  actionIcon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: propTypes.style,
};

CardVideo.defaultProps = {
  aspectRatio: "video",
  actionIcon: "ClockOutline",
  layout: "card",
  theme: "light",
  spacing: "normal",
};

export default radium(CardVideo);
