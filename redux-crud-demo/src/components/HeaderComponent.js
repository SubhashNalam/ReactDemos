import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import EditEmployee from './EditEmployee';
import Example1 from './Example1'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>                    
                    <Example1 />
                    <EditEmployee flag={false } />               
                </header>
            </div>
        )
    }
}

export default HeaderComponent
