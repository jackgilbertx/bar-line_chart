import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import "./styles.css";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const App = ({ data, dataLine }) => {
  console.log(dataLine[0].data.length - 1);
  console.log(dataLine);
  const dataX = [0.52, 1.453, 2.386, 3.319, 4.252, 5.185, 6.118, 7.051, 7.984];

  dataLine[0].data.forEach((dat, index) => {
    dat.x = dataX[index];
  });

  dataLine[0].data.push({ x: 8.987, y: null });
  console.log(dataLine[0].data);
  const tickTheme = {
    textColor: "#eee"
  };
  return (
    <div className="container">
      <div className="bar">
        <div className="title">Monthly Chart</div>
        <ResponsiveBar
          data={data}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          theme={tickTheme}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: "fries"
              },
              id: "dots"
            },
            {
              match: {
                id: "sandwich"
              },
              id: "lines"
            }
          ]}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 0
          }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 4,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "MERTIC TONS",
            legendPosition: "middle",
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={'{ from: "color", modifiers: [["darker", 1.6]] }'}
          legends={[
            {
              itemTextColor: "#eee",
              dataFrom: "keys",
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 28,
              translateY: 63,
              itemsSpacing: 4,
              itemWidth: 91,
              itemHeight: 61,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 16,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <div className="line">
        <ResponsiveLine
          curve="monotoneX"
          data={dataLine}
          theme={tickTheme}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{
            type: "linear",
            min: 0,
            max: "auto"
          }}
          yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
          axisTop={null}
          axisRight={{
            orient: "right",
            tickColor: "#eee",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 0
          }}
          axisBottom={null}
          axisRight={{
            orient: "left",
            tickColor: "#eee",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "US$ PER TON",
            legendOffset: -10,
            legendPosition: "middle"
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>
    </div>
  );
};

export default App;
