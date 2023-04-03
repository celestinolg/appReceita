import {View, Text, StyleSheet} from 'react-native'

export default function App(){
  return (
    <View style={style.container}>
      <Text>
          Começamos
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: "red",
    height: 190
  }
})