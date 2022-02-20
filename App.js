import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App(){
  const [tryState, setTryState] = useState(0);
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");
  return(
    <View style= {styles.screen}>
      <View>
        <Text style={styles.textt}>Enter Your Name</Text>
       <TextInput style={styles.input} onChangeText={setText} value={text}></TextInput>
       <TouchableOpacity style={styles.submit} onPress={() => setShowText("Welcome " + text + "! You may start counting now.")}>
         <Text>Display</Text>
       </TouchableOpacity>
       <Text style={styles.textt}>{showText}</Text>
      </View>
      <View style={styles.first}>
        <Text>{tryState}</Text>
      </View>
      <View style={styles.second}>
        <TouchableOpacity style={styles.button} onPress = {() => {if (tryState > 0) { setTryState(tryState - 1)} else { setTryState(tryState)}}}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {() => setTryState(tryState + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }

    const styles = StyleSheet.create({

      screen: {
        height: "100%",
        width: "100%",
     },

     textt: {
       textAlign: 'center',
       margin:30, 
     },

      first: {
        height: "5%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
     },

     second: {
        height: "40%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
      },

     button: {
      height: "30%",
      width: "30%",
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
      marginRight: 30,
    },
    
    input: {
      height: 40,
      width: "70%",
      margin: 12,
      marginLeft: 55,
      borderWidth: 1,
      padding: 10,
    },

    submit: {
      height: "18%",
      width: "30%",
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 12,
      marginLeft: 140,
    }
  })