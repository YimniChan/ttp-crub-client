import React from "react";
import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no campuses</div>;
  }

  return (
    <div className="all-students">
      {props.allStudents.map((students) => (
        <div key={students.id}>
          <Link to={`/students/${students.id}`}>
          </Link>
          <img src={students.imageUrl} width="200px" alt={students.name} />
           <p>{students.firstName}+,+{students.lastName}</p>
          <p>{students.campusId.name} </p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;