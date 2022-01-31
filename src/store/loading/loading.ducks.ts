import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: 0,
};

export const startLoading = createAction('START_LOADING');
export const stopLoading = createAction('STOP_LOADING');

export default createReducer(INITIAL_STATE, {
  [startLoading.type]: (state) => ({
    ...state,
    loading: 1,
  }),
  [stopLoading.type]: (state) => ({
    ...state,
    loading: 0,
  }),
});
