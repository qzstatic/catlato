import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import Badge from "./badge";
import {getRandomInt} from "./utils";
import {Fields} from "./fields";
import styles from "../components/styles";

const Badges = () => {
    return (
    <>
    <View style={styles.result}>
      <View style={styles.result__row}>
          <Text style={styles.result__text}>
            Заработано 3 бейджа
          </Text>
        </View>
    </View>
    <View style={styles.badges}>
        <Badge type={Fields[getRandomInt(0, Fields.length)]}/>
        <Badge type={Fields[getRandomInt(0, Fields.length)]}/>
        <Badge type={Fields[getRandomInt(0, Fields.length)]}/>
        <Badge type={Fields[getRandomInt(0, Fields.length)]}/>
    </View>
    </>
    )
}

export default Badges;