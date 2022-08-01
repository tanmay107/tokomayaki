import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
