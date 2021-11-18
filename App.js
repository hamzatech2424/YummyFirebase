import React, { useEffect, useState } from 'react';
import SplashScreen from './src/Screens/AuthScreens/SplashScreen';
import AuthStack from './src/Navigation/AuthStack';
import TabNavigation from './src/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountrySelectScreen from './src/Screens/MainScreens/CountrySelectScreen';
import auth from '@react-native-firebase/auth';
import { Provider } from "react-redux";
import store from './src/Redux/Store'
import HomeScreen from './src/Screens/MainScreens/HomeScreen';
import RestaurantScreen from './src/Screens/MainScreens/RestaurantScreen';
import i18next from './src/languages/i18n'
import PaymentScreens from '../Yummy/src/Screens/MainScreens/PaymentScreens/PaymentScreens'
import CheckOutScreen from './src/Screens/MainScreens/CheckOutScreen';

const Stack = createStackNavigator();


const App = () => {
  const [SplashHide, setSplashHide] = useState(true);
  const [AsynValue, setAsyncValue] = useState('');


  // console.log(AsynValue)

  useEffect(() => {
    setTimeout(() => {
      setSplashHide(false);
    }, 2000);

    // getCurrentUser()
    // getData()
  }, []);

  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            {SplashHide ?
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              : null}

            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{ headerShown: false }}
            />


            <Stack.Screen
              name={'CountrySelect'}
              component={CountrySelectScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="DrawerNavigationRoutes"
              component={TabNavigation}
              options={{ headerShown: false }}
            />


            <Stack.Screen
              name={'Restaurant'}
              component={RestaurantScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name={'Payment'}
              component={PaymentScreens}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name={'CheckOut'}
              component={CheckOutScreen}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </React.Fragment>
  );
};

export default App;
