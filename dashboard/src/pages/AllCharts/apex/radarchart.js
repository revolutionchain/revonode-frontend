import React from "react"

import ReactApexChart from "react-apexcharts"

const RadarChart = () => {
	const series = [
		{
			name: 'Series 1',
			data: [80, 50, 30, 40, 100, 20],
		},
	];

	const options = {

		chart: {
			height: 350,
			type: 'radar',
			toolbar: {
				show: !1,
			},
		},
		colors: ['#0576b9'],
		xaxis: {
			categories: ['January', 'February', 'March', 'April', 'May', 'June'],
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

export default RadarChart
