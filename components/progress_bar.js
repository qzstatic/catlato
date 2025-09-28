import { StyleSheet, Text, View, Image } from "react-native";

const ProgressBar = () => {
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
    width: '100%',
    height: '36px',
    borderRadius: '20px'
  },
  segment: {
    display: 'flex',
    flex: 1,
    height: '36px',
    borderRightWidth: '3px',
    borderRightColor: 'rgba(0,0,0,50%)'
  },
  lastSegment: {
    display: 'flex',
    flex: 1,
    height: '36px'
  },
  logoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  logoImage: {
    
  }
});

export default ProgressBar;