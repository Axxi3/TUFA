import { Button, Image, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native'
import React from 'react'

const CustomButton = ({text,handlerPress}) => { 

    const {width:WIDTH}=useWindowDimensions()

    

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
        <View style={styles.container}>
            {
                text === undefined ?  <Image source={require("../Images/right.png")} style={[{width:70,height:70}]}/>: <Text style={styles.text}>{text}</Text>
            }
           
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        zIndex:1,
        bottom:100,   
      
        width:"auto",
        justifyContent:"center",
        alignItems:"center",
        height:120,
        
        borderRadius:100
    },text: {
        color: 'white', 
        padding:20, 
        paddingHorizontal:30,
        width:"300",
        borderRadius:30,
         backgroundColor:"#176841",
        fontSize: 16,
        fontWeight: 'bold',
      },
})