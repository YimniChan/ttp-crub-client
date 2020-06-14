import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: 0,
      imageUrl: "",
      isValidEmail: false,
     // isValidGpa: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value }, this.validateEmail);
    } 
    else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  // check email
  validateEmail = () => {
    const { email } = this.state;
    let errors = { ...this.state.errors };
    const re = /\S+@\S+\.\S+/;
    // set a valid boolean to true
    let isValidEmail = true;
    // check if the value is valid
    if (!re.test(email)) {
      // if not, set the value to false and add error message
      isValidEmail = false;
      errors.email = "Invalid email";
    }
    // setstate with isValidName
    if (isValidEmail) {
      errors.email = "valid email";
    }
    this.setState({ isValidEmail, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidEmail)  this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidEmail ? "" : this.state.errors.email}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          gpa={this.state.gpa}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudents: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
