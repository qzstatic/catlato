import React from 'react';
import ProgressBar from "../components/progress_bar";
import PlayingField from "../components/playing_field";
import Theme from "../components/theme";
import styles from "../components/styles";
import Badges from "../components/badges";
import Footer from "../components/footer";
import { StyleSheet, Text, View, Image } from "react-native";

const logo = require("../assets/logo.png");

class Lato extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isRulesOpened: false
      };
      this.renderPlayingField = this.renderPlayingField.bind(this);
      this.renderBadges = this.renderBadges.bind(this);
      this.renderFooter = this.renderFooter.bind(this);
      this.openRules = this.openRules.bind(this);
      this.openRules = this.openRules.bind(this);
  }

  renderPlayingField() {
    if(!this.state.isRulesOpened) {
      return (
        <View style={styles.playing_field}>
          <PlayingField/>
        </View>        
      )
    }
  }

  renderBadges() {
    if(!this.state.isRulesOpened) {
      return (
        <Badges/> 
      )
    }
  }

  renderFooter() {
    if(!this.state.isRulesOpened) {
      return (
        <Footer openRules={this.openRules} isRulesOpened={this.state.isRulesOpened}/>
      )
    }
  }

  openRules(val) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isRulesOpened: val
      }
    })
  }

  render() {
      return (
      <>
        <View style={styles.header}>
          <View style={styles.logo__container}>
            <View style={styles.logo}>
                <Image
                  source={logo}
                  style={styles.logo__image}
                />
            </View>
          </View>
          <View style={styles.progress_bar__container}>
            <ProgressBar/>
          </View>
        </View>
        {this.renderPlayingField()}
        {this.renderBadges()}
        {this.renderFooter()}
      </>
    );
  }
}
export default Lato;