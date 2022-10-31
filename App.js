import 'react-native-gesture-handler'; //remember to always import this
import React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NativeBaseProvider>
      <Text>App</Text>

      {/* 🚨 always import <Toast /> at the end of innercode ---> */}
      <Toast />
    </NativeBaseProvider>
  );
};

export default App;
