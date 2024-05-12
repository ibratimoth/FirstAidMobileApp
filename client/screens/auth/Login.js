import { View, Text } from "react-native";
import React from "react";
import Background from "../../resources/Background";
import Field from "./Field";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Login = ({props}) => {

  const navigation = useNavigation()
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
              placeholder="Email or Username"
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
              marginVertical: 15
            }}
          >
            <FontAwesome
              name="lock"
              color={"#345ea3"}
              style={{ marginRight: 10, fontSize: 24 }}
            />
          <Field placeholder="Password" secureTextEntry={true} />
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
