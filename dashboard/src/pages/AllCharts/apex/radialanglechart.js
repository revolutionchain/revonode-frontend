import React from "react"

import ReactApexChart from "react-apexcharts"

const RadialAngleChart = () => {

	const series = [76, 67, 61, 90];

	const options = {

		chart: {
			height: 350,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '45%',
					background: 'transparent',
					image: undefined,
				},
				dataLabels: {
					name: {
						show: !1,
					},
					value: {
						show: !1,
					},
				},
			},
		},
		colors: ['#0ab39c', '#299cdb', '#0576b9', '#0077B5'],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
		legend: {
			show: !0,
			floating: !0,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 15,
			labels: {
				useSeriesColors: !0,
			},
			markers: {
				size: 0,
			},
			formatter: function (seriesName, opts) {
				return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
			},
			itemMargin: {
				vertical: 3,
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						show: !1,
					},
				},
			},
		],
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="radialBar"
			height="350"
		/>
	)
}

export default RadialAngleChart
