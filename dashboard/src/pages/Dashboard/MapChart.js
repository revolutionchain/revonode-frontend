import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import {d3, map} from "@d3/world-map";
import { geoPattersonRaw } from "d3-geo-projection";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  const width = 800
  const height = 600
  
  const projection = geoPattersonRaw()
  .translate([width / 2, height / 2])
  .scale(150)
  return (
    <ComposableMap projection={projection}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
