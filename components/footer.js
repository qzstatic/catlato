import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import Rules from "./rules";
import Timer from "./timer";
import styles from "./styles";

const icon = require("../assets/rules.png");

const Footer = ({openRules, isRulesOpened}) => {
    
  return (
    <View style={styles.footer}>
      <Rules openRules={openRules} isRulesOpened={isRulesOpened}/>
      <Timer/>
    </View>
  )
}

export default Footer;