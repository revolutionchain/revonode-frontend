import React from "react"

import ReactApexChart from "react-apexcharts"

const PolarareaChart = () => {

	const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

	const options = {
		
		chart: {
			type: 'polarArea',
			height: 350,
		},
		stroke: {
			colors: ['#fff'],
		},
		fill: {
			opacity: 0.8,
		},
		colors: ['#0576b9', '#0ab39c', '#299cdb', '#f7b84b', '#f06548', '#323a46', '#f672a7', '#6559cc', '#74788d'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	};
	return (
		<ReactApexChart
			options={options}
			series={series}
			type="polarArea"
			height="350"
		/>
	)
}

export default PolarareaChart
