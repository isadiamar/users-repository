//Imports
import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

//CardInput Component
const AddUser = (props) => {
  //Refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // States
  //Not defined - Nothing happens
  const [enteredError, setEnteredError] = useState();

  //Handlers
  const addUserHandler = (event) => {
    //Prevent crash
    event.preventDefault();
    //Test our refs values
    console.log(nameInputRef.current.value, ageInputRef.current.value);
    //Defining refs values
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //Conditions
    // the 'plus' converts string to number
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setEnteredError({
        title: "Invalid Input",
        message:
          "Something went wrong with the form. Please, enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setEnteredError({
        title: "Invalid Age",
        message: "Please enter a valid age (above 0)",
      });
    }
    //Send information to App js
    props.onAddUser(enteredName, enteredUserAge);
    //Reset refs
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeErrorHandler = (event) => {
    setEnteredError();
  };

  return (
    <Wrapper>
      {/*If entered error is defined, we show the ErrorModal, else, we don't*/}
      {enteredError && (
        <ErrorModal
          title={enteredError.title}
          message={enteredError.message}
          onClick={closeErrorHandler}
        />
      )}
      <Card className={styles.input}>
        {/*Form*/}
        <form onSubmit={addUserHandler}>
          {/*Controlers - form*/}
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

//Export

export default AddUser;
