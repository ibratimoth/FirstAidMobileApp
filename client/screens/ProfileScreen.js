import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const ProfileScreen = () => {
  const [userData, setUserData] = useState('')
  async function getData(){
    const token = await AsyncStorage.getItem('token') 
    console.log(token);
    axios.post("http://192.168.211.231:8080/api/v1/auth/getsingleUser", {token: token})
    .then(res => {console.log(res.data);
    setUserData(res.data.data)})
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <View style = {styles.container}>
      <Text style = {styles.headingStyle}>{userData.name}</Text>
      <Text style = {styles.textStyle}>{userData.email}</Text>
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
export default ProfileScreen