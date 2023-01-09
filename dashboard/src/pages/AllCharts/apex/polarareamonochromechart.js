import React from "react"

import ReactApexChart from "react-apexcharts"

const PolarareaMonochromeChart = () => {

	const series = [42, 47, 52, 58, 65];

	const options = {
		
		chart: {
			height: 380,
			type: 'polarArea',
		},
		labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
		fill: {
			opacity: 1,
		},
		stroke: {
			width: 1,
			colors: undefined,
		},
		yaxis: {
			show: !1,
		},
		legend: {
			position: 'bottom',
		},
		plotOptions: {
			polarArea: {
				rings: {
					strokeWidth: 0,
				},
			},
		},
		theme: {
			monochrome: {
				enabled: !0,
				color: '#299cdb',
				shadeTo: 'light',
				shadeIntensity: 0.6,
			},
		},
	};
return (
  <ReactApexChart
	options={options}
	series={series}
	type="polarArea"
	height="380"
  />
)
}

export default PolarareaMonochromeChart
