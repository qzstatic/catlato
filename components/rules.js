import styles from "./styles";
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";

const rulesButtonImage = require("../assets/rules.png");

const Rules = ({openRules, isRulesOpened}) => {
  return (
    <View style={styles.rulesContainer}>
    <View style={styles.rules}>
    <Pressable
          onPress={() => openRules(true) }>
          {({pressed}) => {
            if(!isRulesOpened) {
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
    </View> 
  )
}

// const styles = StyleSheet.create({
//   rulesButtonWrapper: {
//     backgroundColor: Theme.backgroundColor,
//     height: '65px',
//     width: '65px',
//     borderColor:  '#757575',
//     borderWidth:  2,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   rulesButton: {
//     height: '20px',
//     width: '20px',
//   },
//   rulesModal: {

//   },
// })

export default Rules;