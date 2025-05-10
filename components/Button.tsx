import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  type: "normal" | "blue" | "outline-blue" | "green" | "outline-green" | "danger" | "outline" | "outline-danger";
  title: string;
  onPress: VoidFunction;
  className?: string;
}

const Button = ({ type, title, onPress, className }: ButtonProps) => {
  if ((type === "normal")) {
    return (
      <TouchableOpacity className={`${className} bg-gray-800 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-white text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "outline")) {
    return (
      <TouchableOpacity
        className={` ${className} border border-gray-800  py-3 rounded-lg flex flex-row justify-center items-center`}
        onPress={onPress}
      >
        <Text className="text-gray-700 text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }
  else
  if ((type === "blue")) {
    return (
      <TouchableOpacity className={`${className} bg-blue-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-white text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "outline-blue")) {
    return (
      <TouchableOpacity className={`${className} border border-blue-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-blue-500 text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "green")) {
    return (
      <TouchableOpacity className={`${className} bg-green-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-white text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "outline-green")) {
    return (
      <TouchableOpacity className={`${className} border border-green-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-green-500 text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "danger")) {
    return (
      <TouchableOpacity className={`${className} bg-red-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-white text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }else
  if ((type === "outline-danger")) {
    return (
      <TouchableOpacity className={` ${className} border border-red-500 py-3 rounded-lg flex flex-row justify-center items-center`} onPress={onPress}>
        <Text className="text-red-500 text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    );
  }

  return null
};

export default Button;

const styles = StyleSheet.create({});
