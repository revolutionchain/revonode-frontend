import React from "react"

import ReactApexChart from "react-apexcharts"

const TreemapChart = () => {

	const series = [
		{
			name: 'Desktops',
			data: [
				{
					x: 'ABC',
					y: 10,
				},
				{
					x: 'DEF',
					y: 60,
				},
				{
					x: 'XYZ',
					y: 41,
				},
			],
		},
		{
			name: 'Mobile',
			data: [
				{
					x: 'ABCD',
					y: 10,
				},
				{
					x: 'DEFG',
					y: 20,
				},
				{
					x: 'WXYZ',
					y: 51,
				},
				{
					x: 'PQR',
					y: 30,
				},
				{
					x: 'MNO',
					y: 20,
				},
				{
					x: 'CDE',
					y: 30,
				},
			],
		},
	];

	const options = {

		legend: {
			show: !1,
		},
		chart: {
			height: 350,
			type: 'treemap',
			toolbar: {
				show: !1,
			},
		},
		colors: ['#0576b9', '#0ab39c'],
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="treemap"
			height="350"
		/>
	)
}

export default TreemapChart
