import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Title } from 'react-native-paper'
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerList = [
    {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
    {icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile'},
    {icon: 'account-group', label: 'User', navigateTo: 'User'},
    {icon: 'bookshelf', label: 'Library', navigateTo: ''},
    {icon: 'bookshelf', label: 'Splash', navigateTo: 'Splash'},
    {icon: 'login-variant', label: 'Login', navigateTo: 'Login'},
    {icon: 'login-variant', label: 'Register', navigateTo: 'Register'},
]

const DrawerLayout = ({icon, label, navigateTo}) => {
    const navigation = useNavigation()

    return(
        <DrawerItem
            icon = {({color, size}) => <Icon name={icon} color={color} size={size}/>}
            label = {label}
            onPress={() => {
                navigation.navigate(navigateTo)
            }}
        />
    )
}

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout
                key = {i}
                icon = {el.icon}
                label={el.label}
                navigateTo={el.navigateTo}
            />
        )
    })
}
const DrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style = {styles.drawerContent}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style = {styles.userInfoSection}>
                    <View style = {{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image
                            source = {{
                                uri: 'https://cdn-icons-png.freepik.com/256/847/847969.png?ga=GA1.1.1665601381.1712936655&semt=ais_hybrid'
                            }}
                            size={50}
                            style = {{marginTop: 5}}
                        />
                        <View style = {{marginLeft: 10, flexDirection: 'column'}}>
                            <Title style = {styles.title}>ibratimoth</Title>
                            <Text style = {styles.caption} numberOfLines={1}>
                                ibratimoth@gmail.com
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.drawerSection}>
                <DrawerItems/>
            </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color, size}) => (
                    <Icon name = 'exit-to-app' color = {color} size = {size}/>
                )}
                label = 'Sign Out'
            />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14
    },
    drawerSection: {
        marginTop: 25,
        paddingLeft: 15,
        borderBottomColor: '#e3e3de',
        borderBottomWidth: 1
    },
    bottomDrawerSection: {
        borderTopColor: '#e3e3de',
        borderTopWidth: 1,
        borderBottomWidth: 0,
    }
})
export default DrawerContent