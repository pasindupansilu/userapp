import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash/Splash';
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import UserList from './Screens/UserList/UserList';
import { Provider, useStore } from 'react-redux';
import Store from './ReduxStore/Store';
import UserForm from './Screens/UserForm/UserForm';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UserList" component={UserList} options={{ headerShown: false }} />
            <Stack.Screen name="UserForm" component={UserForm} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;