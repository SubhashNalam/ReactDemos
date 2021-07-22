import { React, Component } from 'react';
export class TempInput extends Component {
    constructor(props) {
        super(props);
        //this.state={temp:'0'}
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        //this.setState({temp:event.target.value});
        alert("changed")
        this.props.onTempChange(event.target.value)
    }

    render() {
        const temperature = this.props.temp;
        return (
            <div>
                Enter temperature here:
                <input type='number' value={temperature} onChange={this.handleChange} ></input>
            </div>
        )
    }
}
export default TempInput;