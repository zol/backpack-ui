import React from "react";
import radium from "radium";
import styles from "./styles";
import IconButton from "../iconButton";
import Flyout from "../flyout";
import ShareMenuItem from "./item";

class ShareMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      optionsHidden: true,
      flyoutArrow: "up",
    };

    this._toggleOptions = this._toggleOptions.bind(this);
    this._shareContent = this._shareContent.bind(this);
    this._shareUrl = this._shareUrl.bind(this);
    this._calculateWindowPosition = this._calculateWindowPosition.bind(this);
    this._windowSettings = this._windowSettings.bind(this);
    this._openWindow = this._openWindow.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({
        flyoutArrow: "right",
      });
    }
  }

  _toggleOptions() {
    this.setState({
      optionsHidden: !this.state.optionsHidden,
    });
  }

  _shareContent() {
    const { url, text } = this.props;

    return {
      text: encodeURIComponent(text),
      url: encodeURIComponent(url),
      via: "lonelyplanet",
    };
  }

  _shareUrl() {
    const { url, text, via } = this._shareContent();

    return {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      email: `mailto:?subject=${text}&body=${url}`,
    };
  }

  _calculateWindowPosition(windowDimension, popUpDimension) {
    return Math.round((windowDimension / 2) - (popUpDimension / 2));
  }

  _windowSettings() {
    const windowSettings = {
      popUpWidth: 840,
      popUpHeight: 420,
      popUpLeft: 0,
      popUpTop: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    };

    windowSettings.popUpLeft = this._calculateWindowPosition(
      windowSettings.width,
      windowSettings.popUpWidth
    );

    windowSettings.popUpTop = windowSettings.height > windowSettings.popUpHeight
      ? this._calculateWindowPosition(
        windowSettings.height,
        windowSettings.popUpHeight
      ) : 0;

    windowSettings.windowOptions = "toolbar=no,"
      + "menubar=no,"
      + "location=yes,"
      + "resizable=no,"
      + "scrollbars=yes";

    windowSettings.windowSize = `width=${windowSettings.popUpWidth},`
      + `height=${windowSettings.popUpHeight},`
      + `top=${windowSettings.popUpTop},`
      + `left=${windowSettings.popUpLeft}`;

    return windowSettings;
  }

  _openWindow(event) {
    const { windowOptions, windowSize } = this._windowSettings();

    if (event.currentTarget.dataset.network !== "email") {
      window.open(
        event.currentTarget.href,
        "share",
        `${windowOptions},${windowSize}`
      );
    }

    event.preventDefault();
  }

  render() {
    const { twitter, facebook, email } = this._shareUrl();

    const style = {
      container: [styles.container.base],
      options: [styles.options.base],
    };

    const position = {
      up: "below",
      down: "above",
      left: "right",
      right: "left",
    };

    const visibility = {
      true: "hidden",
      false: "visible",
    };

    style.options.push(styles.options.position[position[this.state.flyoutArrow]]);

    style.options.push(
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .base,
      styles.options
        .state[visibility[this.state.optionsHidden]]
        .position[position[this.state.flyoutArrow]]
    );

    return (
      <div
        className="ShareMenu"
        style={style.container}
      >
        <IconButton
          className="ShareMenu-button"
          icon="share"
          label="Share this article on Twitter, Facebook, or email"
          owns="share-menu-options"
          onClick={this._toggleOptions}
          onFocus={this._toggleOptions}
          onBlur={this._toggleOptions}
        />

        <div
          className="ShareMenu-options"
          id="share-menu-options"
          style={style.options}
          aria-hidden={this.state.optionsHidden}
        >
          <Flyout arrow={this.state.flyoutArrow} fill>
            <ShareMenuItem
              network="twitter"
              href={twitter}
              label="Share on Twitter"
              onClick={this._openWindow}
            />

            <ShareMenuItem
              network="facebook"
              href={facebook}
              label="Share on Facebook"
              onClick={this._openWindow}
            />

            <ShareMenuItem
              network="email"
              href={email}
              label="Share by email"
            />
          </Flyout>
        </div>
      </div>
    );
  }
}

ShareMenu.propTypes = {
  /**
   * URL of page to share
   */
  url: React.PropTypes.string.isRequired,

  /**
   * Text to share
   */
  text: React.PropTypes.string,

  /**
   * Describe how the buttons should be aligned
   */
  alignment: React.PropTypes.oneOf([
    "",
    "centered",
  ]),
};

ShareMenu.defaultProps = {
  url: "",

  text: "",

  alignment: "",
};

ShareMenu.styles = styles;

export default radium(ShareMenu);
