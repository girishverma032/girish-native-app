import React, {createContext, useEffect, useState} from 'react';
import asyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    isLoggedIn().then();
  }, []);

  const login = () => {
    setLoading(true);
    setUserToken('9917141921');
    asyncStorage.setItem('userToken', '9917141921').then();
    setLoading(false);
  };

  const logOut = () => {
    setLoading(true);
    setUserToken(null);
    asyncStorage.removeItem('userToken').then();
    setLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let token = await asyncStorage.getItem('userToken');
      setUserToken(token);
      setLoading(false);
    } catch (e) {
      console.log('Login error');
    }
  };
  return (
    <AuthContext.Provider
      value={{loading, setLoading, login, logOut, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
