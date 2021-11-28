import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Home from './src/scenes/Home';
import theme from './src/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Home />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
