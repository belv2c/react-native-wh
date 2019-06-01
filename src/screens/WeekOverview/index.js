// @flow
import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  View as RNView
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Spinner
} from "native-base";

import { Grid, Col } from "react-native-easy-grid";
import Carousel from "react-native-carousel-view";

import { itemsFetchData } from "../../actions";
import datas from "./data.json";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");

class WeekOverview extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => this.props.navigation.navigate("Story")}
      >
        <View style={styles.newsContent}>
          <Text numberOfLines={2} style={styles.newsHeader}>
            {item.headline}
          </Text>
          <Grid style={styles.swiperContentBox}>
            <Col style={{ flexDirection: "row" }}>
              <Text style={styles.newsLink}>{item.link}</Text>
              <Icon name="ios-time-outline" style={styles.timeIcon} />
              <Text style={styles.newsLink}>{item.time}</Text>
            </Col>
            <Col>
              <TouchableOpacity
                style={styles.newsTypeView}
                onPress={() => this.props.navigation.navigate("Channel")}
              >
                <Text style={styles.newsTypeText}>{item.category}</Text>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
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
          <View style={styles.overviewHeaderContainer}>
            <Text style={styles.overviewHeader}>Your Week</Text>
          </View>
          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
          />
        </Container>
      );
    }
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => ({
  items: state.homeReducer.items,
  hasErrored: state.homeReducer.hasErrored,
  isLoading: state.homeReducer.isLoading
});
export default connect(
  mapStateToProps,
  bindAction
)(WeekOverview);
