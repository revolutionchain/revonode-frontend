import React from "react"

import ReactApexChart from "react-apexcharts"

const TimelineChart = () => {

	const series = [
		{
			data: [
				{
					x: 'Code',
					y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()],
				},
				{
					x: 'Test',
					y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
				},
				{
					x: 'Validation',
					y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
				},
				{
					x: 'Deployment',
					y: [new Date('2019-03-12').getTime(), new Date('2019-03-18').getTime()],
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
				barHeight: '24%',
			},
		},
		colors: ['#0576b9'],
		xaxis: {
			type: 'datetime',
		},
	};

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="rangeBar"
			height="350"
		/>
	)
}

export default TimelineChart