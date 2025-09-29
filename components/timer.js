import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import styles from "./styles";

const Timer = () => {
   
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timer}>
        <View style={styles.days}>
          <Text style={styles.days__text}>
            12 дней
          </Text>
        </View>
        <View style={styles.clock__container}>
          <View style={styles.delimeter}/>
          <View style={styles.clock}>
            <Text style={styles.clock__text}>
              12:43:32
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container:  {
//     backgroundColor: Theme.backgroundColor,
//     width: '269px',
//     height: '65px',
//     borderRadius: 30,
//     borderColor:  '#58FFFF',
//     borderWidth:  2,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   hours: {
//     backgroundColorColor:  '#58FFFF',
//     borderRadius: 30,
//     width: '50%'
//   }
// })

export default Timer;