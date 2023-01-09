import React from "react";
import ReactApexChart from "react-apexcharts";

const barchart = () => {
  var series = [{
    data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
  }];
  var options = {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0ab39c'],
    grid: {
      borderColor: '#f1f1f1',
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350"
      className="apex-charts"
      dir="ltr"
    />
  );
};

export default barchart;
