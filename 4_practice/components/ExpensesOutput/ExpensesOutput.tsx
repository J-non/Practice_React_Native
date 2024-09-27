import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-09-27')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-10-01')
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2024-09-30')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2024-11-19')
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e6',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e7',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e8',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e10',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e11',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e12',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
  {
    id: 'e13',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2024-11-18')
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }: any) => {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
});