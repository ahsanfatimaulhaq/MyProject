import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  const Categories = () => {
        const categories = [
            {
                id: "01",
                category: "All",
            },
            {
                id: "02",
                category: "Cappuccino",
            },
            {
                id: "03",
                category: "Espresso",
            },
            {
                id: "04",
                category: "Americano",
            },
            {
                id: "05",
                category: "Italian",
            },
            {
                id: "06",
                category: "Black coffee",
            },
            {
                id: "07",
                category: "Cold coffee",
            },
            {
                id: "08",
                category: "Special",
            },
        ];
        const [active, setactive] = useState(null);
  
        const handlePress = (id) => {
          setactive(id);
         
        };

        const renderCategoryItem = ({ item }) => (
            <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{ marginRight: 20, alignItems: "center" , marginTop:20}}
          >
            <Text
              style={[
                { color: "#52555A", fontSize: 20},
                active === item.id && { color: "#D17842" },
              ]}
            >
              {item.category}
            </Text>
            {active === item.id && (
              <View
                style={{
                  height: 5,
                  width: 30,
                  backgroundColor: "#D17842",
                  borderRadius: 30,
                  marginTop: 5,
                }}
              />
            )}
          </TouchableOpacity>
        );
   
  
    return (
        <View>
            <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id}
        
        renderItem={renderCategoryItem}    
       
      />
        </View>
      
    );
  };
  
  export default Categories;
  
  const styles = StyleSheet.create({});

//   import React from 'react';
// import { View, Text, FlatList } from 'react-native';

// const Categories = () => {
//     const categories = [
//         {
//             id: "01",
//             category: "Breakfast",
//         },
//         {
//             id: "02",
//             category: "Lunch",
//         },
//         {
//             id: "03",
//             category: "Dinner",
//         },
//         {
//             id: "04",
//             category: "Asian",
//         },
//         {
//             id: "05",
//             category: "Italian",
//         },
//         {
//             id: "06",
//             category: "Desserts",
//         },
//         {
//             id: "07",
//             category: "Vegetarian",
//         },
//         {
//             id: "08",
//             category: "Seafood",
//         },
//     ];

//     

//     return (
//         <View>
//             <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold", color: '#3c444c' }}>Categories</Text>
//             <FlatList
//                 horizontal
//                 data={categories}
//                 renderItem={renderCategoryItem}
//                 showsHorizontalScrollIndicator={false}
//             />
//         </View>
//     );
// }

// export default Categories;