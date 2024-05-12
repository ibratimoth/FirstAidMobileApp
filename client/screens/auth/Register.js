import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "../../resources/Background";
import Field from "./Field";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [nameVerify, setNameVerify] = useState(false)
  const [email, setEmail] = useState('')
  const [emailVerify, setEmailVerify] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState(false)
  const [contact, setContact] = useState('')
  const [contactVerify, setContactVerify] = useState(false)
  const [city, setCity] = useState('')
  const [cityVerify, setCityVerify] = useState(false)
  const [sport, setSport] = useState('')
  const [sportVerify, setSportVerify] = useState(false)

  function handleName(e){
    const nameVar = e.nativeEvent.text
    setName(nameVar);
    if(nameVar.length > 1){
      setNameVerify(true)
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <View style={{backgroundColor: '#eb6434'}}> 
      <View style = {{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 5,
            marginTop: 40
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 10
          }}
        >
          Create your account
        </Text>
        <View style= {{backgroundColor: 'white', height: 730, width: 400, borderTopLeftRadius: 130, paddingTop: 60, alignItems: 'center'}}>
        {/* <ScrollView horizontal = {false} showsHorizontalScrollIndicator = {false}> */}
        <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
            }}
          >
            <FontAwesome
              name="user"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
            <Field
              placeholder="Username"
              keyboardType={"email-address"}
              onChange= {(e) => handleName(e)}
            />
          </View>
        <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
              marginVertical: 15
            }}
          >
            <MaterialIcons
              name="email"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
            <Field
              placeholder="Email"
              keyboardType={"email-address"}
            />
          </View>
          <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
            }}
          >
            <FontAwesome
              name="lock"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder = "Password" secureTextEntry = {true}/>
          </View>
          <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
              marginVertical: 15
            }}
          >
            <FontAwesome
              name="phone"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder = "Contact" keyboardType ={'numeric'}/>
          </View>
          <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
            }}
          >
            <MaterialIcons
              name="place"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder = "City" />
          </View>
          <View
            style={{
              width: "85%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'center',
              backgroundColor: "#e8e1e6",
              borderRadius: 100,
              marginVertical: 15
            }}
          >
            <MaterialIcons
              name="sports"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder = "Favourite sport" />
          </View>
          
          <TouchableOpacity style={{backgroundColor: '#eb6434', borderRadius: 100, alignItems: 'center', width: 300, paddingVertical: 5, marginTop: 10, marginBottom: 10}}>
            <Text style = {{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{borderColor: '#eb6434', borderWidth: 1, borderRadius: 100, alignItems: 'center', width: 300, paddingVertical: 5}}>
            <Text style = {{color: '#eb6434', fontSize: 25, fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity> */}
          <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{ color: '#eb6434',fontSize: 16, fontWeight: 'bold'}}>Already have account ? </Text>
            <TouchableOpacity 
              onPress={() => {navigation.navigate("Login")}}
            >
              <Text style={{color: '#eb6434', fontWeight: 'bold', fontSize: 16}}>Login</Text>
            </TouchableOpacity>
          </View>
        {/* </ScrollView> */}
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Register