// @flow
import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  Platform,
  Slider,
  Dimensions,
  View as RNView
} from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Body,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import Modal from "react-native-modalbox";
import Carousel from "react-native-carousel-view";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

type Props = {
  navigation: () => void
};
class Story extends Component {
  state = {
    animationType: "slideInDown",
    open: false,
    value: 0
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      animationType: "slideInDown",
      open: false,
      value: 0
    };
  }

  modalO() {
    this.setState({ open: true });
  }

  modalX() {
    this.setState({ open: false });
  }

  render() {
    let d = Dimensions.get("window");
    const { height, width } = d;

    return (
      <Container>
        <Header
          style={[
            styles.headerStyle,
            this.state.open ? styles.headerModalStyle : styles.headerStyle
          ]}
        >
          <Body
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop:
                Platform.OS === "ios" && (height === 812 || width === 812)
                  ? 20
                  : 0
            }}
          >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon active name="arrow-back" style={styles.headerIcons} />
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Comments")}
            >
              <Icon name="chatboxes" style={styles.headerIcons} />
            </Button>
            <Button transparent onPress={() => this.modalO()}>
              <Text style={styles.headerTextIcon}>Aa</Text>
            </Button>
            <Button transparent>
              <Icon name="bookmarks" style={styles.headerIcons} />
            </Button>
            <Button transparent>
              <Icon name="download" style={styles.headerIcons} />
            </Button>
          </Body>
        </Header>

        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Image
                style={styles.weekPoster}
              />
            </View>
            <View style={{ backgroundColor: "#fff" }}>
              <View style={styles.weekContent}>
                <Grid style={{ paddingBottom: 20 }}>
                  <Col style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                      <Text style={styles.weekLink}>CDC</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.weekLink}>1h ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.weekTypeView}>
                      <Text style={styles.weekTypeText}>ENVIRONMENT</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
                <Text style={styles.weekHeader}>
                 
                </Text>
              </View>

              <View style={{ padding: 20 }}>
                <View style={styles.weekCommentContainer}>
                  <Text style={styles.weekComment}>
                  
                  </Text>
                  <Text style={styles.weekComment}>-</Text>
                </View>
                <Text style={styles.weekHeader}>
                 
                </Text>
                <View style={{ paddingBottom: 15 }}>
                  <Text style={styles.weekHeader}>
                    
                  </Text>
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Text style={styles.weekHeader}>
                 
                  </Text>
                </View>
              </View>

              <View style={styles.wrapper}>
                <Carousel
                  width={deviceWidth}
                  height={230}
                  indicatorAtBottom
                  indicatorSize={Platform.OS === "android" ? 15 : 10}
                  indicatorColor="#FFF"
                  indicatorOffset={10}
                  animate={false}
                >
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.weekPoster}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.weekPoster}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.weekPoster}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.weekPoster}
                    />
                  </RNView>
                </Carousel>
              </View>

              <View style={{ alignSelf: "center" }}>
                <Button
                  transparent
                  iconRight
                  onPress={() => this.props.navigation.goBack()}
                  textStyle={{ color: "#222", fontWeight: "700" }}
                >
                  <Text>STORY</Text>
                  <Icon name="ios-arrow-forward" style={styles.forwardBtn} />
                </Button>
              </View>
            </View>
          </View>
        </Content>

        <Modal
          position="top"
          entry="top"
          isOpen={this.state.open}
          onOpened={() => this.setState({ open: true })}
          onClosed={() => this.setState({ open: false })}
          backButtonClose
          style={styles.modal}
        >
          <View>
            <View style={styles.modalContentBox}>
              <Grid style={{ flex: 10, padding: 20 }}>
                <Col>
                  <Button transparent style={styles.dayButton}>
                    <Icon name="ios-sunny-outline" />
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.nightButton}>
                    <Icon name="ios-moon-outline" style={{ color: "#fff" }} />
                  </Button>
                </Col>
              </Grid>
            </View>
            <View style={styles.modalContentBox}>
              <Grid style={styles.modalContentGrid1}>
                <Col>
                  <Text style={styles.modalContentGridText}>
                    CHOOSE TYPESPACE
                  </Text>
                </Col>
                <Col>
                  <Button
                    transparent
                    iconRight
                    style={{ marginTop: -5, alignSelf: "center" }}
                  >
                    <Text style={{ color: "#FFF" }}>SANS SERIF</Text>
                    <Icon name="ios-arrow-forward" style={{ fontSize: 28 }} />
                  </Button>
                </Col>
              </Grid>
            </View>
            <View>
              <Grid style={styles.modalContentGrid2}>
                <Col>
                  <Text style={styles.modalSmallText}>A</Text>
                </Col>
                <Col style={{ alignSelf: "flex-end" }}>
                  <Text style={styles.modalLargeText}>A</Text>
                </Col>
              </Grid>
              <Slider
                {...this.props}
                minimumTrackTintColor="#fff"
                thumbTintColor="#fff"
                onValueChange={value => this.setState({ value })}
              />
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

export default Story;
