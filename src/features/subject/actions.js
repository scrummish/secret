import * as types from './actionTypes';

export const add = (text) => ({
  type: types.ADD,
  payload: { text }
});