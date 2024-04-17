import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CardDetail from './CardDetail';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from "expo-blur";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: 1,
    title: "Cappuccino",
    image: require("../assets/coffeera.jpg"),
    price: "2.00",
    ratingscount: '6,879',
    description:
      "Cappuccino is a coffee drink made with espresso and hot milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 1,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 2,
    title: "Espresso",
    image: require("../assets/coffeera.jpg"),
    price: "4.01",
    ratingscount: '6,879',
    description:
      "Espresso is a coffee drink made with hot coffee beans that are roasted and then brewed with hot water, resulting in a strong, full-bodied, and concentrated typical of a cappuccino. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 1,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 3,
    title: "Latte",
    image: require("../assets/coffeera.jpg"),
    price: "3.05",
    ratingscount: '6,879',
    description:
      "Latte is a coffee drink made with espresso and steamed milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 4,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 4,
    title: "Flat White",
    image: require("../assets/coffeera.jpg"),
    price: "3.00",
    ratingscount: '6,879',
    description:
      "Flat white is a coffee drink made with espresso and steamed milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 4,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 5,
    title: "Cappuccino",
    image: require("../assets/coffeera.jpg"),
    price: "4.00",
    ratingscount: '6,879',
    description:
      "Cappuccino is a coffee drink made with espresso and hot milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 2,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 6,
    title: "Espresso",
    image: require("../assets/coffeera.jpg"),
    price: "5.00",
    ratingscount: '6,879',
    description:
      "Espresso is a coffee drink made with hot coffee beans that are roasted and then brewed with hot water, resulting in a strong, full-bodied, and concentrated typical of a cappuccino. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 2,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 7,
    title: "Cappuccino",
    image: require("../assets/coffeera.jpg"),
    price: "2.07",
    ratingscount: '6,879',
    description:
      "Cappuccino is a coffee drink made with espresso and hot milk. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 3,
    rating: 4.5,
    included: "With Oat milk",
  },
  {
    id: 8,
    title: "Espresso",
    image: require("../assets/coffeera.jpg"),
    price: "1.99",
    ratingscount: '6,879',
    description:
      "Espresso is a coffee drink made with hot coffee beans that are roasted and then brewed with hot water, resulting in a strong, full-bodied, and concentrated typical of a cappuccino. It is traditionally prepared with steamed milk, and is traditionally topped with a small amount of foam.",
    categoryId: 3,
    rating: 4.5,
    included: "With Oat milk",
  },
];

const CardCoffee = () => {
  const navigation=useNavigation()

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("CardDetail", { item });
      }}
    >
      <LinearGradient
        colors={['#252A32', '#0C0F14']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Image source={item.image} style={styles.image} />
        <View
          style={{
            position: "absolute",
            right: 0,
            borderBottomStartRadius: 30,
            borderTopEndRadius: 20,
          }}
        >
          <BlurView
            tint="dark"
            intensity={80}
            style={{
              flexDirection: "row",
              padding: 8,
            }}
          >
            <AntDesign
              name="staro"
              size={24}
              color="#D17842"
              style={{
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                color: "#fff",
                marginLeft: 5,
              }}
            >
              {item.rating}
            </Text>
          </BlurView>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text  style={styles.included}>{item.included}</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between" , alignItems:"center", marginVertical: 5,}}>
        <View style={{ flexDirection: "row"}}>
                      <Text
                        style={{
                          color: "#D17842",
                         
                          fontSize: 16,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{ color: "white", fontSize: 16,marginLeft:6 }}
                      >
                        {item.price}
                      </Text>
                    </View>
                    <TouchableOpacity style={{borderRadius:5,backgroundColor:"#D17842",padding:5}}>
                    <Ionicons name="add-sharp" size={24} color="white"  />

                      
                    </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
  
  
  
       
    
    
  

  return (
    <View style={styles.container}>
        <Text style={{color:"white", fontSize:22, fontWeight:"bold",marginBottom:20}}>Coffee beans</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 15,
  },
  
    cardContainer: {
      borderRadius: 20,
      overflow: "hidden", // Ensure that the LinearGradient doesn't overflow the card
      marginBottom: 40, 
      marginRight: 16, 
    },
    card: {
      borderRadius: 20,
      padding: 16,
      width: 200,
      height: 310, 
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    color:"white",
    fontSize: 10*1.7,
    fontWeight: '600',
    marginBottom: 4,
  },
  included: {
    fontSize: 14,
    color:"#52555A"
  },
 
});

  


export default CardCoffee;
// export default {
//   primary: "#D17842",
//   secondary: "#52555A",
//   dark: "#0C0F14",
//   "dark-light": "#2E333E",
//   light: "#4D4F52",
//   white: "#fff",
//   "white-smoke": "#b5b5b5",
// };
// export const COLORS: Color = {
//   primaryRedHex: '#DC3535',
//   primaryOrangeHex: '#D17842',
//   primaryBlackHex: '#0C0F14',
//   primaryDarkGreyHex: '#141921',
//   secondaryDarkGreyHex: '#21262E',
//   primaryGreyHex: '#252A32',
//   secondaryGreyHex: '#252A32',
//   primaryLightGreyHex: '#52555A',
//   secondaryLightGreyHex: '#AEAEAE',
//   primaryWhiteHex: '#FFFFFF',
//   primaryBlackRGBA: 'rgba(12,15,20,0.5)',
//   secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
// };