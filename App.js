import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style = {styles.Container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text 
        style = {{color: "white", paddingVertical: 10, paddingHorizontal: 140}}
      >
        English (India)  v
      </Text>
      <View>
        <Image 
        style = {styles.igLogo} 
        source = {require('./needs/iglogo.png')} />
        <TextInput style = {styles.igInput} placeholder= "Phone number, email or username" placeholderTextColor={"white"}/>
        <TextInput 
          style = {styles.igInput} 
          placeholder = "Password" 
          placeholderTextColor = {"white"}
          secureTextEntry = {true}        
        />
        <TouchableOpacity>
          <Text style ={styles.btn}>
            Log in
          </Text>
        </TouchableOpacity>
        <Text style = {styles.primaryText}>Forgot your login details?<Text style = {styles.secondaryText}>  Get help logging in.</Text>
        </Text>
        <View style = {{width: 370, flex: 0, flexDirection: "row", alignItems: "center", marginLeft: 13}}>
          <View style = {{borderBottomColor: "grey", borderWidth: 1, height: 1, width: "45%"}}></View>
          <Text style = {{color: "white", fontWeight:"600", fontSize: 14, padding: 8}}>OR</Text>
          <View style = {{borderBottomColor: "grey", borderWidth: 1, height: 1, width: "45%"}}></View>
        </View>
        <View style = {{flex: 0, flexDirection: "row", marginVertical: 10, alignItems: "center", justifyContent: "center"}}>
          <Image 
            style = {{height: 20, width: 20, marginHorizontal:5}}
            source={require('./needs/fb.png')}/>
          <Text style = {{color: "#31B5FF", fontWeight: "700"}}>Log In With Facebook</Text>
        </View>
      </View>
      <View>
        <View style = {{borderBottomColor: "grey", borderWidth: 1, height: 1, width: 500}}></View>
        <Text style = {styles.primaryText1} >Don't have an account?
          <Text>    </Text>
          <TouchableOpacity>
            <Text style = {styles.secondaryText1}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#000000a0",
    justifyContent: "space-between",
  },
  igLogo: {
    width: 400,
    height: 100,
  },
  primaryText: {
    color: "white",
    fontSize: 14  ,
    marginLeft:45,
    paddingTop: 10
  },
  secondaryText: {
    color: "white",
    fontSize: 14  ,
    paddingTop: 10,
    fontWeight: "bold",
  },
  primaryText1: {
    color: "white",
    fontSize: 18  ,
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 65,
  },
  secondaryText1: {
    color: "skyblue",
    textDecorationLine: "underline",
    fontSize: 17,
  },
  igInput:{
    backgroundColor: "#27272490",
    fontSize: 17,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: "white",
    width: 370,
  },
  btn: {
    color: "white",
    backgroundColor: "#31B5FF",
    fontSize: 17,
    width: 370,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default App;
