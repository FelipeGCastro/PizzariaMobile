import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Type from '~/pages/Type';
import Size from './pages/Size';
import Cart from './pages/Cart';
import Address from './pages/Address';
import History from './pages/History';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
        Main: createStackNavigator(
          {
            Main,
            Type,
            Size,
            Cart,
            Address,
            History,
          },
          {
            initialRouteName: 'Main',
            defaultNavigationOptions: {
              headerTintColor: '#fff',
              //   headerTitle: 'Pizzaria Don Juan',
              //   headerBackTitle: null,
              headerTitleStyle: { flex: 1, textAlign: 'center' },
              headerStyle: { height: 60, backgroundColor: '#0b2031' },
            },
            mode: 'modal',
          },
        ),
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}
