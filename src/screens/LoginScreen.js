import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LoginButton} from "../components/"
import {login, autoLogin} from "../redux/userSlice/"



const LoginScreen = ({navigation}) => {

const [loginEmail, setLoginEmail]= useState("")
const [loginPassword, setLoginPassword]= useState("")
const [handleErrorMessage, setHandleErrorMessage]= useState("")

const dispatch = useDispatch();
const {errorMessage} = useSelector((state)=> state.user)

useEffect(() => {

  const trueEmail = 'Firebase: Error (auth/invalid-email)'
    if(trueEmail == errorMessage){
    setHandleErrorMessage('Invalid Email or Password! Try Again')
  }

  setHandleErrorMessage(errorMessage)

}, [errorMessage])

const handleOnPress = ()=> {
  dispatch(login({email, password}))
}

useEffect(() => {
  dispatch(autoLogin())
}, [])




  return (
     <SafeAreaView style={styles.loginContainer}>

        <View style={styles.firstContainer}>

        <Image style={{width:300, height:300, resizeMode:"center"}}
               source={require("../../assets/loginscreen.jpg")}/>

          <TextInput style={styles.loginEmailContainer}
                     placeholder='Email'
                     placeholderTextColor={"gray"}
                     onChangeText={(text)=> setLoginEmail(text.toLowerCase())}
                     value={loginEmail}/>

          <TextInput style={styles.loginPasswordContainer}
                     placeholder='Password'
                     placeholderTextColor={"gray"}
                     onChangeText={setLoginPassword}
                     value={loginPassword}/>

          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{handleErrorMessage}</Text>
          </View>

          <LoginButton buttonName="Login"
                       handleButton={handleOnPress}/>

          <Pressable style={({pressed})=> [{transform: [{scaleX: pressed ? 0.90: 1}]},styles.goSignUpContainer]}
                     onPress={()=> navigation.navigate("SignUp")}>
            <Text style={styles.goToSignUpText}>Sign Up {">>"}</Text>
          </Pressable>


        </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  loginContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  firstContainer: {
    flex:5,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:5,
  },
   loginEmailContainer: {
    borderWidth:1.5,
    borderColor: "#9C7AF1",
    width:"95%",
    marginVertical:5,
    paddingVertical:10,
    textAlign:"center",
    borderRadius:10,
    fontSize: 16,
    fontWeight: 'bold',
   },
   loginPasswordContainer: {
    borderWidth:1.5,
    borderColor: "#9C7AF1",
    width:"95%",
    marginVertical:5,
    paddingVertical:10,
    textAlign:"center",
    borderRadius:10,
    fontSize: 16,
    fontWeight: 'bold',
   },
   errorContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:5,
    borderRadius:10,
   },
   errorText: {
    fontSize:16,
    fontWeight:"bold",
    color:"red",
   },
   goSignUpContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:5,
   },
   goToSignUpText: {
    fontSize:16,
    fontWeight:"bold",
    color:"#9C7AF1",
   },
  
})
