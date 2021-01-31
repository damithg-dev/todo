import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    data: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    data: todoId,
  };
};

export const completeTodo = (todoId) => {
  return {
    type: COMPLETE_TODO,
    data: todoId,
  };
};
