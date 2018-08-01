/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import _updateConfig from './update.json';
import {
  isFirstTime,
  isRolledBack,
  packageVersion,
  currentVersion,
  checkUpdate,
  downloadUpdate,
  switchVersion,
  switchVersionLater,
  markSuccess,
} from 'react-native-update';
const {appKey} = _updateConfig[Platform.OS];


type Props = {};
export default class App extends Component<Props> {

  syncImmediate(){
    checkUpdate(appKey)
    .then(info => {

      alert(JSON.stringify(info));
    })


  }


  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {()=>{
        this.syncImmediate()
      }}>
        <Text>
          检查更新
        </Text>
        </TouchableOpacity>   
        <Text style={styles.instructions}>热更新</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
