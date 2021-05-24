//Imports
import React from "react";

import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css';

//ErroModal Component
const ErrorModal = (props) => {
  return (
    <div>
      {/*To interact with the rest of the page*/}}
      <div className={styles.backdrop}/>
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className= {styles.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className ={styles.actions}>
        <Button onClick = {props.onClick}>Close</Button>
      </footer>
    </Card>
    </div>
  );
};

//Exports
export default ErrorModal;
