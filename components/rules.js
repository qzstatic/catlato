import {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";

const rulesButtonImage = require("../assets/rules.png");

const Rules = () => {
  const [isOpened, openRules] = useState(false);  

  return (
    <View>
    <Pressable
          onPress={() => openRules(true) }
          style={styles.rulesButtonWrapper}>
          {({pressed}) => {
            if(!isOpened) {
              return (
                <Image
                  source={rulesButtonImage}
                  style={styles.rulesButton}
                />
              )
            }
           }}
    </Pressable>
    </View> 
  )
}

const styles = StyleSheet.create({
  rulesButtonWrapper: {
    backgroundColor: Theme.backgroundColor,
    height: '65px',
    width: '65px',
    borderColor:  '#757575',
    borderWidth:  '2px',
    borderRadius: '30px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rulesButton: {
    height: '20px',
    width: '20px',
  },
  rulesModal: {

  },
})

export default Rules;