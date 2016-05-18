import React from "react";
import { Style } from "radium";
import ContentBlock from "../contentBlock";
import Icon from "../icon";
import Profile from "../profile";

const mq = `${667 * 0.0625}em`;

const scopedStyles = {
  ".Icon": {
    fontSize: "6vw",
  },

  mediaQueries: {
    [`(min-width: ${mq})`]: {
      ".Icon": {
        fontSize: "4rem",
      },
    },
  },
};

/**
 * Intro narrative for POI
 */
function Narrative({ heading, htmlContent, author }) {
  return (
    <div className="Narrative">
      <Style
        scopeSelector=".Narrative"
        rules={scopedStyles}
      />

      <aside className="Narrative-aside">
        <Icon
          name="lp-diamond"
          color="blue"
        />
      </aside>

      <div className="Narrative-content">
        <ContentBlock
          heading={heading}
          content={htmlContent}
        />

        <div className="Narrative-profile">
          <Profile
            name={author.name}
            title={author.title}
            avatar={author.avatar}
            profileUrl={author.url}
            orientation="horizontal"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

Narrative.propTypes = {
  /**
   * Title of the narrative
   */
  heading: React.PropTypes.string.isRequired,

  /**
   * HTML formatted content
   */
  htmlContent: React.PropTypes.string.isRequired,

  /**
   * Author object
   */
  author: React.PropTypes.object.isRequired,
};

Narrative.defaultProps = {
  heading: "",

  htmlContent: "",

  author: {},
};

export default Narrative;
