import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import { CampusNameListContainer } from "../containers";

const StudentView = (props) => {

  return (
    <>
      <h3>{props.student.firstName},{props.student.lastName}</h3>
      <img src={props.student.imageUrl} alt={props.student.name} />
      <p>Email: {props.student.email}<br/>
          GPA: {props.student.gpa}<br/>
      </p>
      <CampusNameListContainer campuses={props.student.campuses} />
      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};
export default StudentView;