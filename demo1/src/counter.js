import { React, Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h3>This is Counter Component</h3>
                <button onclick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                <h3>You clicked for {this.state.count} times</h3>
            </div>
        )
    }
}
export default Counter;