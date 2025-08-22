import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-native'
import { AppColors } from '../../theme/color'
import { screenWidth } from '../../utils/constants'

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container} >
     <Add size="50" color={AppColors.WHİTE}/>
    </TouchableOpacity>   
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container:{
     position: 'absolute',
     backgroundColor: AppColors.PRİMARY,
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 50,
     bottom:20,
     right:20,
     width: screenWidth * 0.2,
     height: screenWidth * 0.2,
        
    }
})