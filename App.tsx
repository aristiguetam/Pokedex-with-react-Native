import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigatorStack} from './src/navigator/tab1';
import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigatorStack /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
