import React, { Component } from "react";
import { View } from "react-native";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory-native";
import { G, Path } from "react-native-svg";

// const pieData = [
//     { health: "Mood", value: 20 },
//     { health: "Exercise", value: 20 },
//     { health: "Water", value: 5 },
//     { health: "Alcohol", value: 0 },
//     { health: "Sleep", value: 22 }
//   ];

class WeekPieChart extends Component {

    render() {
      return (
          <View>
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={100} height={100}
              innerRadius={120}
              cornerRadius={25}
                data={[
                    { health: "Mood", value: 20 },
                    { health: "Exercise", value: 20 },
                    { health: "Water", value: 5 },
                    { health: "Alcohol", value: 0 },
                    { health: "Sleep", value: 22 }
                ]}
            />
        </View>
      );
    }
  }

  export default WeekPieChart;
