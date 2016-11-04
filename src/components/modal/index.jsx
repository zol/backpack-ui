import React from "react";
import Modal from "react-modal";
import { color, zIndex } from "../../settings.json";
import Icon from "../icon";
import Heading from "../heading";
import { rgb } from "../../utils/color";
import { gutter } from "../../utils/grid";

const styles = {
  content: {
    border: 0,
    borderRadius: 0,
    bottom: "auto",
    boxShadow: `0 27px 50px rgba(${rgb(color.black)}, .36)`,
    left: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "75vh",
    padding: gutter("static"),
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "50%",
    zIndex: zIndex.modal,
  },
  overlay: {
    backgroundColor: `rgba(${rgb(color.black)}, .4)`,
    overflow: "hidden",
    zIndex: zIndex.modal - 2,
  },
  header: {
    borderBottom: `1px solid ${color.gray}`,
    paddingBottom: "16px",
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
  },
  contentContainer: {
    paddingTop: "10px",
  },
  close: {
    backgroundColor: color.white,
    border: 0,
    color: color.lightText,
    fontSize: "16px",
    position: "absolute",
    right: 0,
    top: "-5px",
  },
  selectNone: {
    backgroundColor: "transparent",
    color: color.blue,
    fontSize: "11px",
    fontWeight: 600,
    left: 0,
    position: "absolute",
    textTransform: "uppercase",
    top: "-1px",
  },
};

function ModalComponent({ isOpen, selectNone, onSelectNone, title, closeModal, children }) {
  return (
    <Modal
      isOpen={isOpen}
      style={styles}
      onRequestClose={closeModal}
    >
      <header
        className="Modal-header"
        style={styles.header}
      >
        {selectNone &&
          <button
            style={styles.selectNone}
            onClick={onSelectNone}
          >
            Select None
          </button>
        }

        <Heading
          level={4}
          size="small"
          weight="thick"
          caps
        >
          {title}
        </Heading>

        <button
          style={styles.close}
          onClick={closeModal}
        >
          <Icon
            name="cross"
            label="Close"
          />
        </button>
      </header>

      <div
        className="Modal-content"
        style={styles.contentContainer}
      >
        {children}
      </div>
    </Modal>
  );
}

ModalComponent.propTypes = {
  /**
   * Set modal to open or closed
   */
  isOpen: React.PropTypes.bool.isRequired,

  /**
   * Set selectNone visibility
   */
  selectNone: React.PropTypes.bool,

  /**
   * Clear all selected filters
   */
  onSelectNone: React.PropTypes.func,

  /**
   * Modal title
   */
  title: React.PropTypes.string.isRequired,

  /**
   * Function to close modal
   */
  closeModal: React.PropTypes.func.isRequired,

  /**
   * Contents of modal
   */
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]).isRequired,
};

ModalComponent.defaultProps = {
  isOpen: false,

  selectNone: false,

  onSelectNone: null,

  title: "Modal",

  closeModal: null,

  children: null,
};

ModalComponent.styles = styles;

export default ModalComponent;
