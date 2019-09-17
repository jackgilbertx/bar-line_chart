import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataLine = [
  {
    id: "japan",
    color: "hsl(50, 70%, 50%)",
    data: [
      //add 0.933 for every x value increment
      {
        x: "Apr 19",
        y: 330
      },
      {
        x: "May 19",
        y: 329
      },
      {
        x: "Jun 19",
        y: 336
      },
      {
        x: "Jul 19",
        y: 337
      },
      {
        x: "Aug 19",
        y: 338
      },
      {
        x: "Sep 19",
        y: 342
      },
      {
        x: "Oct 19",
        y: 346
      },
      {
        x: "Nov 19",
        y: 355
      },
      {
        x: "Dec 19",
        y: 357
      }
      // {
      //   x: null,
      //   y: null
      // }
    ]
  }
  // {
  //   id: "china",
  //   color: "hsl(50, 70%, 50%)",
  //   data: [
  //     //add 0.933 for every x value increment
  //     {
  //       x: 2,
  //       y: 222
  //     },
  //     {
  //       x: 244,
  //       y: 329
  //     },
  //     {
  //       x: 255,
  //       y: 336
  //     }
  //   ]
  // }
];
const data = [
  {
    country: "Apr 19",
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
    country: "Jun 19",
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
    country: "Jul 19",
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
    country: "Aug 19",
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
    country: "Sep 19",
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
    country: "Oct 19",
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
    country: "Nov 19",
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
    country: "Dec 19",
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
