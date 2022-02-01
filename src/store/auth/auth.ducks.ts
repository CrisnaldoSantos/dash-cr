import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loginSuccess: false,
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    document: '',
    password: '',
    role: '',
  },
};

export const login = createAction<object>('LOGIN');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const logout = createAction('LOGOUT');
export const refreshData = createAction<number>('REFRESH_DATA');
export const setAuthUser = createAction('SET_AUTH_USER');

export default createReducer(INITIAL_STATE, {
  [loginSuccess.type]: (state, action) => ({
    ...state,
    loginSuccess: action.payload,
  }),

  [setAuthUser.type]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});
