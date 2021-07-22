//import logo from './logo.svg';
import './App.css';
//import Counter from './counter';
import { FormattedDt } from './FormattedDt';
import {Toggle} from './Toggle'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        App Component
        <FormattedDt />
        <Toggle />
      </header>
    </div>
  );
}

export default App;