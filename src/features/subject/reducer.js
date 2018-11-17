import types from './actionTypes';

const initialState = {
    name: "Subject Not Chosen",
    grade: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
      case types.ADD:
        return {
          ...state,
          grade: 3
        };
      default:
        return state;
    }
  };