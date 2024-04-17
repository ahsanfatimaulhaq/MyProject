// components/Headerbar.js
import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Headerbar = () => {
  return (
    
    <View style={{  justifyContent: "space-between", }}>
      <Text style={{ color: "white", fontSize: 35,fontWeight:'800' , lineHeight:35,marginTop:40,marginLeft:10}}>
       Find the best
      </Text>
      <Text style={{ color: "white", fontSize: 35,fontWeight:'800' ,marginLeft:10,lineHeight:35}}>
       coffee for you
      </Text>
    </View>
  );
};

export default Headerbar;