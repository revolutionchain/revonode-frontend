import React from "react"

import ReactApexChart from "react-apexcharts"

const HeatmapChart = () => {

	function generateData(count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = 'w' + (i + 1).toString();
			var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

			series.push({
				x: x,
				y: y,
			});
			i++;
		}
		return series;
	}

	const series = [
		{
			name: 'Metric1',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric2',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric3',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric4',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric5',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric6',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric7',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric8',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
		{
			name: 'Metric9',
			data: generateData(18, {
				min: 0,
				max: 90,
			}),
		},
	];

	var options = {
		
		chart: {
			height: 350,
			type: 'heatmap',
			toolbar: {
				show: !1,
			},
		},
		dataLabels: {
			enabled: !1,
		},
		colors: ['#0576b9'],
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="heatmap"
			height="350"
		/>
	)
}

export default HeatmapChart
