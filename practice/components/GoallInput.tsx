import React, { useState } from 'react'
import { Button, Image, Modal, Pressable, StyleSheet, TextInput, View } from 'react-native'

const GoallInput = (props) => {
  const [enterdGoalText, setEnterdGoalText] = useState('');

  const goalInputHandler = (enterdText) => {
    setEnterdGoalText(enterdText)
  }

  return (
    <Modal visible={props.visible} animationType='slide' transparent={true} >

      <Pressable style={styles.modalOpacity} onPress={() => { props.onCancel(), setEnterdGoalText('') }}></Pressable>

      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/catbox.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your coures goal!'
          placeholderTextColor={'#120438'}
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='cancel' color={'#f31282'} onPress={() => { props.onCancel(), setEnterdGoalText('') }} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color={'#5e0acc'} onPress={() => { props.onAddGoal(enterdGoalText), setEnterdGoalText('') }} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoallInput

const styles = StyleSheet.create({
  modalOpacity: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})