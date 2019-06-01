// @flow
import React, { Component } from "react";
import { Image } from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

const primary = require("../../theme/variables/commonColor").brandPrimary;
type Props = {
  navigation: () => void
};
class Resources extends Component {
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }

  render() {
    const navigation = this.props.navigation;
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
          <Text style={styles.overviewHeader}>Resources</Text>
        </View>
        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        />
      </Container>
    );
  }
}

export default Resources;
