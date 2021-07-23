import React from 'react'
import { Route, Link } from 'react-router-dom'

const Contacts = ({ match }) => <p>{match.params.id}</p>

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'red' }}>Welcome to Contact Page</h1>
        <strong style={{ color: 'brown' }}>Select contact Id</strong>
        <ul>
          <li>
            <Link to="/contact/1" style={{ color: 'pink' }}>Contacts 1 </Link>
          </li>
          <li>
            <Link to="/contact/2" style={{ color: 'pink' }}>Contacts 2 </Link>
          </li>
          <li>
            <Link to="/contact/3" style={{ color: 'pink' }}>Contacts 3 </Link>
          </li>
          <li>
            <Link to="/contact/4" style={{ color: 'pink' }}>Contacts 4 </Link>
          </li>
        </ul>
        <Route path="/contact/:id" component={Contacts} />
      </div>
    )
  }
}
export default Contact