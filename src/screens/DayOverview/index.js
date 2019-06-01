// @flow
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  TabHeading
} from "native-base";

import styles from "./styles";

import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";


class DayOverview extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon active name="menu" />
            </Button>
          </Left>
          
          <Right />
        </Header>
        <Tabs style={{ backgroundColor: "#fff" }}>
          <Tab
            heading={
              <TabHeading>
                <Text>Mood</Text>
              </TabHeading>
            }
          >
            <TabOne navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Exercise">
            <TabTwo navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Water">
            <TabThree navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Alcohol">
            <Tab navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Sleep">
            <Tab navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default DayOverview;
