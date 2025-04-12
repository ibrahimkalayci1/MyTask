import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../theme/color'

const Button = props => {
  const { title, style } = props
  return (
//    <TouchableOpacity  style={[style && style]} > 
   <TouchableOpacity  {...props} >  
      <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    title:{
        color:AppColors.WHİTE,
        fontSize:16,
        fontWeight:"600",
    }
})