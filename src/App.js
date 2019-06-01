// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
import Comments from "./screens/Comments/";
import Channel from "./screens/Channel";
import Story from "./screens/Story";
import WeekOverview from "./screens/WeekOverview/";
import DayOverview from "./screens/DayOverview";
import Sidebar from "./screens/Sidebar";
import MonthOverview from "./screens/MonthOverview";
import Calendar from "./screens/Calendar/";
import Contacts from "./screens/Contacts";
import Resources from "./screens/Resources/";
import Profile from "./screens/Profile/";
import Settings from "./screens/Settings";

const Drawer = DrawerNavigator(
  {
    WeekOverview: { screen: WeekOverview },
    DayOverview: { screen: DayOverview },
    MonthOverview: { screen: MonthOverview },
    Calendar: { screen: Calendar },
    Contacts: { screen: Contacts },
    Resources: { screen: Resources },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "DayOverview",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = StackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    Walkthrough: { screen: Walkthrough },
    Story: { screen: Story },
    Comments: { screen: Comments },
    Channel: { screen: Channel },
    Drawer: { screen: Drawer }
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
