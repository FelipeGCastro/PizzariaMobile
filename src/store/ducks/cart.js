import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadType: ['productName', 'typeName', 'type_id', 'url'],
  saveType: ['productName', 'typeName', 'type_id', 'url'],
  loadProduct: ['sizeName', 'size_id', 'price'],
  requestOrder: ['description', 'postal_code', 'street', 'number', 'district'],
  orderSuccess: null,
  deleteProduct: ['productId', 'price'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  type: null,
  products: [],
  price: 0,
  id: 0,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_TYPE]: (state, {
    productName, typeName, type_id, url,
  }) => state.merge({
    type: {
      productName,
      typeName,
      type_id,
      url,
    },
  }),
  [Types.LOAD_PRODUCT]: (state, { sizeName, size_id, price }) => state.merge({
    price: parseFloat(state.price, 10) + parseFloat(price, 10),
    id: state.id + 1,
    products: [
      ...state.products,
      {
        ...state.type,
        sizeName,
        size_id,
        price,
        id: state.id + 1,
      },
    ],
  }),
  [Types.ORDER_SUCCESS]: state => state.merge({
    type: null,
    products: [],
    price: 0,
    id: 0,
  }),
  [Types.DELETE_PRODUCT]: (state, { productId, price }) => state.merge({
    products: state.products.filter(product => product.id !== productId),
    price: parseFloat(state.price, 10) - parseFloat(price, 10),
  }),
});
