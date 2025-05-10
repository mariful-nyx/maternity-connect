import React from 'react'
import { TextInput } from 'react-native'

function Input({...rest}) {
  return (
    <TextInput
        className="text-lg z-10 placeholder:text-gray-400 focus:text-gray-600 border-2 border-gray-500 rounded-lg bg-gray-50 focus:bg-white focus:border-black pl-[50px] py-3 pr-4"
        {...rest}
    />
  )
}

export default Input