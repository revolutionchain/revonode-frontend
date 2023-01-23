import React, { useEffect, useState } from "react"
import { Card, CardBody, CardTitle, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import Flag from 'react-world-flags'

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getLatestTransaction } from "../../store/actions";
import MapChart from "./MapChart";

const LatestTranaction = (props) => {

    const { latestTransaction, onLatestTransactions } = props;

    const [countriesData, setCountriesData] = useState(false);
    useEffect(() => {
        onLatestTransactions();
    }, [onLatestTransactions]);

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
            countries[i] == { ...countries[i], country: currentCountry.country.names.en};
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
                        <div className="d-flex mt-1 col-xl-12">
                            <div className="col-xl-6">
                                {
                                    
                                    orderedCountries && orderedCountries.map((c,i) => {
                                        if(c.value >= 1){
                                            return (
                                                <div className="col-xl-12">
                                                    <div className="d-flex col-xl-8 mb-2" style={{borderBottom: "1px solid #CCC"}}>
                                                        <div style={{textAlign: center}} className="col-xl-2">
                                                            {i+1}
                                                        </div>
                                                        <div className="col-xl-2">
                                                            <Flag code={c.country_code} height="12" />  
                                                        </div>
                                                        <div className="col-xl-4">
                                                            {c.country}
                                                        </div>
                                                        <div style={{textAlign: center}} className="col-xl-2">
                                                            {c.value}
                                                        </div>
                                                        <div style={{textAlign: center}} className="col-xl-2">
                                                            {(c.value * 100) / peersAmount + "%"}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }                     
                            </div>
                            {<MapChart ipLocationData={props.ipLocationData} setCountriesData={setCountriesData} countriesData={countriesData} />}
                        </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

LatestTranaction.propTypes = {
    latestTransaction: PropTypes.array,
    onLatestTransactions: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
    latestTransaction: Dashboard.latestTransaction,
});

const mapDispatchToProps = (dispatch) => ({
    onLatestTransactions: () => dispatch(getLatestTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestTranaction);
