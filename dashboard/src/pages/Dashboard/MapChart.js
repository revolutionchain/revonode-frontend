import React, { useEffect, useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoPatterson } from "d3-geo-projection";
import { scaleLinear } from "d3-scale";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart({ countriesData }) {

  const [minMaxValue, setMinMaxValue] = useState({
    minValue: 0,
    maxValue: 0
  });

  const [mapPropsState, setMapPropsState] = useState({
    customScale: "",
    projection: "",
    width: "",
    height: ""
  })


  useEffect(() => {

    let colorValues = {
      minValue: 0,
      maxValue: 0
    };

    countriesData.map(e => {
      if(colorValues.maxValue < e.value){
        colorValues.maxValue = e.value;
      }
    })
    setMinMaxValue(colorValues);

    const width = 600
    const height = 400
  
  
    const minColor = "#d6f5d6"
    const maxColor = "#145214"
  
    const customScale = scaleLinear()
      .domain([minMaxValue.minValue, minMaxValue.maxValue])
      .range([minColor, maxColor])
  
    const projection = geoPatterson().translate([width / 2, height / 2]).scale(100)

    setMapPropsState({
      customScale: customScale,
      projection: projection,
      width: width,
      height: height
    })

  })

  return (
    mapPropsState.projection && mapPropsState.customScale && <ComposableMap viewBox={`0 0 ${mapPropsState.width} ${mapPropsState.height}`} projection={mapPropsState.projection}>
      {countriesData && <Geographies geography={geoUrl} fill="#FFFFFF" style={{
        default: {
          fill: "#FFFFFF",
          stroke: "#CCCCCC"
        }
      }}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const country = countriesData.find(d => d.country_code === geo.properties["Alpha-2"]);
            return (
              <Geography
                fill={country ? mapPropsState.customScale(country.value) : "#FFFFFF"}
                stroke= "#CCCCCC"
                key={geo.rsmKey}
                geography={geo}
              />)
          })
        }
      </Geographies>}
    </ComposableMap>
  )
}
