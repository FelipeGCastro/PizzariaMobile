import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';
import NavigationService from '~/services/navigation';
import store from '~/store';

import CartActions from '~/store/ducks/cart';

export function* loadType({
  productName, typeName, type_id, url,
}) {
  yield put(CartActions.saveType(productName, typeName, type_id, url));

  NavigationService.navigate('Size', { type_id });
}

export function* savePrice() {
  const { price } = yield store.getState().cart;
  console.tron.log(price, 'loadProduct');
  NavigationService.navigate('Cart', { price });
}

export function* processOrder({
  description, postal_code, street, number, district,
}) {
  try {
    const { products: productList, price } = store.getState().cart;
    console.tron.log(
      price,
      JSON.stringify(productList),
      description,
      postal_code,
      street,
      number,
      district,
    );
    const products = JSON.stringify(productList);
    const response = yield call(api.post, 'orders', {
      price,
      products,
      description,
      postal_code,
      street,
      number,
      district,
    });
    console.tron.log(response.data);
    yield put(CartActions.orderSuccess());
    yield put(toastActions.displayInfo('Pedido feito com sucesso, aguarde um momentinho!'));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
    console.tron.log(error);
  }
}
