// @flow
import React, {Component} from "react";
import {Image, ImageBackground, TouchableOpacity, ListView} from "react-native";

import {
  Container,
  Content,
  Text,
  Thumbnail,
  View,
  List,
  ListItem,
  Button,
  Icon,
  Header,
  Left,
  Right
} from "native-base";

import styles from "./styles";
import datas from "./data";

type Props = {
  navigation: () => void
};
class Profile extends Component {
  state: {
    listViewData: any
  };
  props: Props;
  ds: Object;
  constructor(props: Props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      listViewData: datas
    };
  }

  deleteRow(secId: string, rowId: string, rowMap: any) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({listViewData: newData});
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
        <ImageBackground
          style={styles.container}
        >
          <View style={styles.profileInfoContainer}>
            <View style={{alignSelf: "center"}}>
              <Thumbnail
                style={styles.profilePic}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileUser}>Brooke Lewis</Text>
              <Text note style={styles.profileUserInfo}>
                real girl
              </Text>
            </View>
          </View>
          <Content
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#fff"}}
          />
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
