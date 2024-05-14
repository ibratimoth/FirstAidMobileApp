import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Background from "../../resources/Background";
import Field from "./Field";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

const Register = ({props}) => {
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
  const [showPassword, setShowPassword] = useState('')


  function handleSubmit(){
    
    const userData = {
      name: name, email, password, city, contact, sport
    }
    if(nameVerify && emailVerify && passwordVerify && contactVerify && cityVerify && sportVerify){
      axios.post("http://192.168.211.231:8080/api/v1/auth/register", userData)
      .then(res => {console.log(res.data)
        if(res.data.status == 'ok'){
          Alert.alert('Registered Successfull')
          navigation.navigate("Login")
        }else {
          Alert.alert(JSON.stringify(res.data))
        }
      })
      .catch(e => console.log(e))
    }else{
      Alert.alert('Fill mandatory details')
    }
  }
  function handleName(e){
    const nameVar = e.nativeEvent.text
    setName(nameVar);
    setNameVerify(false)
    if(nameVar.length > 1){
      setNameVerify(true)
    }
  }

  function handleEmail(e){
    const emailVar = e.nativeEvent.text
    setEmail(emailVar);
    setEmailVerify(false)
    if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)){
      setEmail(emailVar);
      setEmailVerify(true)
    }
  }

  function handleContact(e){
    const contactVar = e.nativeEvent.text
    setContact(contactVar); 
    setContactVerify(false)
    if(/[0-9]{1}[0-9]{9}/.test(contactVar)){
      setContact(contactVar);
      setContactVerify(true)
    }
  }

  function handlePassword(e){
    const passwordVar = e.nativeEvent.text
    setPassword(passwordVar);
    setPasswordVerify(false)
    if(passwordVar.length > 1){
      setPasswordVerify(true)
    }
  }

  function handleCity(e){
    const cityVar = e.nativeEvent.text
    setCity(cityVar);
    setCityVerify(false)
    if(cityVar.length > 1){
      setCityVerify(true)
    }
  }

  function handleSport(e){
    const sportVar = e.nativeEvent.text
    setSport(sportVar);
    setSportVerify(false)
    if(sportVar.length > 5){
      setSportVerify(true)
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
              value={name}
              setValue= {setName}
            />
            { name.length < 1 ? null : nameVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text style={{
              marginLeft: 1,
              color: '#800c04'
            }}>
              Username should be more than one character
            </Text>
          )}
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
              onChange= {(e) => handleEmail(e)}
              value={email}
        setValue={setEmail}
            />
            { email.length < 1 ? null : emailVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{
              marginLeft: 10,
              color: '#800c04'
            }}>
              Enter proper email address
            </Text>
          )}
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
          <Field placeholder = "Password" value={password} setValue={setPassword} secureTextEntry={true}
          onChange= {(e) => handlePassword(e)}
          />
          {/* <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name = "eye-off"
              style={{marginRight: -10}}
              color={'#345ea3'}
              size={23}
            />
          </TouchableOpacity> */}
          { password.length < 1 ? null : passwordVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={{
              marginLeft: 1,
              color: '#800c04'
            }}>
              Password should contain uppercase, lowercase and characters and should be more than 5
            </Text>
          )}
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
          <Field placeholder = "Contact" keyboardType ={'numeric'}
          onChange= {(e) => handleContact(e)} 
          maxLength = {10}
          value={contact}
        setValue={setContact}
          />
            { contact.length <= 1 ? null : contactVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {contact.length <= 1 ? null : contactVerify ? null : (
            <Text style={{
              marginLeft: 10,
              color: '#800c04'
            }}>
              Contact should start with 0 and not less or more than 10 numbers
            </Text>
          )}
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
          <Field placeholder = "City"
          onChange= {(e) => handleCity(e)} 
          value={city}
          setValue={setCity}
          />
          { city.length <= 1 ? null : cityVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {city.length <= 1 ? null : cityVerify ? null : (
            <Text style={{
              marginLeft: 10,
              color: '#800c04'
            }}>
              City name should be less than 1 character
            </Text>
          )}
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
          <Field placeholder = "Favourite sport" 
          value={sport}
          setValue={setSport}
          onChange= {(e) => handleSport(e)} 
          />
           { sport.length < 5 ? null : sportVerify ? <Feather name="check-circle" color="#345ea3" style={{fontSize: 20}}/> : <MaterialIcons name="error-outline" color='#800c04' style={{fontSize: 20}}/>}
          </View>
          {sport.length < 5 ? null : sportVerify ? null : (
            <Text style={{
              marginLeft: 10,
              color: '#800c04'
            }}>
              sport name should be less than 5 character
            </Text>
          )}
          
          <TouchableOpacity style={{backgroundColor: '#eb6434', borderRadius: 100, alignItems: 'center', width: 300, paddingVertical: 5, marginTop: 10, marginBottom: 10}}
            onPress={() => handleSubmit()}
          >
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