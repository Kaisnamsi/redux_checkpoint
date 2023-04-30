import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'all'
};

const reducer = (state = initialState, action) => {
  // handle actions here
};

const store = createStore(reducer);
