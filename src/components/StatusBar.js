import {StatusBar} from 'react-native';
import React from 'react';

const CustomStatusBar = ({backgroundColor, barStyle}) => {
  return (
    <StatusBar
      animated={true}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
  );
};
export default CustomStatusBar;
