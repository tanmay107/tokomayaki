import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './context/context';
import { users } from './assets/userCreds';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingScreen from './screens/LandingScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import DetailsScreen from './screens/DetailsScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const initialLoginState = {
    isloading: true,
    email: null,
    token: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          token: action.token,
          isloading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.email,
          token: action.token,
          isloading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          token: null,
          isloading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.email,
          token: action.token,
          isloading: false,
        };  
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async(email, password) => {
      const found = users.some(user => user.email === email && user.password === password);
      let token;
      token = null;
      if(found){
        try{
          token='jhgf';
          await AsyncStorage.setItem('token', token)
        } catch(e) {
          console.log(e)
        }
      }
      dispatch({ type: 'LOGIN', email: email, token: token })
    },
    signOut: async() => {
      try{
        await AsyncStorage.removeItem('token')
      } catch(e) { 
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: async(email) => {
      let token;
      token = null
      try{
        token = 'kjhg';
        await AsyncStorage.setItem('token', token)
      }catch(e){
        console.log(e)
      }
      dispatch({ type: 'REGISTER', email: email, token: token });
    },
  }), [])

  useEffect(() => {
    (async() => {
      let token;
      token = null;
      try {
        token = await AsyncStorage.getItem('token')
        console.log(token)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN',  token: token })
    })();
  }, [])
  

  if( loginState.isloading ){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            loginState.token ? (
               <>
                  <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, }} />
                  <Stack.Screen name='GetStart' component={GetStartedScreen} options={{ headerShown: false, }} />
                  <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: false, }} />
               </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, }} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
