import React from "react"

import ReactApexChart from "react-apexcharts"

const BubbleChart = () => {

	function generatebubbleData(baseval, count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
			var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			baseval += 86400000;
			i++;
		}
		return series;
	}

	const series = [
		{
			name: 'Bubble1',
			data: generatebubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble2',
			data: generatebubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble3',
			data: generatebubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
		{
			name: 'Bubble4',
			data: generatebubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
				min: 10,
				max: 60,
			}),
		},
	];

	const options = {
		chart: {
			height: 350,
			type: 'bubble',
			toolbar: {
				show: !1,
			},
		},
		dataLabels: {
			enabled: !1,
		},
		colors: ['#0576b9', '#0ab39c', '#f7b84b', '#f06548'],
		fill: {
			opacity: 0.8,
		},
		xaxis: {
			tickAmount: 12,
			type: 'category',
		},
		yaxis: {
			max: 70,
		},
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="bubble"
			height="350"
		/>
	)
}

export default BubbleChart
