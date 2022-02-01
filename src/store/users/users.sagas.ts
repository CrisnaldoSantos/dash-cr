import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { USERS } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType, ResponseGenerator } from 'store/responseTypes';
import { errorToast, successToast } from 'utils/toasts';
import {
  deleteUser,
  getUser,
  getUsers,
  getUsersSuccess,
  getUserSuccess,
  setUser,
  setUserModalCreate,
  setUserModalDelete,
  setUserModalEdit,
  setUserModalPassword,
  updateUser,
} from './users.ducks';

export function* getUsersList() {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(USERS);

    yield put({
      type: getUsersSuccess.type,
      payload: response.data.users,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    errorToast(`Erro ao listar usuários! ${error}`);
  }
}

export function* getUserDetail({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(`${USERS}/${payload}`);

    yield put({
      type: getUserSuccess.type,
      payload: response.data.user,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    errorToast(`Erro ao buscar usuário! ${error}`);
  }
}

export function* createUser({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    yield api.post(USERS, payload);
    successToast('Usuário criado com sucesso!');
    yield put({
      type: getUsers.type,
    });
    yield put({
      type: setUserModalCreate.type,
      payload: false,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    errorToast(`Erro ao criar usuário! ${error}`);
  }
}

export function* destroyUser({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    yield api.delete(`${USERS}/${payload}`);
    successToast('Usuário deletado com sucesso!');
    yield put({
      type: getUsers.type,
    });
    yield put({
      type: setUserModalDelete.type,
      payload: false,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    errorToast(`Erro ao deletar usuário! ${error}`);
  }
}

export function* editUser({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    yield api.put(`${USERS}/${payload.id}`, payload);
    successToast('Usuário atualizado com sucesso!');
    yield put({
      type: getUsers.type,
    });
    yield put({
      type: setUserModalEdit.type,
      payload: false,
    });
    yield put({
      type: setUserModalPassword.type,
      payload: false,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    errorToast(`Erro ao atualizar usuário! ${error}`);
  }
}

export function* watchSagas() {
  yield takeEvery(getUsers.type, getUsersList);
  yield takeLatest(getUser.type, getUserDetail);
  yield takeLatest(setUser.type, createUser);
  yield takeLatest(deleteUser.type, destroyUser);
  yield takeLatest(updateUser.type, editUser);
}
