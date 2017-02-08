import React from "react";
import radium from "radium";
import { Link } from "react-router";
import settings from "../../../settings.json";
import { gutter } from "../../utils/grid";
import font from "../../utils/font";
import { rgb } from "../../utils/color";
import Heading from "../heading";
import { Play } from "../icon";

const spotlightTitleGray = "#e4e4e4";
const spotlightGray = "#d8d8d8";

const commonStyles = {
  sideContent: {
    paddingTop: gutter("static", 1, 1.25),
    paddingBottom: gutter("static", 1, 1.25),
    paddingLeft: gutter("static", 1, 0.5),
    paddingRight: gutter("static", 1, 0.5),

    [`@media (min-width: ${settings.media.min["480"]})`]: {
      paddingLeft: gutter("static"),
      paddingRight: gutter("static")
    },

    [`@media (min-width: ${settings.media.min["1080"]})`]: {
      paddingLeft: gutter("static", 1, 2),
      paddingRight: gutter("static", 1, 2)
    }
  }
}

const styles = {
  container: {
    fontFamily: font("benton"),
    position: 'relative',
    backgroundColor: settings.color.black,
    color: spotlightGray
  },

  background: {
    position: 'absolute',
    filter: 'grayscale(100%)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: '100%',
    height: '100%'
  },

  backgroundOverlay: {
    backgroundColor: settings.color.black,
    opacity: 0.2,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  content: {
    position: 'relative',
    display: 'flex',
    zIndex: settings.zIndex.default,
    alignItems: 'center',

    [`@media (max-width: ${settings.media.max["720"]})`]: {
      display: "block",
    },
  },

  leftContent: Object.assign({}, commonStyles.sideContent, {
    minWidth: '36%',
    background: `rgba(${rgb(settings.color.black)}, .38)`,
    alignSelf: 'stretch',
  }),

  rightContent: Object.assign({}, commonStyles.sideContent, {
    flexGrow: 1
  }),

  zone: {
    fontSize: "1.3rem",
    fontWeight: settings.typography.fontWeightSemibold,
    paddingBottom: gutter("static", 1, 2)
  },

  title: {
    color: spotlightTitleGray,
    lineHeight: 1.3,
    letterSpacing: "-0.6px"
  },

  category: {
    color: spotlightGray,
    fontSize: "0.7em",
    marginTop: "0.4em",
    marginBottom: "0.4em"
  },

  paragraph: {
    lineHeight: (28 / 16),
    fontSize: "0.7em",
    marginTop: "1.3em",
    marginBottom: "1.7em"
  },

  divider: {
    color: settings.color.subtitleGray,
    width: "50%",
    display: "inline-block",
    borderStyle: "solid",
    borderTopWidth: 0,
    opacity: 0.27,
    marginBottom: "1.3em",
  },

  link: {
    position: "relative",
    display: "inline-block"
  },

  image: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: `0 12px 34px 0 rgba(${rgb(settings.color.black)}, 0.12), inset 0 1px 3px 0 rgba(${rgb(settings.color.black)}, 0.5)`,
    border: `1px solid rgba(${rgb(settings.color.white)}, 0.2)`,
  },

  imageOverlay: {
    backgroundColor: `rgba(${rgb(settings.color.black)}, 0.16)`,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `background-color ${settings.timing.default} ease`
  },

  playIcon: {
    color: settings.color.white,
    height: "21px",
    width: "21px"
  }
};

const css = `
  .SpotlightZone a:hover .SpotlightZone-imageOverlay {
    background-color: rgba(${rgb(settings.color.black)}, 0.06) !important;
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const SpotlightZone = ({
  zone, 
  category, 
  title, 
  paragraph, 
  href, 
  imageUrl, 
  backgroundImageUrl}) => {
  
  let backgroundStyle = styles.background;
  backgroundStyle.backgroundImage = `url('${backgroundImageUrl}')`;

  return (
    <div className="SpotlightZone" style={styles.container}>
      <style dangerouslySetInnerHTML={markup(css)} />
      <div style={backgroundStyle}></div>
      <div style={styles.backgroundOverlay}></div>
      <div style={styles.content}>
        <div style={styles.leftContent}>
          <div style={styles.zone}>{zone}</div>
          <div style={styles.category}>{category}</div>
          <Heading override={styles.title}>{title}</Heading>
          <p style={styles.paragraph}>{paragraph}</p>
          <hr style={styles.divider} />
          <div id="SpotlightZone_sponsor"></div>
        </div>
        <div style={styles.rightContent}>
          <Link to={href} style={styles.link}>
            <img style={styles.image} src={imageUrl} />
            <div className="SpotlightZone-imageOverlay" style={styles.imageOverlay}>
              <Play style={styles.playIcon} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

SpotlightZone.propTypes = {
  zone: React.PropTypes.string.isRequired,
  category: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  paragraph: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  backgroundImageUrl: React.PropTypes.string.isRequired
};

SpotlightZone.defaultProps = {
  zone: "",
  category: "",
  title: "",
  paragraph: "",
  href: "",
  imageUrl: "",
  backgroundImageUrl: "",
};

SpotlightZone.styles = styles;

export default radium(SpotlightZone);