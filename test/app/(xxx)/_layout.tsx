import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' />
    </Tabs>
    // <View>
    //   <Text>asdasdasd</Text>
    // </View>
  )
}

export default _layout
