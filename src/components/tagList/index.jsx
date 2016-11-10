import React from "react";
import radium from "radium";
import Tag from "../tag";

/**
 * TagList component
 * @usage
 * <TagList tags={[
 *   { label: "The Americas", slug: "/americas" },
 *   { label: "World", slug: "/world" },
 *   { label: "Europe", slug: "/europe" },
 * ]} />
 */
function TagList({ tags, rows }) {
  const rowHeight = 40;

  const styles = {
    container: {
      base: {
        maxHeight: `${rowHeight * rows}px`,
        overflow: "hidden",
      },
    },
    tag: {
      base: {
        marginBottom: "8px",
        marginRight: "8px",
      },
    },
  };

  const Tags = tags.map((tag, i) => (
    <Tag
      label={tag.label}
      slug={tag.slug}
      style={styles.tag.base}
      selected={tag.selected}
      key={i}
    />
  ));

  return (
    <div
      className="TagList"
      style={styles.container.base}
    >
      <Tag
        label="All"
        slug="/"
        style={styles.tag.base}
        selected
      />
      {Tags}
    </div>
  );
}

TagList.propTypes = {
  /**
   * An array of tags to display
   */
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,

  /**
   * Maximum number of rows of tags to display
   */
  rows: React.PropTypes.number,
};

TagList.defaultProps = {
  tags: [],

  rows: 3,
};

export default radium(TagList);
