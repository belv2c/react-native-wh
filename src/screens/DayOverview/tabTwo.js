// @flow
import React, {Component} from "react";
import {Text} from "react-native";
import {Content, View} from "native-base";
import {Grid} from "react-native-easy-grid";
//import styles from "./styles";
import ProgressSlider from "../../components/ProgressSlider";


class TabTwo extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Text> How many minutes of exercise did you get today? </Text>
            {/* <AnimatedProgressWheel
            progress={20}
            size={220}
            width={40}
            color={"yellow"}
            backgroundColor={"orange"}
            fullColor={"green"}
            />; */}
            <ProgressSlider />
          <Grid />
        </View>
      </Content>
    );
  }
}

export default TabTwo;
