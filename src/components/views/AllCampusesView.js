import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  return (
    <div className="all-campuses">

      <h2>All Campuses</h2> 
      <Link to="/campusues/new" className="add-campuses">Add New campus</Link>
      <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h3>{campus.name}</h3>
          </Link>
          <img src={campus.imageUrl} width="200px" alt={campus.name} />
          <p>{campus.students.length} students</p>
          <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
