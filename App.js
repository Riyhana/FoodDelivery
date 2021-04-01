import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from "./screen/Home"
import Details from "./screen/Details"
import Favorite from './screen/favorite'
import profile from "./screen/profile"

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#841584"
        }}
      >
     <Tab.Screen 
          name="Favorite"
          component={FavoriteStack}
          options={{
            tabBarLabel: "Favorite ",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen 
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
           <Tab.Screen 
          name="profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function FavoriteStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "#841584"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "bold"}
      }}
    >
      <Stack.Screen 
        name="Favorite"
        component={Favorite}
        options={{
          title: "Favorite"
        }}
      />
    </Stack.Navigator>
  )
}
function HomeStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "#841584"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "bold"}
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: "Home Page"
        }}
      />
      <Stack.Screen
        name = "Details"
        component = {Details}
        options={{
          title: "Details"
        }}
      />
    </Stack.Navigator>
  )
}
function ProfileStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "#841584"},
        headerTintColor: "#fff",
        headerTitleStyle: {fontWeight: "bold"}
      }}
    >
      <Stack.Screen 
        name="profile"
        component={profile}
        options={{
          title: "profile"
        }}
      />
   
    </Stack.Navigator>
  )
}
