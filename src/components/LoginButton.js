import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginButton = (props) => {

const button = props.buttonName
const buttonLogin = props.handleButton
const disable = props?.isDisable

  return (
    <Pressable 
    style={({pressed})=> [{backgroundColor: props.isDisable ? "#0061D1" : (pressed ? "#0061D1" : "#9C7AF1")},styles.buttonContainer]}
    onPress={buttonLogin}
    disabled={disable}>
        <Text style={styles.buttonTextContainer}>{button}</Text>
    </Pressable>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    buttonContainer: {
        width:"95%",
        marginVertical:5,
        marginBottom:20,
        paddingVertical:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"white",
    },
    buttonTextContainer: {
        fontSize:18,
        fontWeight:"bold",
        color:"white",

    }
})