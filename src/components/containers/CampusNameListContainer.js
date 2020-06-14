import React, { Component } from "react";
import PropTypes from "prop-types";
import { CampusNameListView } from "../views";

class CampusNameListContainer extends Component {
  render() {
    return <CampusNameListView campuses={this.props.campuses} />;
  }
}

CampusNameListContainer.propTypes = { campuses: PropTypes.array };

export default CampusNameListContainer;