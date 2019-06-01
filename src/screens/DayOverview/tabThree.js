// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, Platform} from "react-native";

import {Content, Text, View} from "native-base";
import {Grid, Col, Row} from "react-native-easy-grid";

import styles from "./styles";

class TabThree extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid />
           
        </View>
      </Content>
    );
  }
}

export default TabThree;
