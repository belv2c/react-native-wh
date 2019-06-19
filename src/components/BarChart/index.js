import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

const dayData = [
  { day: "M", health: 20 },
  { day: "T", health: 20 },
  { day: "W", health: 5 },
  { day: "Th", health: 0 },
  { day: "F", health: 22 },
  { day: "Sat", health: 8 },
  { day: "Sun", health: 10 }
];

const healthData = [
    { health: "Mood", value: 20 },
    { health: "Exercise", value: 20 },
    { health: "Water", value: 5 },
    { health: "Alcohol", value: 0 },
    { health: "Sleep", value: 22 }
  ];

export default class BarChart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} height={200} theme={VictoryTheme.material} domainPadding={{ x: 10 }}>
        <VictoryAxis/>
            <VictoryAxis dependentAxis style={{axisLabel: {padding: 35 } }} />
          <VictoryBar data={dayData} x="day" y="health" />
        </VictoryChart>
        <VictoryChart width={350} height={200} theme={VictoryTheme.material} domainPadding={{ x: 10 }}>
        <VictoryAxis/>
            <VictoryAxis dependentAxis style={{axisLabel: {padding: 35 } }} />
          <VictoryBar data={healthData} x="health" y="value" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  }
});
