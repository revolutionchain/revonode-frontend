import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Progress = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="progress">
                    <CardBody>
                        <h4 className="card-title mb-4">Progress</h4>

                        <Row>
                            <Col lg={6}>
                                <div>
                                    <h5 className="font-size-14">Basic</h5>
                                    <p className="card-title-desc">
                                        Progress components are built with two HTML
                                        elements, some CSS to set the width, and a
                                        few attributes.
                                    </p>

                                    <div className="">
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow="100"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Heights</h5>
                                    <p className="card-title-desc">
                                        We only set a <code>height</code> value on
                                        the <code>.progress-bar</code>, so if you
                                        change that value the outer{" "}
                                        <code>.progress</code>
                                        will automatically resize accordingly.
                                    </p>

                                    <div className="">
                                        <div className="progress progress-sm mb-4">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>

                                        <div className="progress progress-md mb-4">
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: "47%" }}
                                                aria-valuenow="47"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>

                                        <div className="progress progress-lg mb-4">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>

                                        <div
                                            className="progress"
                                            style={{ height: "20px" }}
                                        >
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: "64%" }}
                                                aria-valuenow="64"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={12}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Striped & Animated
                                    </h5>
                                    <p className="card-title-desc">
                                        Add <code>.progress-bar-striped</code>
                                        to any <code>.progress-bar</code> to apply a
                                        stripe via CSS gradient over the progress
                                        bar’s background color.
                                    </p>

                                    <div className="">
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar progress-bar-striped"
                                                role="progressbar"
                                                style={{ width: "10%" }}
                                                aria-valuenow="10"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar progress-bar-striped bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar progress-bar-striped bg-warning"
                                                role="progressbar"
                                                style={{ width: "75%" }}
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow="100"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
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

export default Progress;