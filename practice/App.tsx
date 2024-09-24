import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoallInput from './components/GoallInput';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalVisible(false);
  }

  const addGoalHandler = (enterdGoalText) => {
    setCourseGoals((currentCouresGoals) => [...currentCouresGoals, { text: enterdGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCouresGoals => {
      return currentCouresGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={modalVisible ? styles.appContainerOnModal : styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
        <GoallInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalVisible} />

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
            )
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#1e085a'
  },
  appContainerOnModal: {
    flex: 5,
    paddingTop: 50,
    paddingHorizontal: 16,
    opacity: 0.4,
    // backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },

});
