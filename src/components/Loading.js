import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="purple"/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})