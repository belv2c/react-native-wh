// @flow
import React, {Component} from "react";
import {Text} from "react-native";

import {Content, View} from "native-base";
import {Grid} from "react-native-easy-grid";

//import styles from "./styles";
import Progress from "../../theme/components/Progress";
import ProgressSlider from "../../components/ProgressSlider";

class TabFour extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Text> How many drinks have you had today? </Text>
          <ProgressSlider />
          <Grid />
        </View>
      </Content>
    );
  }
}

export default TabFour;
