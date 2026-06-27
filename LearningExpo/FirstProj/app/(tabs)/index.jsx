import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <View style = {{ backgroundColor: "grey", width: 390, height: 300, display: 'flex', alignItems: 'center',flexDirection: 'row', padding: 50}}>
        <View style = {{backgroundColor: "lime", height: 100, width: 100, flex: 1, borderWidth: 2}} />
        <View style = {{backgroundColor: "red", height: 100, width: 100, flex: 1, borderWidth: 2}} />
        <View style = {{backgroundColor: "yellow", height: 100, width: 100, flex: 1, borderWidth: 2 }} />
      </View>
    </SafeAreaView>
  )
}

export default index