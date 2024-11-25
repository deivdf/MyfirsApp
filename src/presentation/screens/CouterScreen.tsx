import {Text, View,Pressable, StyleSheet, Alert, Platform} from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/shared/PrimaryButton'
const CouterScreen = () => {
    const [count, setCout] = useState(0)
    const asiganr = ()=>{
        setCout(count + 1)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Desde el contador
      </Text>
      <Text style={styles.title}>
        {count}
      </Text>
      <PrimaryButton/>
      <Pressable 
        onPress={()=>asiganr()}
        onLongPress={()=>setCout(0)}
        style={({pressed})=>
          [
            styles.button,
            pressed &&  styles.buttonPressed
          ]}
        ><Text style={{
          color: Platform.OS === 'android' ?'white' :  '#088181',
          textAlign: 'center',
          fontSize: 20}}>press</Text></Pressable>
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
        fontWeight: '300',
        color: 'black',
        padding: 10
    },
    button: {
      backgroundColor: Platform.OS === 'android' ? 'cyan' : 'white',
      padding: 10,
      borderRadius: 5,
      width: 100,
    },
    buttonPressed: {
      backgroundColor:Platform.OS === 'android' ? '#088181' : 'white',
    },

})

export default CouterScreen
