import React from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{Config.SOME_KEY}</Text>
    </View>
  );
};

export default App;
