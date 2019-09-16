import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataLine = [
  {
    id: "japan",
    color: "hsl(302, 70%, 50%)",
    data: [
      {
        x: 0,
        y: 50
      },
      {
        x: 1,
        y: 55
      },
      {
        x: 2,
        y: 70
      },
      {
        x: 3,
        y: 75
      },
      {
        x: 3,
        y: 80
      },
      {
        x: 4,
        y: 90
      },
      {
        x: 5,
        y: 95
      }
    ]
  }
];

const data = [
  {
    country: "June 19",
    "hot dog": 88,
    "hot dogColor": "hsl(224, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(89, 70%, 50%)",
    sandwich: 166,
    sandwichColor: "hsl(7, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(240, 70%, 50%)",
    fries: 172,
    friesColor: "hsl(112, 70%, 50%)",
    donut: 180,
    donutColor: "hsl(277, 70%, 50%)"
  },
  {
    country: "July 19",
    "hot dog": 61,
    "hot dogColor": "hsl(86, 70%, 50%)",
    burger: 13,
    burgerColor: "hsl(39, 70%, 50%)",
    sandwich: 5,
    sandwichColor: "hsl(112, 70%, 50%)",
    kebab: 84,
    kebabColor: "hsl(269, 70%, 50%)",
    fries: 135,
    friesColor: "hsl(46, 70%, 50%)",
    donut: 197,
    donutColor: "hsl(39, 70%, 50%)"
  },
  {
    country: "August 19",
    "hot dog": 57,
    "hot dogColor": "hsl(197, 70%, 50%)",
    burger: 154,
    burgerColor: "hsl(322, 70%, 50%)",
    sandwich: 185,
    sandwichColor: "hsl(320, 70%, 50%)",
    kebab: 56,
    kebabColor: "hsl(37, 70%, 50%)",
    fries: 110,
    friesColor: "hsl(40, 70%, 50%)",
    donut: 52,
    donutColor: "hsl(357, 70%, 50%)"
  },
  {
    country: "September 19",
    "hot dog": 3,
    "hot dogColor": "hsl(255, 70%, 50%)",
    burger: 116,
    burgerColor: "hsl(277, 70%, 50%)",
    sandwich: 22,
    sandwichColor: "hsl(225, 70%, 50%)",
    kebab: 143,
    kebabColor: "hsl(359, 70%, 50%)",
    fries: 158,
    friesColor: "hsl(37, 70%, 50%)",
    donut: 146,
    donutColor: "hsl(298, 70%, 50%)"
  },
  {
    country: "October 19",
    "hot dog": 64,
    "hot dogColor": "hsl(16, 70%, 50%)",
    burger: 94,
    burgerColor: "hsl(314, 70%, 50%)",
    sandwich: 15,
    sandwichColor: "hsl(69, 70%, 50%)",
    kebab: 125,
    kebabColor: "hsl(118, 70%, 50%)",
    fries: 154,
    friesColor: "hsl(81, 70%, 50%)",
    donut: 197,
    donutColor: "hsl(301, 70%, 50%)"
  },
  {
    country: "November 19",
    "hot dog": 31,
    "hot dogColor": "hsl(123, 70%, 50%)",
    burger: 18,
    burgerColor: "hsl(293, 70%, 50%)",
    sandwich: 2,
    sandwichColor: "hsl(100, 70%, 50%)",
    kebab: 62,
    kebabColor: "hsl(268, 70%, 50%)",
    fries: 23,
    friesColor: "hsl(205, 70%, 50%)",
    donut: 82,
    donutColor: "hsl(173, 70%, 50%)"
  },
  {
    country: "December 19",
    "hot dog": 119,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 59,
    burgerColor: "hsl(176, 70%, 50%)",
    sandwich: 45,
    sandwichColor: "hsl(95, 70%, 50%)",
    kebab: 140,
    kebabColor: "hsl(241, 70%, 50%)",
    fries: 197,
    friesColor: "hsl(332, 70%, 50%)",
    donut: 131,
    donutColor: "hsl(333, 70%, 50%)"
  }
];

ReactDOM.render(
  <App dataLine={dataLine} data={data} />,
  document.getElementById("root")
);
