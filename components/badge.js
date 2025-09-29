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
        style={styles.badgeImage}
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

const styles = StyleSheet.create({
  badge:  {
    // marginTop: '25px',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(4, 1fr)',
    // gridGap: '20px',
    backgroundColor: Theme.backgroundColor,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    borderColor:  '#757575',
    borderWidth:  '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeImage: {
    margin: '0 auto'
  }
})

export default Badge;