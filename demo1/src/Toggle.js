import { React, Component } from "react";
export class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({ flag: !state.flag }));
    }

    render() {
        return (<div><h3>Toggle Button</h3>
            <button onClick={this.handleClick}>{this.state.flag ? 'on' : 'off'} Click</button>
        </div>)

    }
}