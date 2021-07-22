import { React, Component } from 'react';
export class Temperature extends Component{
    constructor(props) {
        super(props);
        this.state = { Temp: '34' }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ Temp: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Temp</label>
                    <input type='tel' value={this.state.Temp} onChange={this.handleChange} ></input>

                    <input type='submit'></input>

                </form>
                
                <h3> You entered the temp as: {this.state.Temp}<sup>o</sup>C</h3>

            </div>
        )
    }
}