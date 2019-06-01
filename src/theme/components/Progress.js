/*global setInterval*/
import React, { Component } from "react";
import { View } from "react-native";
import { VictoryPie, VictoryLabel } from "victory-native";
//import viewStyles from "./view-styles";

class Progress extends Component {
  static navigationOptions = {
    headerTitle: "VictoryPie"
  };


  render() {
    return (
      <View
        style={{marginTop: 120, marginRight: 250}}
        >
        <VictoryPie
          innerRadius={75}
          labelRadius={150}
          style={{ labels: { fontSize: 15 } }}
          data={[
                    { x: "Mood", y: 30 },
                    { x: "Alcohol", y: 10 },
                    { x: "Sleep", y: 20 },
                    { x: "Water", y: 20 },
                    { x: "Exercise", y: 20}
                  ]}
          animate={{ duration: 1500 }}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        />
        <VictoryLabel
          textAnchor="middle"
          x={200} y={200}
          text="100%"
        />

</View>
    );
  }
}



 export default Progress;
 