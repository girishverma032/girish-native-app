import React from 'react';
import {Provider} from 'react-redux';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import store from './src/redux-configuration/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>
  );
};

export default App;
