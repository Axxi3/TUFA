import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Data from '../constant/Data'
import RenderItem from '../components/RenderItem'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const OnboardingPage = () => {
  const navigation =useNavigation()
    const [currentIndex,setcurrentIndex]=useState(0)
    const handlerPress=()=>{
        if(currentIndex=== Data.length-1){
            console.log( "Finish")
            navigation.navigate("Login")
            return
        }
        setcurrentIndex(prev=>prev+1)
    }

    const containerStyle = {
      ...styles.container,
      backgroundColor: currentIndex === 0 ? "#ffffff" : currentIndex === 1 ? "#eda680" : "#ffffff"
  }
  return (
    <View style={containerStyle}>
      <View>
        {Data.map((item,index)=>{
            return(
                currentIndex == index && <RenderItem item={item} key={index}/>
            )
        })}
      </View>
      
      <CustomButton handlerPress={handlerPress} text={currentIndex === Data.length - 1 ? "Let's get started" : undefined} />

    </View>
  )
}

export default OnboardingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",   
        gap:10,
        backgroundColor:"#eda680"
    }
})