import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

const ProgressBar = () => {
    return (
      <View style={styles.progress_bar}>
        <View style={styles.progress_bar__segement__first} />
        <View style={styles.progress_bar__segement} />
        <View style={styles.progress_bar__segement} />
        <View style={styles.progress_bar__segement__last} />
      </View>
   );
}

export default ProgressBar;