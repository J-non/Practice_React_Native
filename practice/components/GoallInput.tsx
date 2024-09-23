import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoallInput = (props) => {
  const [enterdGoalText, setEnterdGoalText] = useState('');

  const goalInputHandler = (enterdText) => {
    setEnterdGoalText(enterdText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your coures goal!' onChangeText={goalInputHandler} value={enterdGoalText} />
      <Button title='Add Goal' onPress={() => { props.onAddGoal(enterdGoalText), setEnterdGoalText('') }} />
    </View>
  )
}

export default GoallInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
})