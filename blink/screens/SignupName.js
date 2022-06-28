import React from "react";
import { StyleSheet,  Pressable, TextInput, Text, View } from "react-native";
import { useFonts } from 'expo-font';



export default function SignupName() {

  const [loaded] = useFonts({
    'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
   
  });
  
  if (!loaded) {
    return null;
  }



const Input =(props) => {
  return(
    <View>
<TextInput style={props.style} 
      placeholder={props.placeholder}
      placeholderTextColor={props.textColor}
      />
   </View>
);

}

const Button = (props) => {
  return (
    <View>
     <Pressable style={props.style}>
        <Text  style={props.textstyle} >{props.title}</Text>
       </Pressable>
    </View>
  );
}

  return (
  <View style={styles.container}>
    
    <View style={styles.container1}>
    <View style={styles.inputcontainer}>
      
    <Text style={styles.h1text}>First name</Text>
      <Input 
      style={styles.input}
      placeholder="First name"
      textColor="#FFFFFF90"
      />
      </View>
      
      <View style={styles.inputcontainer}>
       <Text style={styles.h1text}>Last name</Text>
      <Input 
      style={styles.input}
      placeholder="Last name"
      textColor="#FFFFFF90"
      />
      </View>
      <Button style={[styles.button2, styles.white]} textstyle={styles.blacktext} title="Next"/>
      </View>
  </View>
);
  }


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    
    padding: 20,
    backgroundColor: '#0A0A0A',
  },
  input: {
    margin: 0,
   
    height: 50,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#353736",
    borderRadius: 5,
    color: "white",
    fontFamily: 'DMSans-Regu',
    marginTop: 0,
  },
  container1: {
   paddingTop: "20%",
   
  },
  button2: {
    backgroundColor: "",
      height: 50,
      width: '30%',
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      alignSelf: 'center',
      
  },
  blacktext: {
    color: "#000000",
    fontFamily: 'DMSans-Regu',
    fontSize: 18,
   },
  white: {
    backgroundColor: "#FFFFFF",
   },
  inputcontainer:{
   height: 90,
   justifyContent: "space-between",
   marginTop: 15,
  },
  h1text: {
    color: "white",
    fontFamily: 'DMSans-Black',
    fontSize: 22,
  },
});