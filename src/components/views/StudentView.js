import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";


const StudentView = (props) => {
  // //display college 
  // let studentDisplay;
  // if (props.student.students) {
  //   studentDisplay = (
  //     <div>
  //       <p>{props.campus.students.length} Students</p>
  //       {props.campus.students.map((student) => (
  //         <div key={student.id}>{student.firstName}</div>
  //       ))}
  //     </div>
  //   );
  // } else {
  //   studentDisplay = <p>There are no students enrolled</p>;
  // }
  //  {studentDisplay/*drowmeun for*/ } in return
  
  console.log("student-record"+this.props.student);
//line 31 need to fix
  return (
    <>
      <h3>{props.student.firstName},{props.student.lastName}</h3>
      <img src={props.student.imageUrl} alt={props.student.name} />
      <p>Email: {props.student.email}<br/>
          GPA: {props.student.gpa}<br/>
          College: {props.student.campus.name} </p>
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