import { View, Text, Alert } from "react-native";
import React, {useState} from "react";
import Background from "../../resources/Background";
import Field from "./Field";
import { ScrollView, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({props}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  function handleSubmit(){
    
    const userData = {
       email, password
    }
      axios.post("http://192.168.211.231:8080/api/v1/auth/login", userData)
      .then(res => {console.log(res.data)
        if(res.data.status == 'ok'){
          Alert.alert('Login Successfull')
          AsyncStorage.setItem('token', res.data.data)
          AsyncStorage.setItem("isLoggedIn", JSON.stringify(true))
          navigation.navigate("Home")
        }else {
          Alert.alert(JSON.stringify(res.data))
        }
      })
      .catch(e => console.log(e))
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <View style={{ backgroundColor: "#eb6434" }}>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 40,
            marginTop: 40,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 730,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#eb6434", fontWeight: "bold" }}>
            You are Welcome
          </Text>
          <Text
            style={{
              color: "#eb6434",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
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
              placeholder="Your Email"
              keyboardType={"email-address"}
              value={email}
              onChange = {e => setEmail(e.nativeEvent.text)}
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
            <FontAwesome
              name="lock"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder="Your Password" secureTextEntry={true} 
            value={password}
            onChange = {e => setPassword(e.nativeEvent.text)}
          />
          </View>
          <View style={{ alignItems: "center", width: "78%" }}>
            <Text
              style={{ color: "#345ea3", fontWeight: "bold", fontSize: 16 }}
            >
              Fogort Password
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#eb6434",
              borderRadius: 100,
              alignItems: "center",
              width: 300,
              paddingVertical: 5,
              marginTop: 50,
              marginBottom: 40,
            }}
            onPress={() => handleSubmit()}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{borderColor: '#eb6434', borderWidth: 1, borderRadius: 100, alignItems: 'center', width: 300, paddingVertical: 5}}>
            <Text style = {{color: '#eb6434', fontSize: 25, fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity> */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "#eb6434", fontSize: 16, fontWeight: "bold" }}
            >
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
            onPress={() => {navigation.navigate("Register")}}
            >
              <Text
                style={{ color: "#eb6434", fontWeight: "bold", fontSize: 16 }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Login;
