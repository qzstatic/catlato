import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Lato from "./pages/lato";

const staticImage = require("./assets/home.png");

const App = () => {
  
  const [isLatoActive, activateLato] = useState(false);

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