import React from "react";
import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  console.log("All-student-"+props.allStudents);
  if (!props.allStudents.length) {
    return <div className="all-students">There are no student enrolled.</div>;
  }

//College: {student.campus.name}  in line 28
  
  return (
    <div className="all-students">
      <h2>All Students</h2> 
      <Link to="/students/new" className="add-student">
        Add New student
      </Link>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
           <p><b>{student.firstName}, {student.lastName}</b></p>
          </Link>
          <img src={student.imageUrl} width="200px" alt={student.firstName} />
           <p>Email:{student.email}<br/>
              GPA: {student.gpa} <br/>
              College: {student.campus.name}</p>
             <button onClick={() => props.handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;