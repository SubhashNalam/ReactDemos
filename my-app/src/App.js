import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import MyDate from './Date';
import Temp from './Temperature';
import degrees from './Temperature'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Learn React....
       <Greet />
       <MyDate />
       <Temp degrees='34'/>
      </header>
    </div>
  );
}

export default App;
