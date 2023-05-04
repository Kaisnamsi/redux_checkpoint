import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'all'
};

const reducer = (state = initialState, action) => {
};

export const store = createStore(reducer);
