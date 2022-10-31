import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '~/store';
import Navigation from '~/navigation/Navigation';

const App = () => 
  <SafeAreaProvider>
    <StatusBar style="light" />
    <Provider store={store}>
      <Navigation />
    </Provider>
  </SafeAreaProvider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C252E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
