import { React, Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCtr = this.incrementCtr.bind(this);
    }
    incrementCtr(){
        this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div>
                <h3>This is Counter Component</h3>
                <h3>You clicked for {this.state.count} times</h3>
                <button onclick={this.incrementCtr}>increment</button>
            </div>
        )
    }
}
export default Counter;