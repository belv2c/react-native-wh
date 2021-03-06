import React, { Component } from "react";
import { View } from "react-native";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory-native";
import { G, Path } from "react-native-svg";



class ProgressChart extends Component {
    constructor() {
      super();
      this.state = {
        percent: 25, data: this.getData(0)
      };
    }

    componentDidMount() {
      let percent = 25;
      this.setStateInterval = window.setInterval(() => {
        percent += (Math.random() * 25);
        percent = (percent > 100) ? 0 : percent;
        this.setState({
          percent, data: this.getData(percent)
        });
      }, 2000);
    }

    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }

    getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    render() {
      return (
          <View>
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={400} height={400}
              data={this.state.data}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              style={{
                data: { fill: (d) => {
                  const color = d.y > 30 ? "green" : "red";
                  return d.x === 1 ? color : "transparent";
                }
                }
              }}
            />
            <VictoryAnimation duration={1000} data={this.state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={200} y={200}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 45 }}
                  />
                );
              }}
            </VictoryAnimation>
        </View>
      );
    }
  }

  export default ProgressChart;
