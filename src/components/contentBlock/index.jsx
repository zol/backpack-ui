import React from "react";
import { Style } from "radium";
import Heading from "../heading";
import Lede from "../lede";
import { media } from "rizzo-next/sass/settings.json";
import { font } from "../../utils/font";
import { gutter, subtract } from "../../utils/grid";

const pMargin = subtract([gutter("static"), ".2rem"], "static");
const ulMargin = gutter("static", 12, 2);

const scopedStyles = {
  "ContentBlock-text": {
    fontFamily: font("miller"),
    fontSize: "1.6rem",
    lineHeight: (25 / 16),

    mediaQueries: {
      [`(min-width: ${media.min["600"]})`]: {
        fontSize: "2rem",
        lineHeight: (36 / 20),
      },
    },

    p: {
      marginBottom: pMargin,
    },
    ul: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
    },
    ol: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
    },

    "p:not(:first-child)": {
      marginTop: pMargin,
    },
    "ul:not(:first-child)": {
      marginTop: pMargin,
    },
    "ol:not(:first-child)": {
      marginTop: pMargin,
    },
  },
};

/**
 * Content block component
 */
function ContentBlock({ heading, lede, htmlContent, type }) {
  const headingImportance = type === "partnerDescription" ? "low" : "normal";
  const headingWeight = type === "partnerDescription" ? "thin" : "normal";

  function markup() {
    return {
      __html: htmlContent,
    };
  }

  return (
    <div className="ContentBlock">
      <Style
        scopeSelector=".ContentBlock-text"
        rules={scopedStyles["ContentBlock-text"]}
      />

      {heading &&
        <Heading level={3}
          size="medium"
          weight={headingWeight}
          importance={headingImportance}
        >
          {heading}
        </Heading>
      }

      {lede &&
        <Lede
          content={lede}
        />
      }

      <div
        className="ContentBlock-text"
        dangerouslySetInnerHTML={markup()}
      />
    </div>
  );
}

ContentBlock.propTypes = {
  /**
   * Heading
   */
  heading: React.PropTypes.string.isRequired,

  /**
   * Introduction content
   */
  lede: React.PropTypes.string,

  /**
   * HTML formatted content
   */
  htmlContent: React.PropTypes.string.isRequired,

  /**
   * Type of content
   */
  type: React.PropTypes.oneOf([
    "",
    "partnerDescription",
  ]),
};

ContentBlock.defaultProps = {
  heading: "",

  lede: "",

  htmlContent: "",

  type: "",
};

export default ContentBlock;
