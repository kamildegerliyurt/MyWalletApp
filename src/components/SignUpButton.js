import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const SignUpButton = (props) => {

const title = props.title
const handleSignUp = props.handleSignUpButton
const isDisable = props.isDisable

  return (
    <Pressable 
    style={({pressed})=> [{backgroundColor: props.isDisable ? "#0061D1" : (pressed ? "gray" : "#9C7AF1")},styles.otherButtonContainer]}
    onPress={handleSignUp}
    disabled={isDisable}>
        <Text style={styles.signUpText}>{title}</Text>
    </Pressable>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    otherButtonContainer: {
      borderWidth: 1,
      borderColor:"white",
      width:"95%",
      alignItems:"center",
      justifyContent:"center", 
      paddingVertical:15,
      borderRadius:30,
      marginTop:10,
    },
    signUpText: {
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        
    }
})