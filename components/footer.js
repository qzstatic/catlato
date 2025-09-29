import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import Rules from "./rules";
import Timer from "./timer";

const icon = require("../assets/rules.png");

const Footer = ({type}) => {
    
  return (
    <View style={styles.footer}>
      <Rules/>
      <Timer/>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:  {
    // marginTop: '25px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    // gridGap: '20px',
    backgroundColor: Theme.backgroundColor,
    width: '100%',
    height: '64px'
  },
  badgeImage: {
    margin: '0 auto'
  }
})

export default Footer;