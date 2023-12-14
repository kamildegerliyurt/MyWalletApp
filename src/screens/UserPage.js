import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserPage = ({navigation}) => {

//---------------------------------
const handleSignUp = ()=> {
  navigation.navigate("SignUp")
}
//---------------------------------
const handleLogin = ()=> {
  navigation.navigate("LoginScreen")
}
//---------------------------------

  return (
    <SafeAreaView style={styles.userContainer}>

      <View style={styles.imageContainer}>
        <Image style={{width:375, height:400, resizeMode:"center"}}
               source={require("../../assets/userpage.jpg")}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.achieveText}>Achieve </Text>
        <Text style={styles.goalsText}>your goals</Text>
      </View>

      <View style={styles.effortContainer}>
        <Text style={styles.effortText}>effortlessly</Text>
      </View>

      <View style={styles.nuvoContainer}>
        <Text style={styles.nuvoText}>Nuvo Invest helps to manage your money so don't have to worry,</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.signUpContainer]}
                   onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>

        <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.loginContainer]}
                   onPress={handleLogin}>
          <Text style={styles.loginText}>Log into Nuvo</Text>
        </Pressable>
      </View>




    </SafeAreaView>
  )
}

export default UserPage

const styles = StyleSheet.create({
  userContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  imageContainer: {
    width:"100%",
        
  },
  textContainer: {
    flexDirection:"row",
    marginTop:5,
    width:"100%",
    paddingVertical:5,
    alignItems:"center",
    justifyContent:"center",
  },
  achieveText: {
    fontSize:35,
    fontWeight:"bold",
  },
  goalsText: {
    fontSize:35,
    fontWeight:"bold",
    color:"orange",
  },
  effortContainer: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
   effortText: {
    fontSize:30,
    fontWeight:"bold",
   },
   nuvoContainer:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:15,

   },
   nuvoText: {
    textAlign:"center",
    color:"gray",
   },

   buttonContainer: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
   },
   signUpContainer: {
    backgroundColor:"dodgerblue",
    width:"75%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
    borderRadius:30,

   },
   signUpText: {
    fontSize:20,
    color:"white"
   },
   loginContainer: {

    marginTop:5,
    width:"30%",
    alignItems:"center",
   },
   loginText: {
    fontSize:16,
    fontWeight:"bold",
    color:"dodgerblue",
   }
})