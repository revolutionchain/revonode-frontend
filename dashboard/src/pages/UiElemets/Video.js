import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Video = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="video">
                    <CardBody>
                        <h4 className="card-title mb-4">Video</h4>

                        <Row>
                            <Col lg={6}>
                                <div>
                                    <h5 className="font-size-14">
                                        Responsive Embed Video 16:9
                                    </h5>
                                    <p className="card-title-desc">
                                        Aspect ratios can be customized with
                                        modifier classes.
                                    </p>

                                    <div className="">
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">
                                        Responsive Embed Video 21:9
                                    </h5>
                                    <p className="card-title-desc">
                                        Aspect ratios can be customized with
                                        modifier classes.
                                    </p>

                                    <div className="">
                                        <div className="ratio ratio-21x9">
                                            <iframe
                                                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Responsive Embed Video 4:3
                                    </h5>
                                    <p className="card-title-desc">
                                        Aspect ratios can be customized with
                                        modifier classes.
                                    </p>

                                    <div className="">
                                        <div className="ratio ratio-4x3">
                                            <iframe
                                                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Responsive Embed Video 1:1
                                    </h5>
                                    <p className="card-title-desc">
                                        Aspect ratios can be customized with
                                        modifier classes.
                                    </p>

                                    <div className="">
                                        <div className="ratio ratio-1x1">
                                            <iframe
                                                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
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

export default Video;