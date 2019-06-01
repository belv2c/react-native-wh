import React, { Component } from "react";
import { Slider,View, Text, StyleSheet } from "react-native";

export default class ProgressSlider extends Component {
   constructor(props) {
   super(props);
   this.state = {
     //Initial Value of slider
     sliderValue: 15
   };
 }

  render() {
    return (
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={{color: "black"}}>Value of slider is : {this.state.sliderValue}</Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 2,
   padding:20,
   justifyContent: "center"
 }
});
