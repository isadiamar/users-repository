import React, { useState } from "react";

import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  //States
  const [userList, setUserList] = useState([]);

  //Handlers
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
