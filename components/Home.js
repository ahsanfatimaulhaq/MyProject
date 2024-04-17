// components/Home.js
import React from 'react';
import { SafeAreaView, ScrollView,StatusBar,StyleSheet } from 'react-native';
import Headerbar from './Headerbar';
import Searchbar from './Searchbar';
import Card from './Card';
import Categories from './Categories';
import CardCoffee from './CardCoffee';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, gap: 20,backgroundColor:"#0C0F14" }}>
      <StatusBar hidden={true}/>
      <ScrollView style={{backgroundColor:"#0C0F14"}}
        showsVerticalScrollIndicator={false}
        >
      <Headerbar />
      <Searchbar />
      <Categories/>
      <Card />
      <CardCoffee/>
      


      </ScrollView>
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
ScrollViewFlex: {
  flexGrow: 1,
},
});

export default Home;