// @flow
import React, {Component} from "react";
//import {ImageBackground, TouchableOpacity, Platform} from "react-native";

import {Content, View} from "native-base";
import {Grid} from "react-native-easy-grid";

//import styles from "./styles";
import Progress from "../../theme/components/Progress";

class TabOne extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid />
          <Progress />
        </View>
      </Content>
    );
  }
}

export default TabOne;
