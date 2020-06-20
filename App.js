// =======>>>>>>>> LIBRARIES <<<<<<<<=======

import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// =======>>>>>>>> ASSETS <<<<<<<<=======

import { store, persistor } from './src/Redux/Store';
import AppNavigation from './src/AppNavigation';
import { Colors } from './src/CommonConfig';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======

export class App extends React.Component {
  // =======>>>>>>>> STATES DECLARATION <<<<<<<<=======

  // =======>>>>>>>> LIFE CYCLE METHODS <<<<<<<<=======

  componentDidMount() {
    console.disableYellowBox = true
  }
  componentWillUnmount() {

  }

  // =======>>>>>>>> FUNCTIONS DECLARATION <<<<<<<<=======

  // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======

  render() {
    return (
      <Fragment>
        {/* <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}> */}
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </Provider>
        {/* </SafeAreaView> */}
      </Fragment>
    );
  };
}
export default App;
