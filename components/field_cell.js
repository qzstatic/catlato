import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../components/styles";
import {Icons, Fields, Labels} from "./fields"
import { ImageBackground } from "react-native-web";

const FieldCell = ({type}) => {
    return (
      <View style={styles.field}>
        <View style={styles.question}>
          <Text>
            ?
          </Text>
        </View>
        <View style={{...styles.icon, backgroundImage: Icons[type]}}>
            <Image
              style={styles.icon__image}
              source={Icons[type]}
            />
        </View>
        <View style={styles.label}>
          <Text>
            {Labels[type]}
          </Text>
        </View>
      </View>
   );
}


export default FieldCell;