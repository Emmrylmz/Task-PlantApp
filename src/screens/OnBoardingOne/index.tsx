import { View } from 'react-native'
import React, { useEffect } from 'react'
import FixedTop from '../../components/FixedTop'
import ImageContentTwo from '../../components/ImageContentTwo'
import styles from './styles'


const OnBoardingOne = () => {
  
  return (
    <View style={styles.body}>
      <FixedTop title="Take a photo to identify the plant!" />
      <ImageContentTwo />
    </View>
  )
}

export default OnBoardingOne