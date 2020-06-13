import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstname}
            name="firstname"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastname}
            name="lastname"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddStudentFormView;