import { put, takeLatest } from 'redux-saga/effects';
import { USERS } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType, ResponseGenerator } from 'store/responseTypes';
import { successToast } from 'utils/toasts';
import {
  getUser,
  getUsers,
  getUsersSuccess,
  getUserSuccess,
  setUser,
  setUserModalCreate,
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
    successToast(`Erro ao listar usuários! ${error}`);
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
    successToast(`Erro ao buscar usuário! ${error}`);
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
    successToast(`Erro ao criar usuário! ${error}`);
  }
}

export function* watchSagas() {
  yield takeLatest(getUsers.type, getUsersList);
  yield takeLatest(getUser.type, getUserDetail);
  yield takeLatest(setUser.type, createUser);
}
