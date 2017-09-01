import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './components/bookList';
import DetailPage from './components/detailPage';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="list" component={BookList} title="Hardcover Fiction Book Ranking" initial={true} />
            <Scene key="detail" component={DetailPage} />
          </Scene>
        </Router>
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
