import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoPatterson } from "d3-geo-projection";
import { scaleLinear } from "d3-scale";
//import {d3, map} from "@d3/world-map"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart({ipLocationData}) {
  const width = 600
  const height = 400

  const minValue = 5 // based on the data array above
  const maxValue = 16 // based on the data array above
  
  const minColor = "#CFD8DC"
  const maxColor = "#37474F"

  const customScale = scaleLinear()
    .domain([minValue,maxValue])
    .range([minColor,maxColor])
  
  
  const projection = geoPatterson().translate([width / 2, height / 2]).scale(100)
  return (
    <ComposableMap viewBox={`0 0 ${width} ${height}`} projection={projection}>
      <Geographies geography={geoUrl} fill="#CCC" style={{default: {fill: "#CCCCCC",
          stroke: "#FFFFFF"}}}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const country = ipLocationData.find(d => d.country_code === geo.properties["Alpha-2"]);
            return(
            <Geography             
            fill={country ? customScale(maxValue) : "#CCCCCC"}
            key={geo.rsmKey} 
            geography={geo} 
            />)
          })
        }
      </Geographies>
    </ComposableMap>
  )
}
