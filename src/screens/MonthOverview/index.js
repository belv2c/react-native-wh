// @flow
import React, { Component } from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
  Button,
  Icon,
  View,
  Grid,
  Col
} from "native-base";
import ProgressBar from "../../components/ProgressBar";
import styles from "./styles";

class MonthOverview extends Component {
  render() {
    const navigation = this.props.navigation;
    const primary = require("../../theme/variables/commonColor").brandPrimary;
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Right />
        </Header>
        <View style={styles.overviewHeaderContainer}>
          <Text style={styles.overviewHeader}>Your Month</Text>
        </View>
        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        />
      </Container>
    );
  }
}

export default MonthOverview;
