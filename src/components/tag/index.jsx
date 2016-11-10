import React from "react";
import radium from "radium";
import { color, timing } from "../../../settings.json";
import { rgb } from "../../utils/color";
import font from "../../utils/font";

const baseFontSize = 12;

const tagColor = "#e1eaf0";

const hoverStyles = {
  base: {
    backgroundColor: `rgba(${rgb(tagColor)}, .3)`,
  },

  selected: {
    backgroundColor: tagColor,
  },
};

const styles = {
  base: {
    border: `${1 / baseFontSize}em solid ${tagColor}`,
    borderRadius: `${16 / baseFontSize}em`,
    color: color.darkGray,
    display: "inline-block",
    fontFamily: font("benton"),
    fontSize: `${baseFontSize}px`,
    lineHeight: 1,
    padding: `${10 / baseFontSize}em ${25 / baseFontSize}em ${8 / baseFontSize}em`,
    textDecoration: "none",
    textOverflow: "ellipsis",
    transition: `background-color ${timing.default}`,
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base,
  },

  selected: {
    backgroundColor: tagColor,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": hoverStyles.selected,
  },
};

/**
 * Tag component
 * @usage
 * <Tag label="Europe" slug="/europe" />
 */
function Tag({ label, slug, selected, style }) {
  return (
    <a
      className="Tag"
      style={[
        styles.base,
        selected && styles.selected,
        style,
      ]}
      href={slug}
    >
      {label}
    </a>
  );
}

Tag.propTypes = {
  /**
   * Text label which is the tag name
   */
  label: React.PropTypes.string.isRequired,

  /**
   * Slug URL of the tag
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * Should the tag appear to have been selected
   */
  selected: React.PropTypes.bool,

  /**
   * Style object
   */
  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),
};

Tag.defaultProps = {
  label: "",

  slug: "",

  selected: false,

  style: null,
};

Tag.styles = styles;

export default radium(Tag);
