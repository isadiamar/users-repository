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
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    //Reset
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <ErrorModal title="Upss" message="Something went wrong. Try again" />
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
