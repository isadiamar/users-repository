//Import
import React from "react";
import styles from "./Button.module.css";

//Button Component
const Button = (props) => {
  return (
    <button 
    type = {props.type || 'button'}
    className={`${styles.button} ${props.className}`}
    onClick = {props.onClick}>
      {props.children}
    </button>
  );
};

//Export
export default Button;
