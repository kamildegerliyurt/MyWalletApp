import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>

        <View style={styles.topContainer}>
          <FontAwesome name="user-circle" size={30} color="#7071E8" />
          <Text style={styles.nuvoText}>Nuvo Invest</Text>
          <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={35} color="#7071E8" />
        </View>


        <View style={styles.downContainer}>

            <View style={styles.savingsContainer}>

              <Text style={styles.savingsText}>Savings</Text>

              <View style={styles.sunnyContainer}>
                <Ionicons name="sunny" size={30} color="orange" />
                <Text style={styles.sunnyDayText}>{"  "}Sunny Day</Text>
                <Text style={styles.dolarText}>
                  {"                                         "}
                  $20.00
                </Text>
              </View>

              <View style={{borderWidth:0.2, width:"90%", height:1,}} />


              <View style={styles.plusContainer}>
                <AntDesign name="plussquare" size={30} color="dodgerblue" />
                <Text style={styles.sunnyDayText}>
                  {"  "}
                  Achieve Goals
                  {"                                         "}
                </Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>

            
            
            
            
            </View>

            <View style={styles.dailyContainer}>
              <Text style={styles.dailyText}>Daily</Text>

              <View style={styles.dailyTextContainer}>
                <Text style={{fontSize:16, color:"white",}}>
                  Nuvo invest is an amazing platform for investment. 
                  It invest. your money nicely for further success.   
                </Text>

                <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.getStartedButtonContainer]}>
                  <Text style={styles.getStartedText}>Get Started</Text>
                </Pressable>

              </View>

            </View>


            <View style={styles.rewardsContainer}>
              <Text style={styles.savingsText}>Rewards</Text>

              <View style={styles.sunnyContainer}>
              <FontAwesome5 name="gift" size={30} color="tomato" />
                <Text style={styles.sunnyDayText}>
                  {"  "}
                  Earn $100
                  {"                                                 "}
                  </Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>

              <View style={{borderWidth:0.2, width:"90%", height:1,}} />


              <View style={styles.plusContainer}>
                <FontAwesome5 name="coins" size={30} color="#FFB000" /> 
                <Text style={styles.sunnyDayText}>
                  {"  "}
                  Savings Bonus in 30 days
                  {"                     "}
                </Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>

            
            
            
            
            </View>

     
            <View style={styles.investmentsContainer}>
              <Text style={styles.investText}>Investments</Text>

              <View style={styles.textContainer}>
                <Text style={{fontSize:16, color:"white"}}>
                  Nuvo invest is an amazing platform for investment. 
                  It invest. your money nicely for further success.   
                </Text>

                <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.getStartedButtonContainer]}>
                  <Text style={styles.getStartedText}>Get Started</Text>
                </Pressable>

              </View>

            </View>


            
            


        </View>


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  topContainer: {
    flexDirection:"row",

    width:"95%",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:10,
    paddingHorizontal:5,
  },
  nuvoText: {
    fontSize:20,
    fontWeight:"bold",
  },
  downContainer: {
    flex:1,

    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:5,

    
  },
  savingsText: {
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"flex-start",
    marginBottom:15,
  },
  savingsContainer: {
    flex:1,
    
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  sunnyContainer:{
    flexDirection:"row",
    width:"90%",
    alignItems:"center",
    marginBottom:3,
   
  },
  sunnyDayText: {
    fontSize:16,
    fontWeight:"bold",
    
  },
  dolarText: {
    fontSize:16,
    fontWeight:"bold",
  },
  plusContainer: {
    flexDirection:"row",
 
    width:"90%",
    alignItems:"center",
    marginVertical:5,
  },
  investmentsContainer: {
    flex:2,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:20,
  },
  investText: {
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"flex-start",
    marginBottom:15,
  },
  textContainer: {
    width:"100%",
    borderRadius:10,
    backgroundColor:"#6F90ED",
    paddingHorizontal:5,
    paddingVertical:10,
  },
  getStartedButtonContainer: {
    borderWidth:2,
    borderColor:"white",
    width:"40%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    paddingVertical:8,
    borderRadius:20,
    marginVertical:5,
    marginTop:30,
  },
  getStartedText: {
    fontSize:16,
    fontWeight:"bold",
    color:"dodgerblue",
  },
  rewardsContainer: {
    flex:1,
 
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  dailyContainer: {
    flex:2,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:20,
 
  },
  dailyText: {
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"flex-start",
    marginBottom:15,
  },
  dailyTextContainer: {
    width:"100%",
    borderRadius:10,
    backgroundColor:"#FF9130",
    paddingHorizontal:5,
    paddingVertical:10,
  }



})