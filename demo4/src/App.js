import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { React, Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ textAlign: 'left' }}>
          <header className="App-header" style={{ textAlign: 'left' }}>
            <ul>
              <li>
                <Link to="/" style={{ color: 'green'}}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'yellow' }}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'red' }}>Contact Us</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
