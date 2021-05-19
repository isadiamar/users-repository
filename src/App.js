import './App.css';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App() {
  
  return (
    <div className="App">
      <AddUser></AddUser>
      <UserList users ={[]}></UserList>
    </div>
  );
}

export default App;
