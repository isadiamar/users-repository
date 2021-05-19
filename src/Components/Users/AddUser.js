//Imports
import React, { useState } from "react";
import styles from "./AddUser.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

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
    const enteredData = [enteredUsername, enteredAge];
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0  ){
      return;
    }
    // the 'plus' converts string to number
    if(+enteredAge<1){
      return;
    }
    console.log(enteredData);
    //Reset
    setEnteredUsername("");
    setEnteredAge("");

  };

  return (
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
  );
};

//Export

export default AddUser;
