import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

//import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

const Cards = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="cards">
                    <CardBody>
                        <h4 className="card-title mb-4">Cards</h4>

                        <Row>
                            <div className="col-md-6 col-xl-3">
                                <div className="card border">
                                    <img
                                        className="card-img-top img-fluid rounded-top"
                                        src={img1}
                                        alt=""
                                    />
                                    <CardBody>
                                        <h5 className="font-size-16 mt-0">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <Link
                                            to="#"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Button
                                        </Link>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="card border">
                                    <img
                                        className="card-img-top img-fluid rounded-top"
                                        src={img2}
                                        alt=""
                                    />
                                    <CardBody>
                                        <h5 className="font-size-16 mt-0">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                    </CardBody>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-truncate">
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item text-truncate">
                                            Dapibus ac facilisis in
                                        </li>
                                    </ul>
                                    <CardBody>
                                        <Link to="#" className="card-link">
                                            Card link
                                        </Link>
                                        <Link to="#" className="card-link">
                                            Another link
                                        </Link>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card border overflow-hidden">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <img
                                                className="card-img img-fluid"
                                                src={img3}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <CardBody>
                                                <h5 className="font-size-16 mt-0">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with as a to
                                                    additional content.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Last updated 3 mins ago
                                                    </small>
                                                </p>
                                            </CardBody>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border overflow-hidden">
                                    <div className="row no-gutters">
                                        <div className="col-md-6 align-self-center">
                                            <CardBody>
                                                <h5 className="font-size-16 mt-0">
                                                    Card title
                                                </h5>
                                                <p className="card-text">
                                                    This is a wider card with as a to
                                                    additional content.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Last updated 3 mins ago
                                                    </small>
                                                </p>
                                            </CardBody>
                                        </div>

                                        <div className="col-md-6">
                                            <img
                                                className="card-img img-fluid"
                                                src={img4}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <div className="col-lg-4">
                                <div className="card bg-primary text-white-50">
                                    <CardBody>
                                        <h5 className="mt-0 mb-4 text-white text-truncate">
                                            <i className="mdi mdi-bullseye-arrow me-3"></i>{" "}
                                            Primary Card
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card bg-success text-white-50">
                                    <CardBody>
                                        <h5 className="mt-0 mb-4 text-white text-truncate">
                                            <i className="mdi mdi-check-all me-3"></i>{" "}
                                            Success Card
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card bg-info text-white-50">
                                    <CardBody>
                                        <h5 className="mt-0 mb-4 text-white text-truncate">
                                            <i className="mdi mdi-alert-circle-outline me-3"></i>
                                            Info Card
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <div className="col-lg-4">
                                <div className="card border border-warning mb-lg-0">
                                    <div className="card-header bg-transparent border-warning">
                                        <h5 className="my-0 text-warning text-truncate">
                                            <i className="mdi mdi-alert me-3"></i>
                                            warning outline Card
                                        </h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title mt-0">
                                            card title
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card border border-danger mb-lg-0">
                                    <div className="card-header bg-transparent border-danger">
                                        <h5 className="my-0 text-danger text-truncate">
                                            <i className="mdi mdi-block-helper me-3"></i>
                                            Danger outline Card
                                        </h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title mt-0">
                                            card title
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card border border-success mb-0">
                                    <div className="card-header bg-transparent border-success">
                                        <h5 className="my-0 text-success text-truncate">
                                            <i className="mdi mdi-check-all me-3"></i>
                                            Success Card
                                        </h5>
                                    </div>
                                    <CardBody>
                                        <h5 className="card-title mt-0">
                                            card title
                                        </h5>
                                        <p className="card-text">
                                            If several languages coalesce, the grammar
                                            of the resulting individual
                                        </p>
                                    </CardBody>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Cards;