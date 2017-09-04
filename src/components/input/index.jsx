import React from 'react'
import Formsy from 'formsy-react'

import styles from './style.scss'

import validations from 'utils/validations';


const TextInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    //think how to implement this feature later, because alert will apear at the every component which has input
    /*window.onbeforeunload = () => { // http://stackoverflow.com/a/28607536/5814245 - why we can do it without checking if eventListener already exists
      return "";
    }*/
    
    this.setValue(event.currentTarget.value);
  },

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const errorClass = this.showRequired() ? styles.required : this.showError() ? 'error' : null;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={errorClass}>
        <input type={this.props.type} className="form-control" onChange={this.changeValue} value={this.getValue()}/>
        <div className="errorMessage">{errorMessage}</div>
      </div>
    );
  }
});

export default TextInput;