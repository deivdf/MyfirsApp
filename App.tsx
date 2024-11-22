import { SafeAreaView, StyleSheet } from "react-native"
import HellowScreen from "./src/presentation/screens/HellowScreen"

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HellowScreen name={'David Fernando'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
