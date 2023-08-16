import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import {Feather}from '@expo/vector-icons'

const App = () => {
  return (
    <View style={styles.container}>
    <Text>Weather Now</Text>
    <Feather name="sun" size={100}></Feather>
    <Text style={styles.temp}>6</Text> 
    <Text style={styles.feels}>Feels like 5</Text>
    <View style={styles.highLowWrapper}>
    <Text style={styles.highLow}>High: 8</Text>
    <Text style={styles.highLow}>Low: 6</Text>
    </View>
    <View style={styles.bodyWrapper}>
      <Text style={styles.description}>It's Sunny</Text>
      <Text style={styles.message}>It's a perfect sunny day</Text>
    </View>
  </View>
)
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:'orange',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  temp:{
    color:'black',
    fontSize:48,

  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    fontSize:20,
    color:'black'
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
  },
  description:{
    fontSize:40
  },
  message:{
    fontSize:30
  }
})
export default App