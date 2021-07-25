import React from 'react';
//import BookForm from './BookForm';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
//import { editBook } from '../actions/books';
import { editEmployee } from '../actions/actions';

const EditEmployee = (props) =>{ 
    if(props.flag) return(
    <div className='container__box'>
        <EmployeeForm 
            employee={props.employee}
            onSubmitEmployee={(employee) => {
                props.dispatch(editEmployee(props.employee.id, employee));
                props.history.push('/');
            }}
        />
    </div>
);else return<div>Employee Details</div> }; 

const mapStateToProps = (state, props) => {
    if(props.flag)
    return {
        employee: state.find((employee) =>
            employee.id === props.match.params.id)
    };
    else return;
};

export default connect(mapStateToProps)(EditEmployee);