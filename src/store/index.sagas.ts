import { all } from 'redux-saga/effects';
import * as usersSagas from './users/users.sagas';

function* Sagas() {
  yield all([usersSagas.watchSagas()]);
}

export default Sagas;
