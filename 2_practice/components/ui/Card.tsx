import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/color'

const Card = ({ children }) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({

  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    alignItems: 'center',

    // 그림자
    elevation: 4, // 안드로이드

    // ios
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25
  },
})