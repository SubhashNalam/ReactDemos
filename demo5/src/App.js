import './App.css';
import { AddUser } from './Components/addUser';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      Hello!
      <UserList />
      <AddUser />
    </div>
  );
}

export default App;