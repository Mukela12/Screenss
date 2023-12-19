import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VerifyOtp from './src/screens/VerifyOtp';
import StudentCreateAccount from './src/screens/StudentCreateAccount';
import StoreScreen from './src/screens/StoreScreen';
import { useLogin } from './src/context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={StudentCreateAccount} name='Signup' />
      <Stack.Screen component={VerifyOtp} name='VerifyOtp' />
      <Stack.Screen component={StoreScreen} name='Storescreen' />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
