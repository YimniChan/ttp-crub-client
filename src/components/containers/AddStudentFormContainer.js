import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      gpa: "",
      imageUrl: "",
      isValidEmail: false,
      isValidGpa: false,
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
    // set a valid boolean to true
    let isValidEmail = true;
    // check if the value is valid
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
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
     this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddStudentFormView
          firstname={this.state.firstname}
          lastname={this.state.lastname}
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
