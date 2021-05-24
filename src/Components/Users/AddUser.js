//Imports
import React, { useState } from "react";
import styles from "./AddUser.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

//CardInput Component
const AddUser = (props) => {
  // States
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
   //Not defined - Nothing happens
  const [enteredError, setEnteredError] = useState();

  //Handlers
  const usernameChangeHandler = (event) => {
    return setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    return setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // the 'plus' converts string to number
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setEnteredError({
        title: "Ooops! Invalid Input",
        message:
          "Something went wrong with the form. Please, enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setEnteredError({
        title: "Ooops! Invalid Age",
        message:"Please enter a valid age (above 0)"
      });
    }
    props.onAddUser(enteredUsername, enteredAge);
    //Reset
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      {/*If entered error is defined, we show the ErrorModal, else, we don't*/}
      {enteredError && <ErrorModal title="Upss" message="Something went wrong. Try again" />}
      <Card className={styles.input}>
        {/*Form*/}
        <form onSubmit={addUserHandler}>
          {/*Controlers - form*/}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

//Export

export default AddUser;
