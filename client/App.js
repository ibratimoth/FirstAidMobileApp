import "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation, DrawerActions  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./screens/Home";
import ProfileScreen from "./screens/ProfileScreen";
import DrawerStack from "./screens/DrawerStack";
import  Icon  from "react-native-vector-icons/Entypo";
import DrawerContent from "./screens/DrawerContent";
import UserScreen from "./screens/UserScreen";
import SplashScreenView from "./SplashScreenView";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      // initialRouteName="Profile"
      screenOptions={{
        statusBarColor: "#eb6434",
        headerStyle: {
          backgroundColor: "#eb6434",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft: () => {
          return(
            <Icon
            name="menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            size={30}
            color='#fff'
            />
          )
        }
      }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Splash" component={SplashScreenView} />
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Register" component={Register} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props}/>}
    screenOptions={{
      headerShown : false
    }}>
        <Drawer.Screen name="Homes" component={StackNav} />
      </Drawer.Navigator>
  )
}
const App = () => {
 
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;

 // "splash": {
    //   "image": "./assets/mysplash.png",
    //   "resizeMode": "contain",
    //   "backgroundColor": "#eb6434"
    // },