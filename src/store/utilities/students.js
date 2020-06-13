import axios from "axios";

// Action Types
const FETCH_STUDENTS = "FETCH_STUDENTS";

// Action Creators

const fetchtudents = (students) => {
  return {
    type: FETCH_STUDENTS,
    payload: students,
  };
};

// Thunk Creators
export const fetchtudentsThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((students) => dispatch(fetchtudents(campus)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
