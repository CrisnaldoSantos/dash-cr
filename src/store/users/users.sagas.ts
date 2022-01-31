import { put, takeLatest } from 'redux-saga/effects';
import { USERS } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ResponseGenerator } from 'store/responseTypes';
import { getUsers, getUsersSuccess } from './users.ducks';

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
    /// TODO
    console.log(error);
    /*
    yield put({ type: stopLoading.type });
    if (error.response !== undefined) {
      const { status, data } = error.response;
      console.log(`Erro: ${status}: ${data.error}`);
    } */
  }
}

export function* watchSagas() {
  yield takeLatest(getUsers.type, getUsersList);
}
