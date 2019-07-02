import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';
import NavigationService from '~/services/navigation';

import AsyncStorage from '@react-native-community/async-storage';

import LoginActions from '~/store/ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@pizzaria:token');

  if (token) {
    yield put(LoginActions.loginSuccess(token));
  }
  yield put(LoginActions.initCheckSuccess());
}

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    yield call([AsyncStorage, 'setItem'], '@pizzaria:token', response.data.token);

    NavigationService.navigate('Main');
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
    console.tron.log(error);
  }
}
export function* signUp({ username, email, password }) {
  console.tron.log(username, email, password);
  try {
    yield call(api.post, 'users', { username, email, password });

    yield put(toastActions.displayInfo('Cadastro feito com sucesso, aguarde um momentinho!', 5000));

    NavigationService.navigate('SignIn');
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
    console.tron.log(error);
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}
