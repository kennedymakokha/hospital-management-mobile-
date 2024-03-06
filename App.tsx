/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Alert,
  View,
} from 'react-native';

import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Splash from './src/splash';
import Doctors from './src/doctors';
import Doctorsdetails from './src/doctorsdetails';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './Navigations/stackNavigation';
import messaging from '@react-native-firebase/messaging';
import { store } from './store'
import { Provider } from 'react-redux'
import getNewFCMToken from './getFCMTToken';

function App() {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    getNewFCMToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    }); return unsubscribe;
  }, []);
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <DashboardStack />
    </NavigationContainer>
    // </Provider>
  );
}



export default App;
