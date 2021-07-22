import { React, Component } from 'react';

export class FormattedDt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        console.log("invoked did mount");
        this.timeId = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({ date: new Date() });
    }
    render() {

        return (
            <h2>Today is: {this.state.date.toLocaleString()}</h2>
        )
    }
    componentWillUnmount() {
        console.log("invoked will unmount");
        clearInterval(this.timeId);
    }

}