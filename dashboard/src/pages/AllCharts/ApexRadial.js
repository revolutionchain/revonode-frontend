import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import "../Dashboard/dashboard.scss"

class ApexRadial extends Component {
  render() {
    var series = [67];
    var options = {
        chart: {
            height: 200,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '13px',
                        color: undefined,
                        offsetY: 60
                    },
                    value: {
                        offsetY: 22,
                        fontSize: '16px',
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        colors: ['#0576b9'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4,
        },
        labels: ['Series A'],
    
    }
    return (
      <React.Fragment>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height="200"
          className="apex-charts"
        />
      </React.Fragment>
    )
  }
}

export default ApexRadial
