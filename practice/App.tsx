import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoallInput from './components/GoallInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enterdGoalText) => {
    setCourseGoals((currentCouresGoals) => [...currentCouresGoals, { text: enterdGoalText, id: Math.random().toString() }])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCouresGoals => {
      return currentCouresGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoallInput onAddGoal={addGoalHandler} />

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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },

});
