import { StyleSheet, Text, View, Image } from "react-native";
import FieldCell from "./field_cell";
import styles from "./styles";
import {Icons, Fields} from "./fields"
import {getRandomInt, shuffle} from "./utils"
import Theme from "./theme";

const PlayingField = () => {
  let fields = shuffle(Fields);

  return (
    <>
      <View style={styles.playing_field__row}>
          <FieldCell type={fields[0]}/>
          <FieldCell type={fields[1]}/>
          <FieldCell type={fields[2]}/>
      </View>
      <View style={styles.playing_field__row}>
          <FieldCell type={fields[3]}/>
          <FieldCell type={fields[4]}/>
          <FieldCell type={fields[5]}/>
      </View>
      <View style={styles.playing_field__row}>
          <FieldCell type={fields[6]}/>
          <FieldCell type={fields[7]}/>
          <FieldCell type={fields[8]}/>
      </View>
     </>
   );
}
// class PlayingField extends React.Component {
//   constry
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//   },
//   row: {
//     alignContent: 'normal',
//     justifyContent: 'space-around',
//     marginTop: 25,
//     // width: 500,
//     flexBasis: '30%',
//     flexGrow: 1,
//     gap: 10,
//     /*  */

//     // backgroundColor: Theme.backgroundColor,
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//     },
// })

export default PlayingField;