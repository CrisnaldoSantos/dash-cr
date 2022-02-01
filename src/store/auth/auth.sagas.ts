import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AUTH, USERS } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType, ResponseGenerator } from 'store/responseTypes';
import { errorToast } from 'utils/toasts';
import { setAccessToken } from 'utils/dataStorage';

import {
  login,
  loginSuccess,
  logout,
  refreshData,
  setAuthUser,
} from './auth.ducks';

export function* signIn({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.post(AUTH, payload);
    const { id, email, firstName, lastName, role } = response.data.user;

    setAccessToken({
      accessToken: response.data.token,
      code: id,
      fullname: `${firstName} ${lastName}`,
      email,
      role,
    });
    yield put({ type: loginSuccess.type, payload: true });
    yield put({ type: setAuthUser.type, payload: response.data.user });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });
    errorToast(`Usuário não autorizado! : ${error}`);
  }
}

export function* refresh({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(`${USERS}/${payload}`);

    yield put({ type: loginSuccess.type, payload: true });
    yield put({ type: setAuthUser.type, payload: response.data.user });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });
    errorToast(`Usuário não autorizado! : ${error}`);
    window.location.replace('/login');
  }
}

export function* signOut() {
  localStorage.clear();
  yield put({ type: loginSuccess.type, payload: false });
}

export function* watchSagas() {
  yield takeLatest(login.type, signIn);
  yield takeLatest(logout.type, signOut);
  yield takeEvery(refreshData.type, refresh);
}
