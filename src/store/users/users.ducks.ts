import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
};

export const getUsers = createAction('GET_USERS');
export const getUsersSuccess = createAction('GET_USERS_SUCCESS');

export default createReducer(INITIAL_STATE, {
  [getUsersSuccess.type]: (state, action) => ({
    ...state,
    users: action.payload,
  }),
});
