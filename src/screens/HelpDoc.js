import React from 'react';
import {Box, Text} from 'native-base';
import WebView from 'react-native-webview';

const HelpDoc = () => {
  return (
    <Box flex={1} bg={'white'}>
      <Text
        p={2}
        fontWeight={500}
        borderBottomWidth={1}
        borderBottomColor={'#e5e5e5'}>
        Refer to the following doc for help regarding this template
      </Text>
      <WebView
        source={{
          uri: 'https://github.com/MhtChawla/react-native-basekit/blob/master/README.md',
        }}
      />
    </Box>
  );
};

export default HelpDoc;
