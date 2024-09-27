import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle'


const CategoriesScreen = ({ navigation }: any) => {

  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  }

  return (
    <>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
    </>
  )
}

export default CategoriesScreen
