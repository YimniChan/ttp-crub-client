import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";


const CampusNameListView = (props) => {
  console.log(props);
  if (!props.campuses) {
    return <p>There are no campuses assigned </p>;
  }
  return (
    <>
      <div>
        <ul className="campuses">
          {props.campuses.map((campus) => (
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