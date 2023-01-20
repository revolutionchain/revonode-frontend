import React, { useEffect, useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoPatterson } from "d3-geo-projection";
import { scaleLinear } from "d3-scale";
//import {d3, map} from "@d3/world-map"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart({ ipLocationData }) {

  const [countriesData, setCountriesData] = useState(false);
  const [minMaxValue, setMinMaxValue] = useState({
    minValue: 0,
    maxValue: 0
  });


  useEffect(() => {

    let countryCounter = {};
    ipLocationData.map(e => {
      if (countryCounter[e.country_code]) {
        countryCounter = {
          ...countryCounter,
          [e.country_code]: countryCounter.country_code + 1
        }
      } else {
        countryCounter = {
          ...countryCounter,
          [e.country_code]: 1
        }
      }
    })

    let countryValuesArray = [];

    Object.keys(countryCounter).map(e => {
      countryValuesArray.push({
        country_code: e,
        value: countryCounter[e]
      })

    })
    setCountriesData(countryValuesArray);

    let colorValues = {
      minValue: countryValuesArray[0]?.value,
      maxValue: 0
    };

    countryValuesArray.map(e => {
      if(colorValues.maxValue < e.value){
        colorValues.maxValue = e.value;
      }
      if(colorValues.minValue > e.value){
        colorValues.minValue = e.value
      }
    })
    setMinMaxValue(colorValues);

  })


  const width = 600
  const height = 400


  const minColor = "#CFD8DC"
  const maxColor = "#37474F"

  const customScale = scaleLinear()
    .domain([minMaxValue.minValue, minMaxValue.maxValue])
    .range([minColor, maxColor])

  const projection = geoPatterson().translate([width / 2, height / 2]).scale(100)
  return (
    <ComposableMap viewBox={`0 0 ${width} ${height}`} projection={projection}>
      {countriesData && <Geographies geography={geoUrl} fill="#CCC" style={{
        default: {
          fill: "#CCCCCC",
          stroke: "#FFFFFF"
        }
      }}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const country = countriesData.find(d => d.country_code === geo.properties["Alpha-2"]);
            return (
              <Geography
                fill={country ? customScale(country.value) : "#CCCCCC"}
                key={geo.rsmKey}
                geography={geo}
              />)
          })
        }
      </Geographies>}
    </ComposableMap>
  )
}
