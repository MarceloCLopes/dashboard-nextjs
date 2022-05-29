import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

//data for bar chart
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales/ month",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

//doughnut chart data set
const data1 = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

export function Content() {
  return (
    <div className="flex flex-wrap ml-52 -md:ml-[70px]">
      <div className="flex p-5 gap-10 -md:grid -md:grid-cols-1 ">
        <div className="flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-3xl -md:w-[350px]">
          <div className="text-[#466946]">
            <h2>Companies</h2>
          </div>
        </div>

        <div className="flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-3xl -md:w-[350px]">
          <div className="text-[#466946]">
            <h2>Customers</h2>
          </div>
        </div>

        <div className="flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-3xl -md:w-[350px]">
          <div className="text-[#466946]">
            <h2>Users</h2>
          </div>
        </div>

        <div className="flex justify-evenly items-center w-[250px] h-[100px] bg-white rounded-[10px] cursor-pointer shadow-3xl -md:w-[350px]">
          <div className="text-[#466946]">
            <h2>Projects</h2>
          </div>
        </div>
      </div>

      {/** charts */}
      <div className="flex justify-evenly items-center ml-5 -md:flex-col -md:justify-center -md:items-center -md:m-auto">
        {/* bar */}
        <div className="ml-5 -md:mt-[60px] -md:ml-[10px] -md:w-[300px] -md:h-[300px]">
          <h2 className="-md:text-center -md:text-2xl -md:mb-5">Sale</h2>
          <Line data={data} width={400} height={400} />
        </div>

        {/* circle */}
        <div className="ml-[120px] -md:mt-[60px] -md:ml-[10px] -md:w-[300px] -md:h-[300px]">
          <h2 className="-md:text-center -md:text-2xl -md:mb-5">
            Customers Arrived
          </h2>
          <Doughnut data={data1} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
