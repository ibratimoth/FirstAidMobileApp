import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Field = (props) => {
  return (
    <TextInput {...props} style={{borderRadius: 100, color: '#345ea3', paddingHorizontal: 10, width: '80%', marginVertical: 10}}
    placeholderTextColor='#345ea3'
    >

    </TextInput>
  )
}

export default Field