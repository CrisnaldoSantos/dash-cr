import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  user: {},

  modalCreate: false,
  modalEdit: false,
  modalDelete: false,
};

export const getUsers = createAction('GET_USERS');
export const getUsersSuccess = createAction('GET_USERS_SUCCESS');

export const getUser = createAction<number>('GET_USER');
export const getUserSuccess = createAction('GET_USER_SUCCESS');

export const setUser = createAction<object>('CREATE_USER');
export const setUserModalCreate = createAction<boolean>(
  'SET_USER_MODAL_CREATE'
);
export const setUserModalEdit = createAction<boolean>('SET_USER_MODAL_EDIT');
export const setUserModalDelete = createAction<boolean>(
  'SET_USER_MODAL_DELETE'
);

export default createReducer(INITIAL_STATE, {
  [getUsersSuccess.type]: (state, action) => ({
    ...state,
    users: action.payload,
  }),

  [getUserSuccess.type]: (state, action) => ({
    ...state,
    user: action.payload,
  }),

  [setUserModalCreate.type]: (state, action) => ({
    ...state,
    modalCreate: action.payload,
  }),

  [setUserModalEdit.type]: (state, action) => ({
    ...state,
    modalEdit: action.payload,
  }),

  [setUserModalDelete.type]: (state, action) => ({
    ...state,
    modalDelete: action.payload,
  }),
});
