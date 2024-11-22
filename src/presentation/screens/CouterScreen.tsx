import {Text, View,Pressable, StyleSheet, Alert} from 'react-native'
import { useState } from 'react'
const CouterScreen = () => {
    const [count, setCout] = useState(0)
    const asiganr = ()=>{
        setCout(count + 1)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
            Desde el contador {count}
      </Text>
      <Pressable onPress={()=>asiganr()}><Text>prss</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '200',
        color: 'black'
    }
})

export default CouterScreen
