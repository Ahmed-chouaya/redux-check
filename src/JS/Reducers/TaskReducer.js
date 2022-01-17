// Initialisation

import {ADD, DELETE, DONE, EDIT} from "../Constants/Constats";
const Initialisation = {
  TaskList: [],
};

// PURE FUNCTION

const TaskReducer = (state = Initialisation, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        TaskList: [...state.TaskList, action.payload],
      };

    case DELETE:
      return {
        ...state,
        TaskList: state.TaskList.filter((el) => el.id !== action.payload),
      };

    case DONE:
      return {
        ...state,
        TaskList: state.TaskList.map((el) =>
          el.id === action.payload ? {...el, isDone: !el.isDone} : el
        ),
      };

    case EDIT:
      return {
        ...state,
        TaskList: state.TaskList.map((el) =>
          el.id === action.payload.id
            ? {...el, description: action.payload.description}
            : el
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
