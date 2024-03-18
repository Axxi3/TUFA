import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";
import LottieView from "lottie-react-native";
import football from "../constant/football.json"

const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
    
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
   
  };    
  useEffect(()=>{
   
  })
  const handleSubmit=()=>{
    console.log(username, password);
    
  }
  
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 150, paddingHorizontal: 20}}
      >
<Image source={require("../constant/soccer.png")} style={{height:50,width:50}}/>


        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          Let's get Started
        </Text>
        <Text style={{ color: "grey", fontSize: 20, marginVertical: 10 }}>
          Enter your Details to continue
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input 
          placeholder="Enter your email"
          label={"Email"} 
          onChangeText={handleUsernameChange}
          iconName={"email-outline"} /> 

          <Input 
          placeholder="Enter your password"
          label={"Password"} 
          onChangeText={handlePasswordChange}
          iconName={"email-outline"}
          secureTextEntry />
         
         <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              handleSubmit()
            }}>
            <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor:"#263238",  
    borderRadius:9,
    paddingVertical:15,
    marginVertical:45,
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  }
});
