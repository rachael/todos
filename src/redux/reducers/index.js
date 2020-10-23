import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '../constants/ActionTypes'

export const initialState = []

// source:

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          complete: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, complete: !todo.complete } :
          todo
      )

    default:
      return state
  }
}
