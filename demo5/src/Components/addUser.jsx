import { Component } from "react";
import UserService from "../Services/UsersService";

export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'abc' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const user = { name: this.state.name }
        UserService.createUser(user).then(res => {
            console.log(res);
            console.log(res.data)
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name
                    <input type="text name=" name onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}