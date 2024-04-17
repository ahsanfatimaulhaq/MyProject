import { View, Text, SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import Headerbar from './Headerbar'
import Iconhandler from './Iconhandler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Payment = () => {
    const navigation=useNavigation();
    const categories = [
        "Wallet","Google Pay","Apple Pay","Amazon Pay"
    ];


    const [paymentactive,setactive]=useState(null)
    const [active,setactivepay]=useState(null)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#0C0F14" }}>
    <View style={{flexDirection:"row",marginTop:40,marginLeft:25,marginRight:20}}>
    <TouchableOpacity style={{borderRadius:5,backgroundColor:"#2E333E",padding:6,}} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#4D4F52" /> 

      </TouchableOpacity>
      <Text style={{color:"white",fontSize:25,marginLeft:130,fontWeight:"700"}}>Payment</Text>

    </View>
    

    <View style={{justifyContent:"center",alignItems:"center",marginTop:40}}>
        <TouchableOpacity   onPress={()=>setactivepay("Credit Card")}>
       
        <LinearGradient
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        colors={["#0C0F14","#252A32"]}
        style={[
            {
                borderRadius: 30,
                    paddingVertical: 140,
                    width: 430,    
                    marginBottom:20     
                     
            },
            active == "Credit Card" &&{
                borderColor:"#D17842",
                        borderWidth:2,
                backgroundColor:"#0C0F14",
                borderRadius:20

            },
            active != "Credit Card" &&{
                borderColor:"#0C0F14",
                        borderWidth:2,
                backgroundColor:"#0C0F14",
                borderRadius:20

            }
        ]}      
        > 
        <View  >
            <Text style={{color:"white",fontSize:20,fontWeight:"700",marginTop:-130,marginLeft:10,}}>Credit Card</Text>
            <View style={{alignItems:"center",marginTop:10}}>
            <Image style={{height:220,width:380, position: "absolute"}} source={require('../assets/credit244324.jpg')  }/>
            </View>
            
        </View>  
        </LinearGradient>
        </TouchableOpacity>
        {
            categories.map((item,index)=>(
                <TouchableOpacity  onPress={()=>setactive(item)}
                key={index}
                style={[
                    {
                        borderRadius:30,marginBottom:20,overflow:"hidden",width:"90%"
                    },
                    paymentactive==item && {
                        borderColor:"#D17842",
                        borderWidth:2,
                backgroundColor:"#0C0F14",
                

                    }
                ]}>
                    <LinearGradient
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        colors={["#0C0F14","#252A32"]}
        
        >
        <View >
            <View style={{flexDirection:"row",paddingVertical:12}}>
            <Image style={{height:30,width:30,marginLeft:20 }} source={require('../assets/credit244324.jpg')  }/>
            <Text style={{color:"white",fontSize:20,fontWeight:"700",marginLeft:20}}>{item}</Text>
            </View>
            
        </View>
        
        </LinearGradient>


                </TouchableOpacity>
            ))
        }

        
        
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30,margin:30}}>
          <View style={{alignItems:"center",justifyContent:"center"}} >
          <Text style={{color:"white",fontSize:15}}>Price
          </Text>
          <View style={{flexDirection:"row",}}>
          <Text style={{color:"#D17842",fontSize:20}}>$</Text>
          <Text style={{color:"white",fontSize:20,marginLeft:4}}>100.0</Text>

          </View>
          
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Payment")}} style={{borderRadius:15, backgroundColor:"#D17842",padding: 15,  width:"50%",alignItems:'center' }}>
           <Text style={{fontSize:20, fontWeight:'bold', color: "#fff",}}>Pay</Text>
         </TouchableOpacity>

          </View>
          
				
    </SafeAreaView>
  )
}

export default Payment