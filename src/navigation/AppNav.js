import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';
import {View, ActivityIndicator} from 'react-native';
import AppStack from './AppStack';

const AppNav = () => {
  const {loading, userToken} = useContext(AuthContext);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
