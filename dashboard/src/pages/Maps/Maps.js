import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';

import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"
import { connect } from "react-redux"
import { lightMapData } from "./LightData"
import { Card, CardBody, CardTitle, Col, Row, CardSubtitle } from "reactstrap"
import Vector from "./Vectormap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const LoadingContainer = () => <div>Loading...</div>

class MapsGoogle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this)
    }

    onMarkerClick() {
        alert("You clicked in this marker")
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Maps | Samply - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Maps" breadcrumbItem="Maps" />

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="h4">Google Markers</CardTitle>
                                        <p className="card-title-desc">
                                            Example of google maps.
                                        </p>
                                        <div
                                            id="gmaps-markers"
                                            className="gmaps"
                                            style={{ position: "relative" }}
                                        >
                                            <Map
                                                google={this.props.google}
                                                style={{ width: "100%", height: "100%" }}
                                                zoom={14}
                                            >
                                                <Marker
                                                    title={"The marker`s title will appear as a tooltip."}
                                                    name={"SOMA"}
                                                    position={{ lat: 37.778519, lng: -122.40564 }}
                                                />
                                                <Marker name={"Dolores park"} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="h4">Google Overlays</CardTitle>
                                        <p className="card-title-desc">
                                            Example of google maps.
                                        </p>
                                        <div
                                            id="gmaps-overlay"
                                            className="gmaps"
                                            style={{ position: "relative" }}
                                        >
                                            <Map
                                                google={this.props.google}
                                                zoom={14}
                                                style={{ width: "100%", height: "100%" }}
                                                initialCenter={{
                                                    lat: 40.854885,
                                                    lng: -88.081807,
                                                }}
                                            >
                                                <Marker onClick={this.onMarkerClick} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="h4">Google Basic</CardTitle>
                                        <p className="card-title-desc">
                                            Example of google maps.
                                        </p>
                                        <div
                                            id="gmaps-markers"
                                            className="gmaps"
                                            style={{ position: "relative" }}
                                        >
                                            <Map
                                                google={this.props.google}
                                                zoom={14}
                                                style={{ width: "100%", height: "100%" }}
                                            >
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="h4">Ultra Light</CardTitle>
                                        <p className="card-title-desc">
                                            Example of google maps.
                                        </p>
                                        <div
                                            id="gmaps-overlay"
                                            className="gmaps"
                                            style={{ position: "relative" }}
                                        >
                                            <Map
                                                google={this.props.google}
                                                zoom={14}
                                                styles={lightMapData.Data}
                                                style={{ width: "100%", height: "100%" }}
                                            >
                                                <Marker onClick={this.onMarkerClick} />
                                                <InfoWindow>
                                                    <div>
                                                        <h1>{this.state.selectedPlace.name}</h1>
                                                    </div>
                                                </InfoWindow>
                                            </Map>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">World Vector Map</h4>
                                        <p className="card-title-dsec">Example of united kingdom vector maps.</p>
                                        <div id="uk-vectormap" style={{ height: '400px' }}>
                                            <Vector
                                                value="world_mill"
                                                width="500"
                                                color="rgb(98, 110, 212)"
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">USA Vector Map</h4>
                                        <p className="card-title-dsec">Example of united states of ameria vector maps.</p>
                                        <div id="canada-vectormap" style={{ height: '400px' }}>
                                            <Vector
                                                value="us_aea"
                                                width="500"
                                                color="rgb(98, 110, 212)"
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Asia Vector Map</CardTitle>
                                        <CardSubtitle className="mb-3">
                                            Example of vector map.
                                        </CardSubtitle>

                                        <div id="chicago" className="vector-map-height" style={{ height: '400px' }}>
                                            <Vector
                                                value="asia_mill"
                                                width="500"
                                                color="rgb(98, 110, 212)"
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

MapsGoogle.propTypes = {
    google: PropTypes.object
}

export default connect(
    null,
    {}
)(
    GoogleApiWrapper({
        apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
        LoadingContainer: LoadingContainer,
        v: "3",
    })(MapsGoogle)
)
