import 'react-native-gesture-handler'; //remember to always import this
import React from 'react';
import {NativeBaseProvider, Text} from 'native-base';
import Toast from 'react-native-toast-message';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {dismiss} from './src/assets/images';

const App = () => {
  return (
    // wrap all the code in <InternetConnectionAlert> to show alerts when device is offline / internet down
    <InternetConnectionAlert
      errorImageSrc=""
      errorColor="#E44937"
      title=""
      tapToCloseEnabled={true}
      showCancel
      cancelBtnImageSrc={dismiss}
      cancelBtnImageStyle={{
        height: 13,
        width: '100%',
      }}
      cancelBtnStyle={{
        justifyContent: 'flex-end',
        marginRight: 18,
        marginBottom: 10,
        width: 45,
      }}
      message="We can't reach our network right now. Please check your internet connection.">
      <NativeBaseProvider>
        <Text>App</Text>

        {/** rest of the code here */}

        {/* 🚨 always import <Toast /> at the end of innercode ---> */}
        <Toast />
      </NativeBaseProvider>
    </InternetConnectionAlert>
  );
};

export default App;
