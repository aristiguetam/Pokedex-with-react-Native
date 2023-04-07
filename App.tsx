import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {NavigatorStack} from './src/navigator/NavigatorStack';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
};

export default App;
