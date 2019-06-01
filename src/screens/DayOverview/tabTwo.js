// @flow
import React, {Component} from "react";
//import {ImageBackground, TouchableOpacity, Platform} from "react-native";

import {Content, View} from "native-base";
import {Grid} from "react-native-easy-grid";

//import styles from "./styles";
import ProgressChart from "../../components/ProgressChart";

class TabTwo extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid />
          <ProgressChart />
        </View>
      </Content>
    );
  }
}

export default TabTwo;
