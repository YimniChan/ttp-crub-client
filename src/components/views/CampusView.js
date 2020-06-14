import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import { StudentNameListContainer } from "../containers";

const CampusView = (props) => {
  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h3>{props.campus.name}</h3>
      <h4>{props.campus.address}</h4>
      <p>{props.campus.description}</p> 

      <StudentNameListContainer students={props.campus.students} />
      <Link className="edit-link" to={`/campuses/${props.campus.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.campus.id)}>
        Delete
      </button>
  

    </>
  );
};
//addstodent option, form w.dropdowm meun
// <button onClick={() => props.handleAdd()}>ADD STUDENT</button> 
// <button onClick={() => props.handleDelete()}>REMOVE STUDENT</button> 

export default CampusView;
