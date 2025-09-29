import { StyleSheet, Text, View, Image } from "react-native";

const FieldCell = () => {
    return (
      <View style={styles.container}>
        <View style={styles.segment} />
        <View style={styles.segment} />
        <View style={styles.segment} />
        <View style={styles.lastSegment} />
      </View>
   );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3F3F3F',
    width: '110px',
    height: '110px',
    borderRadius: '20px'
  },
})

export default FieldCell;