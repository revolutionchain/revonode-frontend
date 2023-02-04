import React, { useEffect, useState } from "react"
import { Card, CardBody, CardTitle, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import Flag from 'react-world-flags'

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getLatestTransaction } from "../../store/actions";
import MapChart from "./MapChart";

const PeersInfoWidget = (props) => {

    const [countriesData, setCountriesData] = useState(false);
    useEffect(() => {
        props.onLatestTransactions();
    }, [props.onLatestTransactions]);


    useEffect(() => {

        let countryCounter = {};
        props.ipLocationData.map(e => {
          if (countryCounter[e.country.iso_code]) {
            countryCounter = {
              ...countryCounter,
              [e.country.iso_code]: countryCounter[e.country.iso_code] + 1
            }
          } else {
            countryCounter = {
              ...countryCounter,
              [e.country.iso_code]: 1
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
    }, [props.ipLocationData])

    const [orderedCountries, setOrderedCountries] = useState(false);
    const [peersAmount, setPeersAmount] = useState(1);

    const sortCountries = () => {
        let countries = countriesData;
        
        countries.sort(function (a, b) {
            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });
        let peersCount = 0;
        countries.map((c,i) => {            
            const currentCountry = props.ipLocationData.find(d => d.country.iso_code === c.country_code);
            c.country = currentCountry.country.names.en;
            peersCount = peersCount + c.value;
        });
       
        setPeersAmount(peersCount);
        setOrderedCountries(countries);
    }

    countriesData && !orderedCountries && sortCountries();

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4">Global Peer Distribution</CardTitle>
                    <hr />
                        <div className="mapchart-container mt-1 col-xl-12 col-12">
                            {countriesData && <MapChart countriesData={countriesData} />}
                            <div className="col-xl-6 col-12">
                                {
                                    
                                    orderedCountries && orderedCountries.map((c,i) => {
                                        if(c.value >= 1){
                                            return (
                                                <div className="col-xl-12 col-12">
                                                    <div className="d-flex col-12 col-xl-9 mb-2" style={{borderBottom: "1px solid #CCC"}}>
                                                        <div style={{textAlign: "center"}} className="col-xl-1 col-1">
                                                            {i+1 + "."}
                                                        </div>
                                                        <div className="col-xl-2 col-2" style={{textAlign: "center"}}>
                                                            <Flag code={c.country_code} height="12" />  
                                                        </div>
                                                        <div className="col-xl-5 col-5">
                                                            {c.country}
                                                        </div>
                                                        <div style={{textAlign: "right"}} className="col-xl-1 col-1">
                                                            {c.value}
                                                        </div>
                                                        <div style={{textAlign: "center"}} className="col-xl-3 col-3">
                                                            {((c.value * 100) / peersAmount).toFixed(2) + "%"}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }                     
                            </div>
                        </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

PeersInfoWidget.propTypes = {
    latestTransaction: PropTypes.array,
    onLatestTransactions: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
    latestTransaction: Dashboard.latestTransaction,
});

const mapDispatchToProps = (dispatch) => ({
    onLatestTransactions: () => dispatch(getLatestTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeersInfoWidget);
