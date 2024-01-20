import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import PrimarySkipButton from '../../components/PrimarySkipButton'

const GettingStarted = () => {
    
  return (
    <View style={styles.body}>
    <PrimarySkipButton title='hey' onPress={() => alert("yo")}/>
    </View>
  )
}

export default GettingStarted