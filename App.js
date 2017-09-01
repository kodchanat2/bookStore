import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './components/bookList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BookList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
});
