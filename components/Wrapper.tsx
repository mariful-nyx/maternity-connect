import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ScrollView className='px-5 pt-12 bg-white h-screen'>
        <StatusBar style='dark'/>
      {children}
    </ScrollView>
  )
}

export default Wrapper

const styles = StyleSheet.create({})