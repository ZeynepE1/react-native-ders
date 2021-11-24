import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slideOne}>
        <Text>selam</Text>
        <Text>selam1</Text>
        <Text>selam🥸</Text>
      </View>

      <View style={styles.slideTwo}>
        <View style={[styles.box,styles.box1]}></View>
        <View style={[styles.box,styles.box2]}></View>
        <View style={[styles.box,styles.box1]}></View>
        <View style={[styles.box,styles.box3]}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    borderWidth:5,

  },
  slideOne:{
    backgroundColor: '#607D8B',
    flex:1,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTwo:{
    backgroundColor:"#FF5722",
    flex:2,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'stretch'
  },
  box:{
    width:60,
    
  },
  box1: {
    backgroundColor: '#795548'

  },
  box2:{
    backgroundColor:"#9E9E9E"
  },
  box3:{
    backgroundColor:"#3F51B5"
  }
});

export default App;
