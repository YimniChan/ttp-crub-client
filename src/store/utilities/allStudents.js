import axios from "axios";

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/" + "http://localhost:3001";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENTS = "ADD_STUDENTS";
const EDIT_STUDENTS = "EDIT_STUDENTS";
const DELETE_STUDENTS = "DELETE_STUDENTS";

// ACTION CREATORS;
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const addStudents = (students) => {
  return {
    type: ADD_STUDENTS,
    payload: students,
  };
};

const editStudents = (students) => {
  return {
    type: EDIT_STUDENTS,
    payload: students,
  };
};

const deleteStudents = (id) => {
  return {
    type:DELETE_STUDENTS,
    payload: id,
  };
};

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/students")
    .then((res) =>res.data
    ) 
    .then((students) => dispatch(fetchAllStudents(students)),
     console.log("test"))
    .catch((err) => console.log(err));
};

export const addStudentsThunk = (students, ownProps) => (dispatch) => {
  return axios
    .post("/api/students", students)
    .then((res) => res.data)
    .then((newStudents) => {
      dispatch(addStudents(newStudents));
      ownProps.history.push(`/students/${newStudents.id}`);
    })
    .catch((err) => console.log(err));
};

export const editStudentsThunk = (id, students) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`, students)
    .then((res) => res.data)
    .then((updatedStudents) => dispatch(editStudents(updatedStudents)))
    .catch((err) => console.log(err));
};

export const deleteStudentsThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/students/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteStudent(id)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENTS:
      return [...state, action.payload];
    case EDIT_STUDENTS:
      return [...state, action.payload];
    case DELETE_STUDENTS:
      console.log(action.payload);
      return state.filter((students) => students.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
