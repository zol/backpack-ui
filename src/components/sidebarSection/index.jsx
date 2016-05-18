"use strict";

import React from "react";
import radium, { Style } from "radium";
import { color } from "rizzo-next/sass/settings.json";
import Heading from "../heading";
import Icon from "../icon";

const padding = "2rem";

const styles = {
  container: {
    base: {
      borderTop: `1px solid ${color.gray}`,
      fontSize: "1.3rem",
      paddingBottom: padding,
      paddingTop: padding,
    },

    background: {
      backgroundColor: "#e9f2f8", // This color does not exist in settings
      borderTop: 0,
      paddingLeft: padding,
      paddingRight: padding,
    },

    collapsed: {
      paddingBottom: 0,
      paddingTop: 0,
    },
  },

  header: {
    base: {
      position: "relative",
    },
  },

  collapsibleHeading: {
    base: {
      display: "block",
      paddingBottom: padding,
      paddingTop: padding,
    },
  },

  content: {
    base: {
      marginTop: "1.4rem",
    },

    indented: {
      marginLeft: padding,
    },

    collapsed: {
      display: "none",
      marginTop: "-6px",
      paddingBottom: padding,
    },

    expanded: {
      display: "block",
    },
  },

  toggleIcon: {
    base: {
      backgroundColor: "transparent",
      color: color.blue,
      fontSize: "9px",
      paddingBottom: padding,
      paddingTop: padding,
      position: "absolute",
      right: 0,
      top: "2px",
    },
  },
};

class SidebarSection extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      collapsed: this.props.collapsed,
    });
  }

  onClick(event) {
    this.setState({
      collapsed: !this.state.collapsed,
    });

    event.preventDefault();
  }

  render() {
    const {
      children,
      title,
      icon,
      collapsed,
      background,
      scopedStyles,
    } = this.props;

    const style = {
      container: [styles.container.base],
      header: [styles.header.base],
      collapsibleHeading: [styles.collapsibleHeading.base],
      content: [styles.content.base],
      toggleIcon: [styles.toggleIcon.base],
    };

    if (icon) {
      style.content.push(styles.content.indented);
    }

    if (collapsed) {
      style.container.push(styles.container.collapsed);
      style.content.push(styles.content.collapsed);
    }

    if (background) {
      style.container.push(styles.container.background);
    }

    if (!this.state.collapsed) {
      style.content.push(styles.content.expanded);
    }

    const heading = (
      <Heading
        level={4}
        weight="thick"
        importance="normal"
        size="tiny"
        caps
      >
        {icon &&
          <Icon
            name={icon}
            size="small"
            inline="before"
            color={background ? "" : "gray"}
          />
        }

        {title}
      </Heading>
    );

    const collapsibleHeading = (
      <a
        style={style.collapsibleHeading}
        href="#"
        onClick={this.onClick}
      >
        {heading}

        <span
          style={style.toggleIcon}
          type="button"
        >
          <Icon
            name={this.state.collapsed ? "triangle-down" : "triangle-up"}
            label="Expand"
          />
        </span>
      </a>
    );

    return (
      <section
        className={`SidebarSection${background ? " SidebarSection--background" : ""}`}
        style={style.container}
      >
        {scopedStyles &&
          <Style
            scopeSelector=".SidebarSection"
            rules={{
              ul: {
                listStyle: "none",
              },
              "li + li": {
                marginTop: ".8rem",
              },
            }}
          />
        }

        {background &&
          <Style
            scopeSelector=".SidebarSection--background"
            rules={{
              "+ .SidebarSection": {
                borderTopWidth: "0 !important",
              },
            }}
          />
        }

        <header
          className="SidebarSection-header"
          style={style.header}
        >
          {collapsed && collapsibleHeading}

          {!collapsed && heading}
        </header>

        <div
          className="SidebarSection-content"
          style={style.content}
          aria-hidden={this.state.collapsed}
        >
          {children}
        </div>
      </section>
    );
  }
}

SidebarSection.propTypes = {
  /**
   * Content for the section
   */
  children: React.PropTypes.node.isRequired,

  /**
   * The name of the section
   */
  title: React.PropTypes.string.isRequired,

  /**
   * The name of an icon to be placed to the left of the title
   */
  icon: React.PropTypes.string,

  /**
   * Should the section be collapsed and expandable
   */
  collapsed: React.PropTypes.bool,

  /**
   * Should the section be boxed in with a blue background
   */
  background: React.PropTypes.bool,

  /**
   * Should the component include scoped styles (for user generated content)
   */
  scopedStyles: React.PropTypes.bool,
};

SidebarSection.defaultProps = {
  children: null,

  title: "",

  icon: "",

  collapsed: false,

  background: false,

  scopedStyles: false,
};

SidebarSection.styles = styles;

export default radium(SidebarSection);
