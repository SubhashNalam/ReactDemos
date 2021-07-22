import { React, Component } from 'react';
import TempInput from './TempInput';
import BoilingVerdict from './BoilingVerdict';
export class ParentTemp extends Component {
    constructor(props) {
        super(props);
        this.state = { temp: 0 };
        this.handleTemp = this.handleTemp.bind(this);
    }

    handleTemp(val) {
        this.setState({ temp: val });
    }

    render() {
        return (
            <div>
                <TempInput onTempChange={this.handleTemp} />
                <BoilingVerdict temp={this.state.temp} />
            </div>
        )
    }
}