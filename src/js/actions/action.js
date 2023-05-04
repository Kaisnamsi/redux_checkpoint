const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const editTask = (taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: {
    id: taskId,
    task: updatedTask
  }
});

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter
});
