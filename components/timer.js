import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";


const Timer = () => {
   
  return (
    <View style={styles.container}>
      <View style={styles.days}>
        12 дней
      </View>
      <View style={styles.hours}>
        12:43:32
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    backgroundColor: Theme.backgroundColor,
    width: '269px',
    height: '65px',
    borderRadius: '30px',
    borderColor:  '#58FFFF',
    borderWidth:  '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hours: {
    backgroundColorColor:  '#58FFFF',
    borderRadius: '30%',
    width: '50%'
  }
})

export default Timer;