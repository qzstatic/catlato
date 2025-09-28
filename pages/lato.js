import ProgressBar from "../components/progress_bar";
import { StyleSheet, Text, View, Image } from "react-native";

const logo = require("../assets/logo.png");


const Lato = () => {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
              source={logo}
              style={styles.logoImage}
            />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar/>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#292929',
    width: '100%',
    height: '36px',
  },
  logoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  progressBarContainer: {
    flex: 1,
    display: 'block'
  },
  logoImage: {
    
  }
});

export default Lato;