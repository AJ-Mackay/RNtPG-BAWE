import React from 'react';
import type {Node} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  return (
    <View>
        <Button title="Take Image" onPress={} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
