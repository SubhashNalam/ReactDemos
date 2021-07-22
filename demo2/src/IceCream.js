import { React, Component } from 'react';
export class IceCream extends Component {
    constructor(props) {
        super(props);
        this.state = { IceCream: 'Vanilla' }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ IceCream: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Select Your IceCream Flavour :</label>
                    <select id="IceCream" value={this.state.IceCream} onChange={this.handleChange}>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Mint Chocolate Chip">Mint Chocolate Chip</option>
                        <option value="Strawberry">Strawberry</option>
                    </select>

                    <input type='submit'></input>

                </form>
                <h3> Your IceCream Flavour is: {this.state.IceCream} </h3>

            </div>
        )
    }
}