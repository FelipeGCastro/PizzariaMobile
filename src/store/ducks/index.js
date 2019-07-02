import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import { reducer as login } from './auth';
import { reducer as cart } from './cart';

const reducers = combineReducers({
  login,
  toast,
  cart,
});

export default reducers;
