import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Lato from "./pages/lato";
import Theme from "./components/theme";

const staticImage = require("./assets/home.png");
const backButtonImage = require("./assets/chevron.left.png");

const App = () => {
  
  const [isLatoActive, activateLato] = useState(false);

  function renderBack() {
    if(isLatoActive) {
      return (
        <Pressable
          onPress={() => activateLato(false) }
          style={styles.backButtonWrapper}>
          {({pressed}) => {
            if(isLatoActive) {
              return (
                <Image
                  source={backButtonImage}
                  style={styles.backButton}
                />
              )
            }
           }}
        </Pressable>
      )
    }
  }

  function renderHome() {
    if(!isLatoActive) {
      return (
        <Pressable
          onPress={() => activateLato(true) }
          style={styles.homeImageWrapper}>
          {({pressed}) => {
            if(!isLatoActive) {
              return (
                <Image
                  source={staticImage}
                  style={styles.homeImage}
                />
              )
            }
           }}
        </Pressable>
      )
    }
  }

  function renderLato() {
    if(isLatoActive) {
      return (
        <Lato/>
      )
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {renderBack()}
        {renderHome()}
        {renderLato()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 896,
  },
  backButtonWrapper: {
    backgroundColor: Theme.backgroundColor,
    height: '20px',
    maxWidth: Theme.appWidth
  },
  backButton: {

  },
  homeImageWrapper: {
    borderRadius: 8,
    padding: 6,
    height: 100
  },
  homeImage: {
    flex: 1,
    resizeMode: "cover",
    width: 427,
    height: 896,
    alignItems: "center",
  },
  });

export default App;