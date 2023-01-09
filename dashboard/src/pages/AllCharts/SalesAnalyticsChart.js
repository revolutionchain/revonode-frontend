import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

export default class SalesAnalyticsChart extends Component {
    render() {
        var series = [
            {
                name: 'Income',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
            },
            {
                name: 'Sales',
                type: 'column',
                data: [19, 8, 26, 21, 18, 36, 30, 28, 40, 39, 15]
            },
            {
                name: 'Conversation Ratio',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
            },
            {
                name: 'Users',
                type: 'line',
                data: [9, 11, 13, 12, 10, 8, 6, 9, 14, 17, 22]
            }
        ];
        var options = {
            chart: {
                height: 338,
                type: 'line',
                stacked: !1,
                offsetY: -5,
                toolbar: {
                    show: !1
                }
            },
            stroke: {
                width: 1,
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            colors: ['#2cb57e', '#0576b9', '#dfe2e6', '#f1b44c'],
            fill: {
                opacity: [0.85, 1, 0.25, 1],
                gradient: {
                    inverseColors: !1,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
            markers: {
                size: 0
            },

            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
            },
            tooltip: {
                shared: !0,
                intersect: !1,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            },
            grid: {
                borderColor: '#f1f1f1',
                padding: {
                    bottom: 15
                }
            }
        }
        return (
            <React.Fragment>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height="340"
                    dir="ltr"
                    className="apex-charts"
                />
            </React.Fragment>
        )
    }
}
