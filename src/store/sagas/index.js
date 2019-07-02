import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { CartTypes } from '~/store/ducks/cart';
import { loadType, processOrder, savePrice } from './cart';
import {
  login, init, signUp, signOut,
} from './auth';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(CartTypes.LOAD_TYPE, loadType),
    takeLatest(CartTypes.LOAD_PRODUCT, savePrice),
    takeLatest(CartTypes.DELETE_PRODUCT, savePrice),
    takeLatest(CartTypes.REQUEST_ORDER, processOrder),
  ]);
}
