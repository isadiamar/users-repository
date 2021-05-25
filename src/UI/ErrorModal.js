//Imports
import React from "react";
//To use portals;
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

//Backdrop Component
const Backdrop = (props) => {
  /*Portal Backdrop to id backdrop-root in html*/
  return <div className={styles.backdrop} />;
};

//ModalOverlay Component
const ModalOverlay = (props) => {
  /*Portal Modal to id modal-root in html*/
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClick}>Close</Button>
      </footer>
    </Card>
  );
};

//ErroModal Component
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

//Exports
export default ErrorModal;
