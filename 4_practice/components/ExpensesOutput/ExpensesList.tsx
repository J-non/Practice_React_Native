import React from 'react'
import { FlatList, Text } from 'react-native'
import ExpenseItem from './ExpenseItem'


const renderExpensesItem = (itemData: any) => {
  return <ExpenseItem {...itemData.item} />
}

const ExpensesList = ({ expenses }: any) => {
  return (
    <>
      <FlatList data={expenses} renderItem={renderExpensesItem} keyExtractor={(item) => item.id} />
    </>
  )
}

export default ExpensesList
