import React from "react";
import ReactApexChart from "react-apexcharts";

const Apaexlinecolumn = () => {
  var series = [{
    name: 'Net Profit',
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
  }, {
    name: 'Revenue',
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
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
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#0576b9', '#0ab39c', '#f06548'],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    grid: {
      borderColor: '#f1f1f1',
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} className="apex-charts"
      dir="ltr" />
  );
};

export default Apaexlinecolumn;
