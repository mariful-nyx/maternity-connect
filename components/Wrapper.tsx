import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const Wrapper = ({className ,children}:{className?: string, children:React.ReactNode}) => {
  return (
    <ScrollView className={`px-5 pt-12 bg-white h-screen ${className}`}>
        <StatusBar style='dark'/>
      {children}
    </ScrollView>
  )
}

export default Wrapper

const styles = StyleSheet.create({})