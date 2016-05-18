import React from "react";

function Bullet({ space }) {
  if (space === "before") {
    return (
      <span>&#160;&#8226;</span>
    );
  }

  if (space === "after") {
    return (
      <span>&#8226;&#160;</span>
    );
  }

  if (space === "both") {
    return (
      <span>&#160;&#8226;&#160;</span>
    );
  }

  return (
    <span>&#8226;</span>
  );
}

Bullet.propTypes = {
  /**
   * Where a space should be placed
   */
  space: React.PropTypes.oneOf([
    "",
    "before",
    "after",
    "both",
  ]),
};

Bullet.defaultProps = {
  space: "",
};

export default Bullet;
