import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Tech Stack</Text>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
