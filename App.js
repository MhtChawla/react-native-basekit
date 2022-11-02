import 'react-native-gesture-handler'; //remember to always import this
import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import Toast from 'react-native-toast-message';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {dismiss} from './src/assets/images';

const App = () => {
  return (
    <InternetConnectionAlert errorImageSrc="" errorColor="#E44937" title="" tapToCloseEnabled={true} showCancel cancelBtnImageSrc={dismiss}
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

        <Box flex={1} alignItems="center" justifyContent="center">
          <Text>App</Text>
        </Box>
        
        {/** 
         * 
         * 
         * 
         * rest of the code here
         * 
         * 
         * 
         *  */}

        <Toast />
      </NativeBaseProvider>
    </InternetConnectionAlert>
  );
};

export default App;
