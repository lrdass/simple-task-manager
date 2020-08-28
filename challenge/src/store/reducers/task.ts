import { TaskState, TaskAction } from "./types";

const initialState: TaskState[] = [];

const tasks = (state: TaskState[] = initialState, action: TaskAction) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TASK':
      console.log(action.payload)
      return [...state, action.payload]
    default:
      return state
  }
}

export default tasks 