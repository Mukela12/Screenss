import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import  MaterialCommunityIcons  from 
'react-native-vector-icons/MaterialCommunityIcons';

import StudentCreateAccount from './src/screens/StudentCreateAccount';
import StudentLogin from './src/screens/StudentLogin';
import StudentHomeScreen from './src/screens/StudentHomeScreen';
import VerifyOtp from './src/screens/VerifyOtp';
import GetStarted from './src/screens/GetStarted';
import BusinessLogin from './src/screens/BusinessLogin';
import BusinessProfile from './src/screens/BusinessProfile';
import BusinessCreateAccount from './src/screens/BusinessCreateAccount';
import StoreScreen from './src/screens/StoreScreen';
import StudentProfile from './src/screens/StudentProfile';
import AddTransaction from './src/screens/AddTransaction';
import StudentMonthlyCalculator from './src/screens/StudentMonthlyCalculator';
import BusinessOnboarding from './src/screens/BusinessonBoarding';
import Cartscreen from './src/screens/CartScreen';
import ProductUpload from './src/screens/ProductUpload';
import BusinessHome from './src/screens/BusinessHome';
import BusinessOrders from './src/screens/BusinessOrders';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = createBottomTabNavigator();

const StudentTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="name" component={StudentHomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
    }} />
      <Tab.Screen name="Transactions" component={AddTransaction} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} 
size={26}/>
        ),
    }}/>
      <Tab.Screen name="Profile" component={StudentProfile} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} 
size={26}/>
        ),
    }}/>
    </Tab.Navigator>
  );
};


const BusinessTabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="name" component={BusinessHome} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
    }} />
      <Tabs.Screen name="Orders" component={BusinessOrders} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket-unfill" color={color} 
size={26}/>
        ),
    }}/>
      <Tabs.Screen name="Profile" component={BusinessProfile} options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} 
size={26}/>
        ),
    }}/>
    </Tabs.Navigator>
  );
};

export const AppNavigator = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Check if the user is already logged in by retrieving the login status from AsyncStorage
        const isUserLoggedInString = await AsyncStorage.getItem('isUserLoggedIn');
        const isUserLoggedIn = isUserLoggedInString === 'true';

        // Navigate the user accordingly
        if (isUserLoggedIn) {
          // User is already logged in, navigate to StudentHomeScreen
          navigation.navigate('StudentHome');
        } else {
          // User is not logged in, show the GetStarted screen
          navigation.navigate('GetStarted');
        }
      } catch (error) {
        // Handle error, e.g., AsyncStorage error or other issues
        console.error('Error checking login status:', error);
      }
    };

    // Call the function to check login status
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} screenOptions={{headerShown: false}} />
        <Stack.Screen name="BusinessHome" component={BusinessTabNavigator} />
        <Stack.Screen name="ProductUpload" component={ProductUpload} />
        <Stack.Screen name="Cartscreen" component={Cartscreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="StudentCreateAccount" component={StudentCreateAccount} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="StudentHome" component={StudentTabNavigator} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="BusinessCreateAccount" component={BusinessCreateAccount} />
        <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
        <Stack.Screen name="BusinessLogin" component={BusinessLogin} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="StudentMonthlyCalculator" component={StudentMonthlyCalculator} />
        <Stack.Screen name="BusinessOnboarding" component={BusinessOnboarding} />
        <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; // Ensure to export AppNavigator as the default export
