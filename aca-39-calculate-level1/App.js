import React from 'react';
import {  View, TouchableOpacity, StyleSheet, Text } from 'react-native';


export default class App extends React.Component {
   
  clickme = () =>{
    alert("This is arithnmetic operations")
  }

  render() {
    return (
     <View style={{backgroundColor:"aqua"}}>
       <TouchableOpacity style={styles.buttonStyle} onPress = {this.clickme}>
       <Text style={styles.textStyle}>ADD</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonStyle} onPress = {this.clickme}>
       <Text style={styles.textStyle}>SUBSTRACT</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonStyle} onPress = {this.clickme}>
       <Text style={styles.textStyle}>MULTIPLY</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.buttonStyle} onPress = {this.clickme}>
       <Text style={styles.textStyle}>DIVIDE</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor: "yellow",
    marginHorizontal: 90,
    marginTop:40,
    padding: 20,
    borderRadius:15,
    elevation:7,
    shadowOffset: {height:8, width:8},
    shadowOpacity:0.3
  },
  textStyle:{
    textAlign:"center",
    fontSize:"20px",
    fontWeight:"bold"
  }
})