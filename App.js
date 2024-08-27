import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Details from './Details';
import Mat from './Mat';
import Register from './Register';
import Design from './Design';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Details} />
        <Tab.Screen name="material" component={Mat} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="design" component={Design} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hammad</Text>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})