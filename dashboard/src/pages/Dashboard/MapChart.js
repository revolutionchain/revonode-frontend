import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoPatterson } from "d3-geo-projection";
//import {d3, map} from "@d3/world-map"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  const width = 800
  const height = 600

  const projection = geoPatterson().translate([width / 2, height / 2]).scale(100)
  return (
    <ComposableMap projection={projection}>
      <Geographies geography={geoUrl} style={{default: {fill: "#CCCCCC",
          stroke: "#000000"}}}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
