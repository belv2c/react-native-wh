// @flow
import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./style";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});
class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/sidebar-transparent.png")}
          style={styles.background}
        >
          <Content style={styles.drawerContent}>
          <ListItem
              button
              onPress={() => {
                navigation.navigate("DayOverview");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Today</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("WeekOverview");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Week Overview</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                navigation.navigate("MonthOverview");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Month Overview</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Calendar");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Calendar</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Contacts");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Contacts</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Profile");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Profile</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Settings");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Settings</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Resources");
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>Resources</Text>
            </ListItem>
          </Content>
          <View style={styles.logoutContainer}>
            <View style={styles.logoutbtn} foregroundColor={"white"}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.dispatch(resetAction);
                    }}
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: "transparent"
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      LOG OUT
                    </Text>
                    
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SideBar;
