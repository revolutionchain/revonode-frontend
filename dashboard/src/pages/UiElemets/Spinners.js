import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Spinners = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="spinner">
                    <CardBody>
                        <h4 className="card-title mb-4">Spinners</h4>

                        <Row>
                            <Col lg={6}>
                                <div>
                                    <div>
                                        <h5 className="font-size-14">Border</h5>
                                        <p className="card-title-desc">
                                            Use the border spinners for a lightweight
                                            loading indicator.
                                        </p>

                                        <div>
                                            <div
                                                className="spinner-border text-primary m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <h5 className="font-size-14">
                                            Color variation
                                        </h5>
                                        <p className="card-title-desc">
                                            Add <code>text-*</code> color for a
                                            Spinner color variation.
                                        </p>

                                        <div>
                                            <div
                                                className="spinner-border text-primary m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-secondary m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-success m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-info m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-warning m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-danger m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                            <div
                                                className="spinner-border text-dark m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <div>
                                        <h5 className="font-size-14">Growing</h5>
                                        <p className="card-title-desc">
                                            Switch to the grow spinner.it does
                                            repeatedly grow Continue!
                                        </p>

                                        <div>
                                            <div
                                                className="spinner-grow text-primary m-1"
                                                role="status"
                                            >
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-2">
                                    <h5 className="font-size-14">
                                        Color Variation
                                    </h5>
                                    <p className="card-title-desc">
                                        Add <code>text-*</code> color for a Spinner
                                        color variation.
                                    </p>

                                    <div>
                                        <div
                                            className="spinner-grow text-secondary m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        <div
                                            className="spinner-grow text-success m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        <div
                                            className="spinner-grow text-info m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        <div
                                            className="spinner-grow text-warning m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        <div
                                            className="spinner-grow text-danger m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                        <div
                                            className="spinner-grow text-dark m-1"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Spinners;