// @flow
import React, {Component} from "react";
import {Text} from "react-native";

import {Content, View} from "native-base";
import {Grid, Col, Row} from "react-native-easy-grid";
import ProgressSlider from "../../components/ProgressSlider";

import styles from "./styles";

class TabThree extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Text> How many glasses of water have you had today? </Text>
          <ProgressSlider />
          <Grid />
        </View>
      </Content>
    );
  }
}

export default TabThree;
