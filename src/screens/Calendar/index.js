// @flow
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
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
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import { Calendar as MonthCalendar } from "react-native-calendars";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");
type Props = {
  navigation: () => void,
  day: string
};
class Calendar extends Component {
  state: {
    date: Object,
    selected: string
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date(),
      selected: ""
    };
  }

  onDateChange(date: Object) {
    this.setState({ date });
  }
  onDayPress(day: any) {
    this.setState({
      selected: day.dateString
    });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Right />
        </Header>

        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        >
          <View style={styles.bg}>
            <MonthCalendar
              onDayPress={e => this.onDayPress(e)}
              disableMonthChange={true}
              markedDates={{ [this.state.selected]: { selected: true } }}
              theme={{
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#01cca1",
                selectedDayBackgroundColor: "#01cca1",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#01cca1",
                dayTextColor: "#2d4150",
                textDisabledColor: "#d9e1e8",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "#01cca1",
                monthTextColor: "#000"
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Calendar;
