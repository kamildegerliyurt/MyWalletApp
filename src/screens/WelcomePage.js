import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const WelcomePage = ({navigation}) => {



const handleGoToUserPage = () => {
  navigation.navigate("UserPage") 
}



  return (
    <View style={styles.welcomeContainer}>
      
      <View style={styles.textContainer}>
        <Text style={styles.safeText}>Safe way to</Text>
        <Text style={styles.manageText}>manage</Text>
        <Text style={styles.moneyText}>money</Text>
      </View>
    
      <View style={styles.imageContainer}>
        <Image style={{width:375, height:200, resizeMode:"cover"}}
               source={require("../../assets/wallet.jpg")}/>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? 5 : 1}]}]}
                   onPress={handleGoToUserPage}>
            <Text style={styles.swipeText}>Swipe To Next {">>"}</Text>
        </Pressable>
      </View>


    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    welcomeContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    textContainer: { 
        width:"85%",    
       
    },
    safeText: {
        fontSize:50,
        fontWeight:"bold",
        
    },
    manageText: {
        fontSize:50,
        fontWeight:"bold",
    },
    moneyText: {
        fontSize:50,
        fontWeight:"bold",
        color:"orange"
    },
    imageContainer: {
        marginTop:30,
        marginBottom:10,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10,
    },
    buttonContainer: {

        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10,
        marginTop:30,
    },
    swipeText: {
        fontSize:16,
        fontWeight:"bold",
        color:"gray",
        
        
    }
})


