import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Lato from "./pages/lato";
import styles from "./components/styles";
import {getRandomInt} from "./components/utils";
import {Fields} from "./components/fields";


const staticImage = require("./assets/home.png");
const backButtonImage = require("./assets/chevron.left.png");

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isLatoActive: false
      };
      this.renderBack = this.renderBack.bind(this);
      this.renderHome = this.renderHome.bind(this);
      this.renderLato = this.renderLato.bind(this);
      this.activateLato = this.activateLato.bind(this);
      this.setupPlayingField = this.setupPlayingField.bind(this);
      this.setupPlayingField()
  }

  async setupPlayingField() {
    try {
      const value = await AsyncStorage.getItem('PlayingField');
      if (value !== null) {
        // We have data!!
        console.log(value);
      } else {
        let field, fields = [];
        for(let i = 0;i <= 9; i = i + 1) {
          field = {};
          field[Fields[getRandomInt(0, Fields.length)]]  = 'not_active'
          fields.push(field)
        }
        try {
          await AsyncStorage.setItem(
            'PlayingField',
            JSON.stringify(fields)
          );
        } catch (error) {
          console.log('setItem')
          console.log(error)
          // Error saving data
        }
      }
    } catch (error) {
          console.log('getItem')
          console.log(error)
      // Error retrieving data
    }
  }

  activateLato(val) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isLatoActive: val
      }
    })
  }

  renderBack() {
    if(this.state.isLatoActive) {
      return (  
        <View
          style={styles.back__button}
        >
        <Pressable onPress={() => this.activateLato(false) }>
          {({pressed}) => {
            if(this.state.isLatoActive) {
              return (
                <Image
                  source={backButtonImage}
                  // style={styles.backButton}
                />
              )
            }
           }}
          </Pressable>
        </View>
      )
    }
  }

  renderHome() {
    if(!this.state.isLatoActive) {
      return (
        <Pressable
          onPress={() =>this.activateLato(true) }
          style={styles.homeImageWrapper}>
          {({pressed}) => {
            if(!this.state.isLatoActive) {
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

  renderLato() {
    if(this.state.isLatoActive) {
      return (
        <Lato/>
      )
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
        <View style={styles.app}>
          {this.renderBack()}
          {this.renderHome()}
          {this.renderLato()} 
        </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
   
  }
}
export default App;