import { StyleSheet, Text, View, Image } from "react-native";
import FieldCell from "./field_cell";
import Theme from "./theme";

const PlayingField = () => {
    return (
      <View style={styles.container}>
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
        <FieldCell />
      </View>
   );
}


const styles = StyleSheet.create({
  container: {
    marginTop: '25px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    backgroundColor: Theme.backgroundColor,
    width: '100%',
    height: '361px',
  },
})

export default PlayingField;