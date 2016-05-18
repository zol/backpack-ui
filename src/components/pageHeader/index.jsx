import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Heading from "../heading";
import Strapline from "../strapline";
import Bookmark from "../bookmark";
import { gutter, span } from "../../utils/grid";

const styles = {
  container: {
    base: {
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
    },

    alignment: {
      center: {
        textAlign: "center",
      },
    },

    contained: {
      maxWidth: span(10, "static"),
    },

    underline: {
      borderBottom: ".2rem solid #dc221a",
      bottom: 0,
      content: "",
      display: "block",
      left: "0",
      marginLeft: "1.5rem",
      position: "absolute",
      width: "3rem",
    }
  },

  content: {
    base: {},

    bookmark: {
      display: "inline-block",
    },
  },

  title: {
    base: {
      marginBottom: "1.4rem",

      [`@media (min-width: ${settings.media.min["560"]})`]: {
        display: "inline-block",
      },

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginBottom: "2.2rem",
      },
    },
  },

  topChoice: {
    base: {
      color: settings.color.red,
    },
  },

  bookmark: {
    base: {
      display: "inline-block",
      marginLeft: ".8rem",
      verticalAlign: ".4rem",

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginLeft: "1rem",
        verticalAlign: "3rem",
      },
    },
  },

  strapline: {
    base: {
      marginTop: "1.2rem",

      [`@media (max-width: ${settings.media.max["600"]})`]: {
        paddingLeft: gutter("static"),
        paddingRight: gutter("static"),
      },

      [`@media (min-width: ${settings.media.min["600"]})`]: {
        marginTop: ".5rem",
      },
    },
  },
};

/**
 * PageHeader component
 */
class PageHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      marked: false,
    };

    this._bookmarkOnClick = this._bookmarkOnClick.bind(this);
  }

  _bookmarkOnClick() {
    this.setState({
      marked: !this.state.marked,
    });
  }

  render() {
    const {
      alignment,
      contained,
      topChoice,
      neighborhood,
      place,
      strapline,
      titleHref,
      title,
      heading,
      bookmark,
      type,
      underline,
      override,
    } = this.props;

    const style = {
      container: [styles.container.base],
    };

    if (alignment) {
      style.container.push(styles.container.alignment[alignment]);
    }

    if (contained) {
      style.container.push(styles.container.contained);
    }

    const TopChoiceText = (<span key="topChoice">{topChoice ?
      (<em style={styles.topChoice.base}>
        Top choice {type.toLowerCase()}
      </em>) :
      `${type.toLowerCase()}`}</span>);

    const PlaceText = (<span key="placeText">{neighborhood ?
      `located in the ${neighborhood} neighbourhood` :
      `located in ${place}`}</span>);

    const straplineText = strapline || [TopChoiceText, " ", PlaceText];

    const TitleContent = titleHref ? (
      <a href={titleHref}>
        {title}
      </a>) :
      title;

    return (
      <header
        className="PageHeader"
        style={style.container}
      >
      {underline &&
        <div style={styles.container.underline}></div>}

        {title &&
          <div style={styles.title.base}>
            <Heading level={6}
              size="tiny"
              weight="thick"
              importance="alert"
              caps
            >
            {TitleContent}
            </Heading>
          </div>}

        <Heading level={1}
          size="huge"
          weight="thick"
          importance="high"
          override={override}
        >
          {heading}!

          {bookmark &&
            <div
              className="PageHeader-bookmark"
              style={styles.bookmark.base}
            >
              <Bookmark
                onClick={this._bookmarkOnClick}
                marked={this.state.marked}
                size="large"
              />
            </div>}
        </Heading>

        {(type || strapline) &&
          <div
            className="PageHeader-strapline"
            style={styles.strapline.base}
          >
            <Strapline
              size="small"
              parent="pageHeader"
            >
              {straplineText}
            </Strapline>
          </div>}
      </header>
    );
  }
}

PageHeader.propTypes = {
  /**
   * Text for the heading
   */
  heading: React.PropTypes.string.isRequired,

  /**
   * Small title
   */
  title: React.PropTypes.string,

  /**
   * URL for small title
   */
  titleHref: React.PropTypes.string,

  /**
   * Show the top choice text
   */
  topChoice: React.PropTypes.bool,
  /**
   * Override the strapline
   */
  strapline: React.PropTypes.string,
  /**
   * Type of POI
   */
  type: React.PropTypes.string,

  /**
   * Neighborhood where the POI is located
   */
  neighborhood: React.PropTypes.string,

  /**
   * Where the POI is located, if neighborhood is null
   */
  place: React.PropTypes.string,

  /**
   * Alignment for header text
   */
  alignment: React.PropTypes.oneOf([
    "",
    "center",
  ]),

  /**
   * Whether or not to set a max width on the header
   */
  contained: React.PropTypes.bool,

  /**
   * Whether or not to show the bookmark button
   */
  bookmark: React.PropTypes.bool,
};

PageHeader.defaultProps = {
  title: "",

  titleHref: "",

  topChoice: false,

  type: "",

  neighborhood: "",

  place: "",

  alignment: "",

  contained: false,

  bookmark: false,
};

PageHeader.styles = styles;

export default radium(PageHeader);
