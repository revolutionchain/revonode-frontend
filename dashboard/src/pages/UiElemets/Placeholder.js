import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

//import images
import small1 from "../../assets/images/small/img-1.jpg";

const Placeholder = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card className="overflow-hidden" id="placeholder">
                    <CardBody>
                        <h4 className="card-title mb-4">Placeholder</h4>

                        <Row>
                            <Col xl={12}>
                                <h5 className="font-size-14">Basic</h5>
                                <p className="card-title-desc">Use loading placeholders for your components or pages to indicate something may still be loading</p>

                                <Row>
                                    <Col xl={3} md={6}>
                                        <Card>
                                            <img src={small1} className="card-img-top" alt="card img" />

                                            <CardBody>
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl={3} className="offset-xl-3 col-md-6">
                                        <Card aria-hidden="true">
                                            <img src={small1} className="card-img-top" alt="card dummy img" />
                                            <CardBody>
                                                <h5 className="card-title placeholder-glow">
                                                    <span className="placeholder col-6"></span>
                                                </h5>
                                                <p className="card-text placeholder-glow">
                                                    <span className="placeholder col-7"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-6"></span>
                                                </p>
                                                <Link to="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row
                            className="mt-3">
                            <Col lg={6}>
                                <div>
                                    <div>
                                        <h5 className="font-size-14">Width</h5>
                                        <p className="card-title-desc">You can change the <code>width</code> through grid column classes, width utilities,
                                            or
                                            inline styles.</p>
                                        <div className="">
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder w-75"></span>
                                            <span className="placeholder" style={{ width: "25%" }}></span>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <h5 className="font-size-14">Sizing</h5>
                                        <p className="card-title-desc">The size of <code>.placeholder</code>s are based on the typographic style of the
                                            parent
                                            element. Customize them with sizing modifiers: <code>.placeholder-lg</code>, <code>.placeholder-sm</code>,
                                            or
                                            <code>.placeholder-xs</code>.
                                        </p>
                                        <div className="">
                                            <span className="placeholder col-12 placeholder-lg"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12 placeholder-sm"></span>
                                            <span className="placeholder col-12 placeholder-xs"></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Color</h5>
                                    <p className="card-title-desc">By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overriden with a custom color or utility class.</p>

                                    <div className="">
                                        <span className="placeholder col-12 mb-3"></span>
                                        <span className="placeholder col-12 mb-3 bg-primary"></span>
                                        <span className="placeholder col-12 mb-3 bg-secondary"></span>
                                        <span className="placeholder col-12 mb-3 bg-success"></span>
                                        <span className="placeholder col-12 mb-3 bg-danger"></span>
                                        <span className="placeholder col-12 mb-3 bg-warning"></span>
                                        <span className="placeholder col-12 mb-3 bg-info"></span>
                                        <span className="placeholder col-12 mb-3 bg-light"></span>
                                        <span className="placeholder col-12 bg-dark"></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row
                            className="mt-3">
                            <Col lg={6}>
                                <div>
                                    <h5 className="font-size-14">Placeholder Glow Animation</h5>
                                    <p className="card-title-desc">Animate placehodlers with <code>.placeholder-glow</code> to better convey the perception of something being <em>actively</em> loaded.</p>

                                    <div>
                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Placeholder Wave Animation</h5>
                                    <p className="card-title-desc">Animate placehodlers with  <code>.placeholder-wave</code> to better convey the perception of something being <em>actively</em> loaded.</p>


                                    <div className="placeholder-wave">
                                        <span className="placeholder col-12"></span>
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

export default Placeholder;