import React from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
    <>
      <ExpensesOutput expensesPeriod='Total' />
    </>
  )
}

export default AllExpenses
