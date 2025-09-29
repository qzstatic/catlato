import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "./theme";
import Badge from "./badge";
import {getRandomInt} from "./utils";
import {Fields} from "./fields";

const Badges = () => {
    return (
    <>
    <View style={styles.result}>
        Заработано 3 бейджа
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

const styles = StyleSheet.create({
  result: {

  },
  badges:  {
    marginTop: '25px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '20px',
    backgroundColor: Theme.backgroundColor,
    width: '100%',
    height: '361px',
  },
})

export default Badges;