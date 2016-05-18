import React from "react";
import { Style } from "radium";
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
function TagList({ tags }) {
  const Tags = tags.map((tag, i) => (
    <Tag
      label={tag.label}
      slug={tag.slug}
      selected={tag.selected}
      key={i}
    />
  ));

  return (
    <div className="TagList">
      <Style
        scopeSelector=".TagList"
        rules={{
          ".Tag": {
            marginBottom: "1rem",
            marginRight: ".6rem",
          },
        }}
      />

      <Tag label="All" slug="/" selected />
      {Tags}
    </div>
  );
}

TagList.propTypes = {
  /**
   * An array of tags to display
   */
  tags: React.PropTypes.array.isRequired,
};

TagList.defaultProps = {
  label: [],
};

export default TagList;
