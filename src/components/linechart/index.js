// import React from "react";
// import { Chart } from "react-charts";
// function MyChart() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: "Series 1",
//         data: [
//           { x: 1, y: 10 },
//           { x: 2, y: 10 },
//           { x: 3, y: 10 },
//         ],
//       },
//       {
//         label: "Series 2",
//         data: [
//           { x: 1, y: 10 },
//           { x: 2, y: 10 },
//           { x: 3, y: 10 },
//         ],
//       },
//       {
//         label: "Series 3",
//         data: [
//           { x: 1, y: 10 },
//           { x: 2, y: 10 },
//           { x: 3, y: 10 },
//         ],
//       },
//     ],
//     []
//   );

//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: "linear", position: "bottom" },
//       { type: "linear", position: "left" },
//     ],
//     []
//   );

//   return (
//     <div
//       style={{
//         width: "400px",
//         height: "300px",
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   );
// }

// export default MyChart;

import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

export default class Chart extends Component {
  state = {
    chartData: {
      labels: [
        "Karachi",
        "Lahore",
        "Quetta",
        "Peshawar",
        "Islamabad",
        "Multan",
        "Hyderabad",
      ],
      datasets: [
        {
          label: "Population",
          data: [
            25000000,
            15000000,
            1000000,
            4200000,
            1000000,
            1800000,
            1700000,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    },
    chartData2: {
      labels: [
        "Karachi",
        "Lahore",
        "Quetta",
        "Peshawar",
        "Islamabad",
        "Multan",
        "Hyderabad",
      ],
      datasets: [
        {
          label: "Population",
          data: [
            35000000,
            25000000,
            2000000,
            5200000,
            2000000,
            2800000,
            2700000,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    },
  };
  render() {
    const { chartData, chartData2 } = this.state;
    return (
      <div>
        <Line data={chartData2} data={chartData} options={{}} />
      </div>
    );
  }
}
