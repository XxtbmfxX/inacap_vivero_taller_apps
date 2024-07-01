import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QuimicoList from '../components/QuimicoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QuimicoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
