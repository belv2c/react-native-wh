// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Button,
  Icon,
  View,
} from "native-base";
import styles from "./styles";

class Contacts extends Component {
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
          <Text style={styles.overviewHeader}>Contacts</Text>
        </View>
        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        />
      </Container>
    );
  }
}

export default connect()(Contacts);
