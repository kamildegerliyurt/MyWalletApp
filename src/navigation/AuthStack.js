import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {WelcomePage, UserPage, SignUp, LoginScreen} from "../screens/"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProductList' 
                     screenOptions={{headerShown: false}}>

      <Stack.Screen name='WelcomePage' component={WelcomePage}/>
      <Stack.Screen name='UserPage' component={UserPage}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})