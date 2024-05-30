import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/splashScreen';
import LoginScreen from '../Screens/loginScreen';
import Products from '../Screens/products';
import {TEXT} from '../contant/constantText';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={TEXT.GETSTARTED}>
        <Stack.Screen
          name={TEXT.GETSTARTED}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={TEXT.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={TEXT.PRODUCT}
          component={Products}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
