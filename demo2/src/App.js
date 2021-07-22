//import logo from './logo.svg';
import './App.css';
import { ControlledForm } from './ControlledForm'
import { Temperature } from './Temperature';
import { IceCream } from './IceCream';
//import {BoilingVerdict} from './BoilingVerdict'
import { ParentTemp } from './ParentTemp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ControlledForm />
       <Temperature />
       <IceCream />
       <ParentTemp />
      </header>
    </div>
  );
}

export default App;
