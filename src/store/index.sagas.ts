import { all } from 'redux-saga/effects';
import * as usersSagas from './users/users.sagas';
import * as authSagas from './auth/auth.sagas';

function* Sagas() {
  yield all([usersSagas.watchSagas(), authSagas.watchSagas()]);
}

export default Sagas;
