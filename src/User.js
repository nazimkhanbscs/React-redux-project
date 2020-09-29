import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const User = (props)=>{
    const {data}= props;
    return(
     <View style={styles.container}>
      <Text style={styles.h1text}>User Component</Text>
      <Text>{data.name}</Text>
      <StatusBar style="auto" />
    </View>
    );
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:24, 
    marginTop:10


  }
});

export default User;