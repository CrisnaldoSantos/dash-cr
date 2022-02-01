import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loginSuccess: false,
};

export const login = createAction<object>('LOGIN');
export const loginSuccess = createAction('LOGIN__SUCCESS');
export const logout = createAction('LOGOUT');
export const refreshData = createAction('REFRESH_DATA');

export default createReducer(INITIAL_STATE, {
  [loginSuccess.type]: (state, action) => ({
    ...state,
    loginSuccess: action.payload,
  }),
});
