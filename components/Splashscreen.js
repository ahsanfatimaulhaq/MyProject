import { View, Text,Image, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import React from 'react'

const Splashscreen = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden={true}/>
      <ImageBackground style={{flex:1,opacity:0.9 }} source={require('../assets/coffeesa.jpg')  }>
      <View style={{flex:1,justifyContent:"flex-end",marginBottom:45, alignItems:"center"}} > 
     <Text style={{fontSize:45, fontWeight:'bold', color: "white",lineHeight: 45,}}>Coffee so good,</Text>
     <Text style={{fontSize:45, fontWeight:'bold', color: "white",lineHeight: 42}}>your taste buds</Text>
     <Text style={{fontSize:45, fontWeight:'bold', color: "white",marginBottom:10,lineHeight: 45}}>will love it.</Text>
     <Text style={{fontSize:20, fontWeight:'bold', color: "white",marginTop: 10, }}>The best grain, the finest roast, the</Text>
     <Text style={{fontSize:20, fontWeight:'800', color: "white",marginBottom: 20, }}>powerful flavor.</Text>
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Home")}} style={{borderRadius:10, backgroundColor:"#ada426",padding: 15,  width:"80%",alignItems:'center' }}>
           <Text style={{fontSize:20, fontWeight:'bold', color: "#fff",}}>Get Started</Text>
         </TouchableOpacity>
   </View>
        
      </ImageBackground>
    </SafeAreaView>
    
  )
}

export default Splashscreen