import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total Peers',
        text: '0 New Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-user text-secondary',
        secondIcon: 'bx bx-plus-medical text-primary',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Most Popular Client Version',
        text: '0 Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-star text-warning',
        secondIcon: '',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Most Popular Country',
        text: '0 Peers',
        count: '0',
        dollor: false,
        icon: 'bx bx-world text-primary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Most Populars ISP',
        text: '0 Peers',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-server text-danger',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'Total Traffic (GB)',
        text: 'Upload',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-apple-icloud text-info',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    }
]


const Widget = props => {


    const [widgetState, setWidgetState] = useState(false);

    useEffect(() => {


        let countryCounter = {};
        let ispCounter = {};
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

            if (ispCounter[e.traits.isp]) {
                ispCounter = {
                    ...ispCounter,
                    [e.traits.isp]: ispCounter[e.traits.isp] + 1
                }
            } else {
                ispCounter = {
                    ...ispCounter,
                    [e.traits.isp]: 1
                }
            }

        })

        let ispValuesArray = [];

        Object.keys(ispCounter).map(e => {
            ispValuesArray.push({
                isp: e,
                value: ispCounter[e]
            })
        })

        ispValuesArray.sort(function (a, b) {
            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });

        let countryValuesArray = [];

        Object.keys(countryCounter).map(e => {
            countryValuesArray.push({
                country_code: e,
                value: countryCounter[e]
            })
        })

        let countries = countryValuesArray;

        countries.sort(function (a, b) {
            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });
        countries.map((c, i) => {
            const currentCountry = props.ipLocationData.find(d => d.country.iso_code === c.country_code);
            c.country = currentCountry.country.names.en;
        });


        let peersCount = [];
        let totalTraffic = 0;
        let uploadTraffic = 0;
        let downloadTraffic = 0;
        props.peersData.map((e, i) => {
            uploadTraffic = uploadTraffic + e.bytessent;
            downloadTraffic = downloadTraffic + e.bytesrecv;


            let target = peersCount.find(elem => elem?.name == e.subver.split("/")[1].split("(")[0]);
            if (target) {
                target.count = target.count + 1;
            } else {
                peersCount.push({ name: e.subver.split("/")[1].split("(")[0], count: 1 });
            }
            if (i == props.peersData.length - 1) {
                totalTraffic = totalTraffic + uploadTraffic + downloadTraffic;
            }
        });



        peersCount.sort(function (a, b) {
            if (a.count < b.count) {
                return 1;
            }
            if (a.count > b.count) {
                return -1;
            }
            return 0;
        });


        widget[0].count = props.peersData.length;
        widget[1].count = peersCount[0].name;
        widget[1].text = peersCount[0].count + " Peers";
        widget[2].count = countries[0].country;
        widget[2].text = countries[0].value + " Peers";
        widget[3].count = ispValuesArray[0].isp;
        widget[3].text = ispValuesArray[0].value + " Peers"
        widget[4].count = (totalTraffic / 1073741824).toFixed(3) + " GB";
        widget[4].text = ((uploadTraffic * 100) / totalTraffic).toFixed(2) + "% Upload";

        setWidgetState(widget);

    }, [props.peersData])

    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} className="d-flex flex-wrap">
                    {widgetState && widgetState.map((widget, key) => (
                        <Col xs={12} sm={6} md={2} xl={2} key={key}>
                            <Card style={{ minHeight: "140px" }}>
                                <CardBody style={{ position: "relative", maxHeight: "100px" }}>
                                    {/*
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>*/}
                                    <div>
                                        <p style={{ fontSize: '14px' }} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                    </div>
                                    <div style={{ display: "flex", height: "100%", position: "absolute", top: "0", alignItems: "center", width: "100%" }}>
                                        <h4 className="mb-1 mt-1">
                                            {/*widget.dollor === true ? '' : ''*/}
                                            <span className="counter-value" data-target="58425">
                                                {widget.count}
                                            </span></h4>
                                        <p style={{ position: "absolute", bottom: "0", marginBottom: "0" }} className="text-muted">
                                            <span className={""}>

                                                {/*widget.upArrow === true ?
                                            <i className="mdi mdi-arrow-up-bold me-1"></i> : <i className="mdi mdi-arrow-down-bold me-1"></i>
                                        */}
                                                <i className={widget.secondIcon}></i>{" " + widget.text}
                                            </span>
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;
