import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import cn from "classnames";
import { grid, media } from "../../../settings.json";
import { percentage } from "../../utils/grid";
import propTypes from "../../utils/propTypes";

const styles = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: grid.container,
  width: "100%",
};

const getScopedStyles = (columns) => {
  const scopedStyles = {
    ".Tile": {
      flex: "0 0 auto",
      width: "100%",
    },

    mediaQueries: {
      [`(min-width: ${media.min["360"]})`]: {
        ".Tile": {
          width: "calc(50% - 10px)",
        },
      },
    },
  };

  if (columns === 3) {
    scopedStyles.mediaQueries[`(min-width: ${media.min["840"]})`] = {
      ".Tile": {
        width: percentage("410px", grid.container),
      },
    };
  }
  else if (columns === 4) {
    scopedStyles.mediaQueries[`(min-width: ${media.min["720"]})`] = {
      ".Tile": {
        width: percentage("410px", grid.container),
      },
    };
    scopedStyles.mediaQueries[`(min-width: ${media.min["960"]})`] = {
      ".Tile": {
        width: percentage("300px", grid.container),
      },
    };
  }
  else if (columns === 5) {
    scopedStyles.mediaQueries[`(min-width: ${media.min["720"]})`] = {
      ".Tile": {
        width: percentage("410px", grid.container),
      },
    };
    scopedStyles.mediaQueries[`(min-width: ${media.min["960"]})`] = {
      ".Tile": {
        width: percentage("300px", grid.container),
      },
    };
    scopedStyles.mediaQueries[`(min-width: ${media.min["1430"]})`] = {
      ".Tile": {
        width: "19%",
      },
    };
  }

  return scopedStyles;
};

function TileGrid({ children, className, columns, style }) {
  return (
    <section
      className={cn("TileGrid", className)}
      style={[styles, style]}
    >
      <Style
        scopeSelector=".TileGrid"
        rules={getScopedStyles(columns)}
      />

      {children}
    </section>
  );
}

TileGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  columns: PropTypes.oneOf([3, 4, 5]),
  style: propTypes.style,
};

TileGrid.defaultProps = {
  columns: 3,
};

export default radium(TileGrid);
