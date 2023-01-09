import React from "react"

import ReactApexChart from "react-apexcharts"

const RadarMultipleChart = () => {

	const series = [
		{
			name: 'Series 1',
			data: [80, 50, 30, 40, 100, 20],
		},
		{
			name: 'Series 2',
			data: [20, 30, 40, 80, 20, 80],
		},
		{
			name: 'Series 3',
			data: [44, 76, 78, 13, 43, 10],
		},
	];

	const options = {

		chart: {
			height: 350,
			type: 'radar',
			toolbar: {
				show: !1,
			},
			dropShadow: {
				enabled: !0,
				blur: 1,
				left: 1,
				top: 1,
			},
		},
		colors: ['#0576b9', '#0ab39c', '#f7b84b'],
		stroke: {
			width: 0,
		},
		fill: {
			opacity: 0.4,
		},
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
		},
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="radar"
			height="350"
		/>
	)
}

export default RadarMultipleChart
