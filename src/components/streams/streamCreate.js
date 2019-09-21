import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createStream } from '../../action'

class StreamCreator extends React.Component{
    renderErrorMessage({error, touched}){
        if(error && touched) {
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }

    }
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
           <input {...input} autoComplete="off"/>
          {this.renderErrorMessage(meta)}
        </div>
        )
     }
     onSumbit = (formValues) =>{
         this.props.createStream(formValues)
     }
    render(){
        return(
           <form onSubmit={this.props.handleSubmit(this.onSumbit)} className="ui error form">
               <Field name="title"  component={this.renderInput} label="Enter Title"/>
               <Field name="description" component={this.renderInput} label="Enter Description"/>
               <button className="ui button primary">Sumbit</button>
           </form>
        )
    }
}
const validate = formValues => {
    const errors = {}
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors
}
const formWrapped =  reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreator);

export default connect(null, { createStream })(formWrapped)