import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import MainNavigator from './src/components/MainNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainNavigator />
    </View>
  );
};

export default App;
