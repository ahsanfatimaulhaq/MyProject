import { View, Text, StyleSheet,Pressable,Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Iconhandler from './Iconhandler';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ViewMoreText from 'react-native-view-more-text';

const CardDetail = ({route}) => {
    const {item}=route.params;
    const navigation = useNavigation()
    const Sizes=["S","M","L"]
    const [active,setactive]=useState(null)
;
;
  return (
    <ScrollView style={{backgroundColor:"black"}}>
      <SafeAreaView >
      <ImageBackground source={item.image}  style={{height:500}}>
        <Iconhandler/>
        <View style={{
                borderTopRightRadius:30,
                borderTopLeftRadius:30,
                overflow: "hidden",
               
                marginTop:250,
               

              }}>
          <BlurView
                intensity={90}
                tint="dark"
                style={{
                  padding: 25,
                  flexDirection: "row",
                  justifyContent: "space-between",

                
                  height:200
                }}
              >
                <View >
                  <Text style={{fontSize:25,fontWeight:"700",color:"white"}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize:16,fontWeight:"300",color:"white"}}>
                    {item.included}
                  </Text >
                  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30}}>
                  <AntDesign name="star" size={24} color="#D17842"
             
            />
            <Text
              style={{
                fontSize:18,
                fontWeight:"800",
                color:"white",
                marginRight:10,
                marginLeft:5
               
                
              }}
            >
              {item.rating}
            </Text>
            <Text
               style={{fontSize:14,color:"white", marginTop:2}}
            >
              (
            </Text>
            <Text
              style={{fontSize:14,color:"white", marginTop:2}}
            >
              {item.ratingscount}
            </Text>
            <Text
               style={{fontSize:14,color:"white",marginRight:40, marginTop:2}}
            >
              )
            </Text>

                  </View>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                  <View style={{justifyContent:"center",alignItems:"center", borderRadius:8,backgroundColor:"#0C0F14",padding:5,width:60,height:60,marginRight:30}}>
                  <FontAwesome name="coffee" size={24} color="#D17842" />
                  <Text
                        style={{
                          color: "#b5b5b5",
                          fontSize: 14,
                          fontWeight:"800"
                        }}
                      >
                        Coffee
                      </Text>

                  </View>
                  <View style={{justifyContent:"center",alignItems:"center", borderRadius:8,backgroundColor:"#0C0F14",padding:5,width:60,height:60}}>
                  <Ionicons name="water-sharp" size={24} color="#D17842" /> 
                  <Text
                        style={{
                          color: "#b5b5b5",
                          fontSize: 14,
                          fontWeight:"800"
                        }}
                      >
                        Milk
                      </Text>

                  </View>

                </View>
                <View
                    style={{
                      backgroundColor: "#0C0F14",
                      padding: 15,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom:25
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                      }}
                    >
                      Medium roasted
                    </Text>
                  </View>

                </View>

          </BlurView>
          
        </View>
      
      </ImageBackground>
      <View style={styles.bottomView}>
        
      <View>
      <Text style={{color:"white",fontSize:20,fontWeight:"500",marginBottom:18}}>Descirption</Text>
      <ViewMoreText 
      numberOfLines={3}
     
      >
      <Text style={{color:"white",fontSize:16,fontWeight:"500"}}>{item.description}</Text>

      </ViewMoreText>
					
          <View style={{marginVertical:25}}>
            <Text style={{fontSize:20,color:"white",fontWeight:"500",marginBottom:10}}>
              Size
            </Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            
            {Sizes.map((item,index)=>( 
            <TouchableOpacity 
            onPress={()=>setactive(item)}
            key={index}
            style={[
              {
              // borderColor:"white",
              borderRadius:10,
              borderWidth:2,
              backgroundColor:"#2E333E",
              alignItems:"center",
              width:"30%",
              paddingVertical:8
            },
              active==item &&{
                borderColor:"#D17842",
                backgroundColor:"#0C0F14"
              },
              ]}
              >
                <Text style={[{
                  fontSize:18,
                  color:"#b5b5b5"
                },
                active === item &&{
                  color:"#D17842",
                  // backgroundColor: "#0C0F14"
                }]}>
                  {item}
                </Text>



            </TouchableOpacity>
            )
            )}


          </View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{alignItems:"center",justifyContent:"center"}} >
          <Text style={{color:"white",fontSize:15}}>Price
          </Text>
          <View style={{flexDirection:"row",}}>
          <Text style={{color:"#D17842",fontSize:20}}>$</Text>
          <Text style={{color:"white",fontSize:20,marginLeft:4}}>{item.price}</Text>

          </View>
          
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Payment")}} style={{borderRadius:15, backgroundColor:"#D17842",padding: 15,  width:"70%",alignItems:'center' }}>
           <Text style={{fontSize:20, fontWeight:'bold', color: "#fff",}}>Add to Cart</Text>
         </TouchableOpacity>

          </View>
          
				</View>
       
     
        </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default CardDetail
const styles= StyleSheet.create({
    mainView:{
        width:"100%",
        height:"100%",
        flex:1,
        backgroundColor:"#31483B"

    },

    topView:{
        width:"100%",
        height:"30%",
        backgroundColor:"#31483B",
        
    },
    bottomView:{
        width:"100%",
        height:"70%",
        backgroundColor:"black",
        padding:25,
       
        
        alignItems:"center"

    },
    imageView:{
        width:"100%",
        height:"100%",
        top:-140,
       borderRadius:100,
       resizeMode: "contain",
       
    }
})