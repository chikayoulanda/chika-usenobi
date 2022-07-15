import * as React from 'react';
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';

import SplashScreen from '../Containers/SplashScreen';
import LoginScreen from '../Containers/LoginScreen';
import DashboardScreen from '../Containers/DasboardScreen';

import styles from './Styles/NavigationStyles'

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

function AuthScreen () {
  return (
    <AuthStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerStyle: styles.header,
        headerMode: "screen",
        // orientation:'landscape_right'
      }}
    >
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, }} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, }} />
      <MainStack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false, }} />
      

    </AuthStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerMode: "screen"
        }}
      >
        <MainStack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false, }} />
        <MainStack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false, }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
