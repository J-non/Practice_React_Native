import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#48089c' }} onPress={() => props.onDeleteItem(props.id)} >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable >
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});