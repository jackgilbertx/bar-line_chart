import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataLine = [
  {
    id: "japan",
    color: "blue",
    data: [
      //add 0.933 for every x value increment
      {
        x: 0.52,
        y: 330
      },
      {
        x: 1.453,
        y: 329
      },
      {
        x: 2.386,
        y: 336
      },
      {
        x: 3.319,
        y: 337
      },
      {
        x: 4.252,
        y: 338
      },
      {
        x: 5.185,
        y: 342
      },
      {
        x: 6.118,
        y: 346
      },
      {
        x: 7.051,
        y: 355
      },
      {
        x: 7.984,
        y: 357
      },
      {
        x: 8.987,
        y: null
      }
    ]
  }
];

const data = [
  {
    country: "April 19",
    "hot dog": 88,
    "hot dogColor": "hsl(224, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(89, 70%, 50%)",
    sandwich: 166,
    sandwichColor: "hsl(7, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(240, 70%, 50%)"
  },
  {
    country: "May 19",
    "hot dog": 88,
    "hot dogColor": "hsl(224, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(89, 70%, 50%)",
    sandwich: 166,
    sandwichColor: "hsl(7, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(240, 70%, 50%)"
  },
  {
    country: "June 19",
    "hot dog": 88,
    "hot dogColor": "hsl(224, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(89, 70%, 50%)",
    sandwich: 166,
    sandwichColor: "hsl(7, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(240, 70%, 50%)"
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
    kebabColor: "hsl(269, 70%, 50%)"
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
    kebabColor: "hsl(37, 70%, 50%)"
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
    kebabColor: "hsl(359, 70%, 50%)"
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
    kebabColor: "hsl(118, 70%, 50%)"
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
    kebabColor: "hsl(268, 70%, 50%)"
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
    kebabColor: "hsl(241, 70%, 50%)"
  }
];

ReactDOM.render(
  <App dataLine={dataLine} data={data} />,
  document.getElementById("root")
);
