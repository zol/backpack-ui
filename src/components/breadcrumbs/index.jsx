import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";

const styles = {
  container: {
    base: {
      color: settings.color.lightText,
      fontSize: "1.4rem",
      fontWeight: 300,
      lineHeight: 1,
    },
  },

  item: {
    base: {
      ":hover": {
        textDecoration: "underline",
      },
      ":active": {
        textDecoration: "underline",
      },
      ":focus": {
        textDecoration: "underline",
      },
    },

    padded: {
      marginRight: "1rem",
    },
  },

  anchor: {
    padded: {
      marginRight: "1rem",
    },
  },
};

/**
 * Breadcrumb navigation component
 */
function Breadcrumbs({ links }) {
  const items = links.map((link, index) => {
    const itemStyle = [styles.item.base];

    if (index !== links.length - 1) {
      itemStyle.push(styles.item.padded);
    }

    return (
      <span
        className="Breadcrumbs-item"
        style={itemStyle}
        key={index}
      >
        <a
          style={styles.anchor.padded}
          href={link.href}
        >
          {link.title}
        </a>

        {index < links.length - 1 &&
          <Icon
            name="chevron-right"
            size="tiny"
          />
        }
      </span>
    );
  });

  return (
    <nav className="Breadcrumbs"
      style={styles.container.base}
    >
      {items}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  /**
   * An array of links for the navigation
   */
  links: React.PropTypes.array.isRequired,
};

Breadcrumbs.defaultProps = {
  links: [],
};

Breadcrumbs.styles = styles;

export default radium(Breadcrumbs);
