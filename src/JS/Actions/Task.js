// Import Constants

import {ADD, DELETE, DONE, EDIT} from "../Constants/Constats";

// Action ADD

export const addTask = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

// Action DELETE

export const deleteTask = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

// Action DONE

export const doneTask = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

// Action EDIT

export const editTask = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
