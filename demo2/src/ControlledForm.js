import {React , Component} from 'react';
export class ControlledForm extends Component{
    constructor(props){
        super(props);
        this.state={name:'abc'}
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({name:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        alert("Form submitted")
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} ></input>

                    <input type='submit'></input>

                </form>
                <h3> Hello,welcome {this.state.name}</h3>

            </div>
        )
    }
}