import React from "react";
import PropTypes from "prop-types";

const EditStudentFormView = (props) => {
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
          Email:{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            min={0.0}
            max={4.0}
            step="any"
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
        <button>Edit Student</button>
      </form>
    </div>
  );
};

EditStudentFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default EditStudentFormView;
