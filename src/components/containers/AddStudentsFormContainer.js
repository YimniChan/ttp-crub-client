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
      gpa: "",
      imageUrl: "",
      errors: {},
    };
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

  handleSubmit = (e) => {
    e.preventDefault();
     this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddStudentsFormView
          firstname={this.state.firstname}
          lastname={this.state.lastname}
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
    addStudents: (student) => dispatch(ddStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
