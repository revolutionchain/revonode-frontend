import React from "react"

import ReactApexChart from "react-apexcharts"

const TimelinedistributedChart = () => {

	const series = [
		{
			name: 'Bob',
			data: [
				{
					x: 'Design',
					y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()],
				},
				{
					x: 'Code',
					y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
				},
				{
					x: 'Code',
					y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()],
				},
				{
					x: 'Test',
					y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()],
				},
				{
					x: 'Test',
					y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()],
				},
				{
					x: 'Validation',
					y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()],
				},
				{
					x: 'Design',
					y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()],
				},
			],
		},
		{
			name: 'Joe',
			data: [
				{
					x: 'Design',
					y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
				},
				{
					x: 'Test',
					y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()],
				},
				{
					x: 'Code',
					y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()],
				},
				{
					x: 'Deployment',
					y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()],
				},
				{
					x: 'Design',
					y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()],
				},
			],
		},
		{
			name: 'Dan',
			data: [
				{
					x: 'Code',
					y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()],
				},
				{
					x: 'Validation',
					y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()],
				},
			],
		},
	];


	const options = {
		chart: {
			height: 350,
			type: 'rangeBar',
			toolbar: {
				show: !1,
			},
		},
		plotOptions: {
			bar: {
				horizontal: !0,
				barHeight: '80%',
			},
		},
		xaxis: {
			type: 'datetime',
		},
		stroke: {
			width: 1,
		},
		fill: {
			type: 'solid',
			opacity: 0.8,
			colors: ['#0576b9', '#0ab39c', '#f06548'],
		},
		legend: {
			position: 'top',
			horizontalAlign: 'center',
		},
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="rangeBar"
      height="350"
    />
  )
}

export default TimelinedistributedChart