import React from "react";
import "./styles/NameListView.css";
import { Link } from "react-router-dom";

const CampusNameListView = (props) => {
  console.log(props);
  if (!props.campus) {
    return <p>There are no campuses assigned </p>;
  }
  return (
    <>
      <div>
        <ul className="campuses">
          {props.student.campuses.map((campus) => (
            <li key={campus.id} className="campus-name">
              <Link to={`/campuses/${campus.id}`}>
                Campus: {campus.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CampusNameListView;