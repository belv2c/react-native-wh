import React, { Component } from "react";
import { Provider } from "react-redux";
import { StyleProvider } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import App from "../App";
import firebase from "firebase";
import configureStore from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
const storeObj = {};

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
    storeObj.store = this.state.store;
  }

  componentWillMount() {
    const config = {
              apiKey: "AIzaSyCeAE4vIeXobikk907dDEhHz6x2UMXnmrk",
              authDomain: "wholehealthproject-289aa.firebaseapp.com",
              databaseURL: "https://wholehealthproject-289aa.firebaseio.com",
              projectId: "wholehealthproject-289aa",
              storageBucket: "wholehealthproject-289aa.appspot.com",
              messagingSenderId: "1037175639709"
          };

          firebase.initializeApp(config);
          }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store.store}>
          <PersistGate persistor={this.state.store.persistor}>
            <App />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
