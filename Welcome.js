import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = props => {
  return (
    <SafeAreaView style={[styles.Container]}>
      <View style={[styles.View]}>
          <Text style={[styles.Wlcm]}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: '#FFF',
  },
  View:{
   marginTop:100,
   justifyContent:'center'

  },
  Wlcm:{
    fontSize:30,
    color: '#04555c',
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  }
});
