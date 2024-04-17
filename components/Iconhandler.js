import { View, Text,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Iconhandler = () => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:40,marginLeft:10,marginRight:10,}}>
      <TouchableOpacity style={{borderRadius:5,backgroundColor:"#0C0F14",padding:6}} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#4D4F52" /> 

      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius:5,backgroundColor:"#0C0F14",padding:6}} onPress={() => navigation.navigate("Favourite")}>
      <FontAwesome name={"heart-o"} size={28} color="#4D4F52" />

      </TouchableOpacity>

				
     
    </View>
  )
}

export default Iconhandler