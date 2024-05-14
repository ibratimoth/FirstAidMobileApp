import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Home = () => {

  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem('token');

  //   console.log(token)
  // },[])
  return (
    <View style = {styles.container}>
      <Text style = {styles.headingStyle}>React Navigation</Text>
      <Text style = {styles.textStyle}>React Navigation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
})
export default Home