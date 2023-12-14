import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Home} from "../screens/"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name='Home' component={Home}/>

    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})