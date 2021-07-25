import { Component } from "react";
import { connect } from 'react-redux';

class CounterComp extends Component {
    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    }
    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}><h2>Decrement(-)</h2></button>
                    <span><h1>{this.props.count}</h1></span>
                    <button onClick={this.increment}><h2>Increment(+)</h2></button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        count: state.count
    };
}
const CounterComp1 = connect(mapStateToProps)(CounterComp);

export default CounterComp1;