import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import {SignUpButton, Loading} from "../components/"
import { useDispatch, useSelector } from 'react-redux'
import {register} from "../redux/userSlice"


const SignUp = ({navigation}) => {

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [handleErrorMessage, setHandleErrorMessage] = useState(errorMessage)
const [isButtonDisable, setIsButtonDisable] = useState(false)

const dispatch = useDispatch();

const handleSignUpData = ()=> {
  dispatch(register({email, password}))
}

const {errorMessage, isLoading} = useSelector((state)=> state.user)

useEffect(() => {
  const handleConfirmPassword = () => {
    if (email.length === 0 || password.length === 0 || password !== confirmPassword) {
      setIsButtonDisable(true)
      setHandleErrorMessage('Password mismatch!')
    } else {
      setIsButtonDisable(false)
      setHandleErrorMessage('') 
    }
  };

  handleConfirmPassword();
}, [email, password, confirmPassword]);

if(isLoading){
  return <Loading />
}


  return (  
      <SafeAreaView style={styles.signUpContainer}>
      
       <View style={styles.topContainer}>

          <Image style={styles.imageContainer}
                 source={require("../../assets/othersignup.jpg")}/>


          <TextInput style={styles.emailContainer}
                    placeholder='Enter Your Email'
                    placeholderTextColor={"gray"}
                    onChangeText={(text)=> setEmail(text.toLowerCase())}
                    value={email}/>


          <TextInput style={styles.passwordContainer}
                    placeholder='Enter Your Password'
                    placeholderTextColor={"gray"}
                    onChangeText={setPassword}
                    value={password}/>

          <TextInput  style={styles.reEnterPassword}
                      placeholder='Re-Enter Your Password'
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}/>

          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{handleErrorMessage}</Text>
          </View>            


          <SignUpButton title="Sign Up"
                        handleSignUpButton={handleSignUpData}
                        isDisable={isButtonDisable}/>


          <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? 5 : 1}]},styles.loginButton]}
                    onPress={()=> navigation.navigate("LoginScreen")}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
                


      </View>
      

    </SafeAreaView>

  )
}

export default SignUp

const styles = StyleSheet.create({
  signUpContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    marginVertical:5,
    backgroundColor:"#fff"
   
  },
  topContainer: {
    flex:5,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,

   
  },
  emailContainer: {
    borderWidth:1.5,
    borderColor: "#007DFE",
    width: '95%',
    marginVertical: 5,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle:"italic",
    color:"#A9A9A9",
   
    
  },
  passwordContainer: {
    borderWidth:1.5,
    borderColor: "#007DFE",
    width: '95%',
    marginVertical: 5,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle:"italic",
    color:"#A9A9A9",
  },
  reEnterPassword: {
    borderWidth:1.5,
    borderColor: "#007DFE",
    width: '95%',
    marginVertical: 5,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle:"italic",
    color:"#A9A9A9",
  },
  errorContainer: {
    width:"95%",
    marginVertical:5,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    
  },
  errorText: {
    fontSize:18,
    fontWeight:"bold",
    color:"red",
  },
  loginButton: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
  },
  loginText: {
    fontSize:16,
    fontWeight:"bold",
    color:"gray",
    textDecorationLine:"underline",
    
  },
  
  imageContainer: {
    width:300, 
    height:300, 
    resizeMode:"center",
    marginBottom:10,
  }
  
})
