import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

import { Feather } from '@expo/vector-icons';


const Searchbar = () => {
  return (
    <View style={{ 
    marginTop:20
    }}>
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 60,
         
        }}
      >
        <TextInput
          style={{
            width: "80%",
            color:"white",
            fontSize:20,
            padding: 10,
            paddingLeft: 10,
            
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor="#4D4F52"
        />
        <Feather name="search" size={30} color="#4D4F52" style={{
            position: "absolute",
            left: 10,
          }} />
        
      </BlurView>
    </View>
  );
};
export default Searchbar;