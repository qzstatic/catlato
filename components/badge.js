import styles from "../components/styles";
import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import {Icons} from "./fields";

const icon = require("../assets/field_icons/gas_mobile.svg");

function badgeIcon(type) {
  if(type == 'empty') {
    return;
  } else {
    return (
      <Image
        source={Icons[type]}
        style={styles.badge__image}
      />
    )
  }
}

const Badge = ({type}) => {
    
  return (
    <View style={styles.badge}>
        {badgeIcon(type)}
    </View>
  )
}

export default Badge;