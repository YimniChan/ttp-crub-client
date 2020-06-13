import React from "react";
import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no student enrolled.</div>;
  }

  return (
    <div className="all-students">
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
          </Link>
          <img src={student.imageUrl} width="200px" alt={student.name} />
           <p>{student.firstName}, {student.lastName}<br/>
           Email:{student.email}<br/>
           GPA: {student.gpa} <br/>
           College: {student.campus.name} </p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;