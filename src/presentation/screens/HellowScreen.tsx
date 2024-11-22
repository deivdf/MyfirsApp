import { StyleSheet, Text, View } from "react-native"
import CouterScreen from "./CouterScreen"
type Props ={
  name?:string
}

const HellowScreen = ({name} : Props) => {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Hello, {name}  you are Cute person</+Text>*/}      
      <CouterScreen/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: '400',
        color: 'black'
    }
})

export default HellowScreen
