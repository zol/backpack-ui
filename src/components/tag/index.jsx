import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const hoverStyles = {
  base: {
    backgroundColor: `rgba(${rgb("#e1eaf0")}, .3)`,
  },

  selected: {
    backgroundColor: "#e1eaf0",
  },
};

const styles = {
  base: {
    border: "1px solid #e1eaf0",
    borderRadius: "1.7rem",
    color: color.darkGray,
    display: "inline-block",
    fontSize: "1.2rem",
    lineHeight: 1,
    padding: "1.2rem 2.5rem .8rem",
    textOverflow: "ellipsis",
    transition: "background-color 400ms",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base,
  },

  selected: {
    backgroundColor: "#e1eaf0",

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
function Tag({ label, slug, selected }) {
  const style = [styles.base];

  if (selected) {
    style.push(styles.selected);
  }

  return (
    <a
      className="Tag"
      style={style}
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
};

Tag.defaultProps = {
  label: "",

  slug: "",

  selected: false,
};

Tag.styles = styles;

export default radium(Tag);
