import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";




export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-baby"
        options={{
          title: "My Baby",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="baby-face-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="my-circle"
        
        options={{
          title: "My Circle",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="circle-double"
              size={24}
              color={color}
            />
          ),
        }}
      />

      
      <Tabs.Screen
        name="power-core"
        options={{
          title: "Power Core",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
