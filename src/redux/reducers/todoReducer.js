import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/types";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
        return {...state, todoList: state.todoList.concat(action.data)}
    case DELETE_TODO:
        return {...state, todoList: state.todoList.filter(({id}) => id !== action.data )}
    case COMPLETE_TODO:
      return {...state, todoList: state.todoList.map((i) =>  {
       if(i.id === action.data){
         i.completed = !i.completed
       }
       return i
      })}
    default:
      return state;
  }
};


export default todoReducer