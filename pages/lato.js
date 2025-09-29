import ProgressBar from "../components/progress_bar";
import PlayingField from "../components/playing_field";
import Theme from "../components/theme";
import Badges from "../components/badges";
import { StyleSheet, Text, View, Image } from "react-native";

const logo = require("../assets/logo.png");

const Lato = () => {
  return (
      <View style={styles.app}>
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
        <PlayingField/>
        <Badges/>
      </View>
    );
};


const styles = StyleSheet.create({
  app: {
    backgroundColor: Theme.backgroundColor,
    maxWidth: Theme.appWidth,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
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