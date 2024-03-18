// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingPage from './src/pages/OnboardingPage';
import LoginScreen from './src/pages/LoginScreen';
import useAuth from './src/components/hooks/useAuth';

export default function App() {
  const Stack = createStackNavigator();

  const {user} = useAuth()
  if(user){ 

  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingPage}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
